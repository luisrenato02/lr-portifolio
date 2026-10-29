"use client";
import { useEffect, useRef } from "react";

// Render resolution relative to CSS pixels (lower = cheaper and softer)
const RESOLUTION = 0.75;
// Per-frame easing: lower = slower, smoother (fast mouse moves get averaged out)
const FOLLOW = 0.035;
const STRENGTH_EASE = 0.04;
// How quickly the water calms down once the pointer stops
const STRENGTH_DECAY = 0.975;
// Caustics speed while the pointer moves, and the fraction kept when idle
const FLOW_SPEED = 0.22;
const IDLE_FLOW = 0.3;

const VERTEX = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

// Faint water caustics (the light network seen at the bottom of a pool)
// drifting slowly over the whole background. Around the pointer the surface
// ripples: the caustics refract outward in waves and glow a little brighter.
const FRAGMENT = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float u_scale;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_strength;
uniform float u_flow;

const float TAU = 6.28318530718;

float caustics(vec2 uv, float time) {
  vec2 p = uv * TAU - 250.0;
  vec2 i = p;
  float c = 1.0;
  const float inten = 0.005;
  for (int n = 0; n < 5; n++) {
    float t = time * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));
  }
  c /= 5.0;
  c = 1.17 - pow(c, 1.4);
  return clamp(pow(abs(c), 8.0), 0.0, 1.0);
}

void main() {
  vec2 p = gl_FragCoord.xy / u_scale;
  vec2 toMouse = p - u_mouse;
  float d = length(toMouse);
  float falloff = exp(-d / 170.0) * u_strength;

  // Ripple around the pointer refracts the caustics in and out
  float wave = sin(d * 0.035 - u_time * 1.6) * falloff;
  p += (d > 0.001 ? toMouse / d : vec2(0.0)) * wave * 20.0;

  float light = caustics(p / 520.0, u_flow);

  float alpha = light * (0.07 + 0.12 * falloff);
  gl_FragColor = vec4(vec3(0.714, 0.949, 0.243) * alpha, alpha);
}
`;

const compile = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
};

// Water caustics background with pointer ripples, drawn with a WebGL fragment
// shader. Static (single frame) for touch devices and reduced motion; renders
// nothing if WebGL is unavailable.
export const WaterDistortion = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false });
    if (!canvas || !gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // One triangle covering the whole viewport
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uScale = gl.getUniformLocation(program, "u_scale");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uStrength = gl.getUniformLocation(program, "u_strength");
    const uFlow = gl.getUniformLocation(program, "u_flow");

    let scale = 1;
    const resize = () => {
      scale = Math.min(window.devicePixelRatio || 1, 2) * RESOLUTION;
      canvas.width = Math.round(window.innerWidth * scale);
      canvas.height = Math.round(window.innerHeight * scale);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    // Shader space is in CSS px with the origin at the bottom-left
    const target = { x: -1e4, y: -1e4 };
    const mouse = { x: -1e4, y: -1e4 };
    let strength = 0;
    let targetStrength = 0;
    let frame = 0;
    const start = performance.now();
    // Caustics clock: advances slowly when idle, at full speed while the
    // pointer moves. Integrated per frame so speed changes never jump.
    let flow = 0;
    let lastNow = start;

    const draw = (now: number) => {
      mouse.x += (target.x - mouse.x) * FOLLOW;
      mouse.y += (target.y - mouse.y) * FOLLOW;
      targetStrength *= STRENGTH_DECAY;
      strength += (targetStrength - strength) * STRENGTH_EASE;
      const dt = Math.min((now - lastNow) / 1000, 0.1);
      lastNow = now;
      flow += dt * FLOW_SPEED * (IDLE_FLOW + (1 - IDLE_FLOW) * strength);
      gl.uniform1f(uScale, scale);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uStrength, strength);
      gl.uniform1f(uFlow, flow);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      draw(now);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = window.innerHeight - e.clientY;
      if (strength < 0.01) {
        // Ripples start where the pointer is instead of sliding in
        mouse.x = target.x;
        mouse.y = target.y;
      }
      targetStrength = 1;
    };

    const animate =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !window.matchMedia("(pointer: coarse)").matches;

    resize();
    const onResize = () => {
      resize();
      if (!animate) draw(start);
    };
    window.addEventListener("resize", onResize);

    if (animate) {
      window.addEventListener("pointermove", onMove, { passive: true });
      frame = requestAnimationFrame(loop);
    } else {
      draw(start);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 w-full h-full"
    />
  );
};
