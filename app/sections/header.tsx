import { MenuIcon } from "lucide-react";
import { LetsTalkButton } from "./lets-talk-button";
import Link from "next/link";

export const Header = ({ setOpen }: { setOpen: any }) => {
  return (
    <div className="flex justify-between items-center  border-b-[#9d6d49]/10 py-5 px-4 fixed top-0  bg-[#fafafa] z-50 w-full md:px-20">
      <button onClick={() => setOpen(true)} className="md:hidden">
        <MenuIcon className="text-[#9d6d49]" />
      </button>
      <ul className="gap-6 hidden md:flex">
        {[
          { href: "", label: "Início" },
          { href: "#about", label: "Quem sou" },
          { href: "#services", label: "Serviços" },
          { href: "#reviews", label: "Avaliações" },
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
