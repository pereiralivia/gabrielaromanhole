import Link from "next/link";
import { playfairDisplay } from "../ui/fonts";
import { Calendar } from "lucide-react";

export const Heading = () => {
  return (
    <div className={`pt-16 px-4 md:px-20 ${playfairDisplay.className}`}>
      <h1 className="uppercase text-5xl">
        <span className="text-[#323336]">Gabriela </span>
        <span className="text-[#9d6d49]">Romanhole</span>
      </h1>
      <div className="pt-1 text-lg">Psicóloga & Psicanalista</div>
      <div className="cursor-pointer mt-6 px-4 py-2.5 bg-gray-800 w-fit rounded-full hover:bg-gray-700 shadow-sm shadow-gray-100">
        <Link
          href="https://wa.me/5585996874109"
          className={`uppercase text-gray-100 flex gap-2 items-center text-sm md:text-base font-semibold tracking-wider`}
        >
          <Calendar className="w-4 h-4" />
          Agendar uma sessão
        </Link>
      </div>
    </div>
  );
};
