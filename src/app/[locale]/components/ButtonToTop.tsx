"use client";
import { useState, useEffect, useCallback } from "react";
import { MoveUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const ButtonToTop = () => {
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button
            className="bg-sky-300 dark:bg-slate-600 py-3 px-4 rounded-lg text-gray-50 flex justify-center items-center gap-2 hover:bg-sky-400 dark:hover:bg-slate-700 transition-all disabled:opacity-50 shadow-lg shadow-sky-400/20 dark:shadow-slate-400/20"
            onClick={scrollToTop}
          >
            <MoveUp />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
