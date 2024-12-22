"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { playfairDisplay } from "../ui/fonts";

export const LetsTalkButton = () => {
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
        className={`text-[#101010] tracking-wider text-xs md:text-[18px] font-semibold ${playfairDisplay.className}`}
      >
        vamos conversar
      </a>
      <div>
        <ArrowUpRight className="text-[#9d6d49] w-5 h-5" />
      </div>
    </motion.div>
  );
};
