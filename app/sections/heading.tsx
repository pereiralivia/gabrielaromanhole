import Link from "next/link";
import { playfairDisplay } from "../ui/fonts";
import { Calendar } from "lucide-react";

export const Heading = () => {
  return (
    <div className={`pt-16 px-4 md:px-20 ${playfairDisplay.className}`}>
      <h1 className="uppercase text-5xl font-bold">
        <span className="text-[#323336]">Gabriela </span>
        <span className="text-[#9d6d49]">Romanhole</span>
      </h1>
      <div className="pt-1 text-lg">Psicóloga & Psicanalista</div>
      <div className="cursor-pointer mt-6 px-4 py-2.5 bg-[#9d6d49]/10 w-fit rounded-full hover:bg-[#9d6d49]/20 shadow-sm shadow-[#9d6d49]/10">
        <Link
          href="#"
          className={`${playfairDisplay.className} uppercase text-[#9d6d49] flex gap-2 items-center text-sm md:text-base font-bold`}
        >
          <Calendar className="w-4 h-4" />
          Agendar uma sessão
        </Link>
      </div>
    </div>
  );
};
