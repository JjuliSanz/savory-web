"use client";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { ArrowTop } from "@/assets/icons/ArrowTop";
import { cn } from "@/utils/cn";

const ToTopButton = ({ extraClass }: { extraClass?: string }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={handleClick}
          className={cn(
            `bg-marron text-blanco p-3 rounded-full border border-blanco fixed bottom-5 right-3 z-50`,
            extraClass
          )}
          initial={{ opacity: 0, bottom: 50 }}
          animate={{ opacity: 1, bottom: 20 }}
          exit={{ opacity: 0, bottom: 50 }}
        >
          <ArrowTop />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ToTopButton;
