import { playfairDisplay } from "../ui/fonts";

export const Heading = () => {
  return (
    <div className={`pt-16 px-4 md:px-20 ${playfairDisplay.className}`}>
      <h1 className="uppercase text-5xl font-bold">
        <span className="text-[#323336]">Gabriela </span>
        <span className="text-[#9d6d49]">Romanhole</span>
      </h1>
      <div className="pt-1 text-lg">Psicóloga & Psicanalista</div>
    </div>
  );
};
