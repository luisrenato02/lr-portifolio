"use client";
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

interface CertificateModalProps {
  title: string | null;
  image: StaticImageData | null;
  alt: string;
  closeLabel: string;
  onClose: () => void;
}

// Native <dialog>: focus trap, Esc to close and background inertness come for free
export const CertificateModal = ({
  title,
  image,
  alt,
  closeLabel,
  onClose,
}: CertificateModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);
  const open = Boolean(image);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby="certificate-title"
      className="modal-appear w-[min(92vw,960px)] max-h-[90vh] p-0 bg-surface text-fg border border-edge rounded-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm"
    >
      {image && (
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-line">
            <h2 id="certificate-title" className="text-base font-semibold">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="w-11 h-11 shrink-0 flex items-center justify-center border border-edge rounded-full text-soft hover:text-white hover:border-edge-hover"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-4 overflow-auto">
            <Image
              src={image}
              alt={alt}
              sizes="(min-width: 1024px) 928px, 90vw"
              className="w-full h-auto max-h-[72vh] object-contain"
            />
          </div>
        </div>
      )}
    </dialog>
  );
};
