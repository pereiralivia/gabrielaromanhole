"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { playfairDisplay } from "../ui/fonts";

export const LetsTalkButton = () => {
  const handleConversion = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-10934518873/iTV-CJD80o0bENmI_t0o",
      });
    }
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.7 },
      }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center gap-1 border-b-2 border-b-[#9d6d49] pb-1"
    >
      <a
        href="https://wa.me/5585996874109"
        onClick={handleConversion} // 👈 Trigger conversion here
        className={`text-[#101010] tracking-wider text-base md:text-[18px] font-semibold ${playfairDisplay.className}`}
        target="_blank"
      >
        vamos conversar
      </a>
      <div>
        <ArrowUpRight className="text-[#9d6d49] w-5 h-5" />
      </div>
    </motion.div>
  );
};
