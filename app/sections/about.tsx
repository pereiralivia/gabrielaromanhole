import Image from "next/image";
import { playfairDisplay } from "../ui/fonts";

export const About = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] md:px-20 py-6 px-6" id="about">
      <div className="h-[45px]"></div>
      <div>
        <div
          className={`uppercase text-3xl font-bold py-8 ${playfairDisplay.className}`}
        >
          Quem <span className="text-[#9d6d49]">sou</span>
        </div>
        <div>
          <Image
            src="https://gabrielaromanhole.com.br/gabriela-romanhole.webp"
            alt="Gabriela Romanhole"
            width={400}
            height={400}
            className="rounded-b-full rounded-tr-full float-right pl-6 pb-8 md:pb-0"
          />
          <p className="tracking-wider leading-7 gap-3 pt-8 md:pt-0">
            <span className="block pb-4">
              Há mais de <span className="text-[#9d6d49]">10 anos</span> atuo no
              acompanhamento psicológico clínico de pessoas adultas e idosas,
              através da{" "}
              <span className="text-[#9d6d49]">metodologia psicanalítica</span>,
              sempre atenta à <span className="text-[#9d6d49]">ética</span>{" "}
              profissional e ao{" "}
              <span className="text-[#9d6d49]">
                acolhimento centrado no contexto específico
              </span>{" "}
              do paciente.
            </span>
            <span className="block pb-4">
              Tenho verdadeira{" "}
              <span className="text-[#9d6d49]">paixão pelo meu trabalho</span>,
              acho fascinante acompanhar cada história e seus desdobramentos! É
              muito
              <span className="text-[#9d6d49]"> gratificante </span>observar a
              <span className="text-[#9d6d49]"> capacidade humana</span> de se
              desenvolver e alcançar{" "}
              <span className="text-[#9d6d49]">mudanças de vida!</span>
            </span>
            <span className="block pb-4">
              Estou disponível para realizar{" "}
              <span className="text-[#9d6d49]">terapia online</span>, recebendo
              pacientes de{" "}
              <span className="text-[#9d6d49]">qualquer parte do Brasil!</span>
            </span>
          </p>
          <div className="border border-[#9d6d49]/60  p-2 rounded flex gap-1 w-fit text-[#9d6d49]">
            CRP 11/09820
          </div>
        </div>
      </div>
    </div>
  );
};
