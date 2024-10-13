import { MenuIcon } from "lucide-react";
import { LetsTalkButton } from "./lets-talk-button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { playfairDisplay } from "../ui/fonts";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center border-b-[#9d6d49]/10 py-5 px-4 fixed top-0  bg-[#fafafa] z-50 w-full md:px-20">
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger aria-label="toggle mobile navigation">
            <MenuIcon className="text-[#9d6d49]" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle
                className={`text-start ${playfairDisplay.className} rounded-full border border-[#9d6d49] w-10 h-10 flex items-center justify-center`}
              >
                <div>G</div>
                <div className="text-[#9d6d49]">R</div>
              </SheetTitle>
              <SheetDescription>
                <div className="pt-6 px-4">
                  <ul className="flex flex-col gap-6">
                    {[
                      { href: "/", label: "Início" },
                      { href: "#about", label: "Quem sou" },
                      { href: "#services", label: "Serviços" },
                      { href: "#reviews", label: "Depoimentos" },
                      { href: "#contact", label: "Contato" },
                    ].map((link) => (
                      <li
                        key={link.href}
                        className="uppercase text-[#9d6d49] text-start hover:underline"
                      >
                        <Link href={link.href} onClick={() => setOpen(!open)}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>{" "}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <ul className="gap-6 hidden md:flex">
        {[
          { href: "/", label: "Início" },
          { href: "#about", label: "Quem sou" },
          { href: "#services", label: "Serviços" },
          { href: "#reviews", label: "Depoimentos" },
          { href: "#contact", label: "Contato" },
        ].map((link) => (
          <li
            key={link.href}
            className="uppercase text-[#9d6d49] hover:underline font-light text-sm"
          >
            <Link href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <LetsTalkButton />
    </div>
  );
};
