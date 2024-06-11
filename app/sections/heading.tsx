import { playfairDisplay } from "../ui/fonts";

export const Heading = () => {
  return (
    <div className={`pt-16 px-4 sm:px-20 ${playfairDisplay.className}`}>
      <div className="uppercase text-5xl font-bold">
        <span className="text-[#323336]">Gabriela </span>
        <span className="text-[#9d6d49]">Romanhole</span>
      </div>
      <div className="pt-1 text-lg">Psicóloga & Psicanalista</div>
    </div>
  );
};
