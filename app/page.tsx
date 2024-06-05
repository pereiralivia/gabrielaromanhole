"use client";

import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Header } from "./sections/header";
import { Heading } from "./sections/heading";
import { Reviews } from "./sections/reviews";
import { Services } from "./sections/services";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col relative">
      <div className={`min-h-screen bg-background bg-cover`}>
        <div className="h-[45px]"></div>
        <Header setOpen={setOpen} />
        <Heading />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bg-blend-normal bg-opacity-10 h-screen bg-black w-full z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="fixed top-0 bottom-0 h-screen bg-white w-[280px] flex flex-col p-4 z-50 md:hidden"
        animate={
          open
            ? {
                x: 0,
                transition: {
                  damping: 40,
                },
              }
            : {
                x: -280,
                transition: {
                  damping: 40,
                },
              }
        }
      >
        <XIcon
          className="text-[#9d6d49] self-end"
          onClick={() => setOpen(false)}
        />
        <div className="pt-6 px-4">
          <ul className="flex flex-col gap-6">
            {[
              { href: "#about", label: "Quem sou" },
              { href: "#services", label: "Serviços" },
              { href: "#reviews", label: "Avaliações" },
              { href: "#contact", label: "Contato" },
            ].map((link) => (
              <li
                key={link.href}
                className="uppercase text-[#9d6d49] hover:underline"
              >
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <About />
      <Services />
      <Reviews />
      <Contact />
    </main>
  );
}
