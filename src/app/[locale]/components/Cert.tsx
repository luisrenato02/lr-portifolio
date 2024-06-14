"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface CertProps {
  img: StaticImageData;
  alt: string;
  duration: number;
}
export const Cert = ({ img, duration, alt }: CertProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: duration }}
    >
      <Image width={200} height={200} src={img} alt={alt} />
    </motion.div>
  );
};
