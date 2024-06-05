import Image from "next/image";
import { motion } from "framer-motion";
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
            src="/gabriela-romanhole.png"
            alt="Gabriela Romanhole"
            width={400}
            height={400}
            className="rounded-b-full rounded-tr-full float-right pl-6 pb-8 md:pb-0"
          />
          <p className="tracking-wider leading-7 gap-3 pt-8 md:pt-0">
            <span className="block pb-4">
              Desde criança me deparei com a curiosidade e o interesse em{" "}
              <span className="text-[#9d6d49]">entender de pessoas</span>. Eu as
              observava atentamente e fazia minhas leituras acerca do
              funcionamento delas.
            </span>
            <span className="block pb-4">
              Ao chegar na última etapa da vida escolar fui questionada por
              professores e colegas da turma do{" "}
              <span className="text-[#9d6d49]">
                porquê eu não escolhia uma segunda opção de curso
              </span>{" "}
              para prestar vestibular, prática comum entre os vestibulandos de
              minha convivência à época. Eu simplesmente{" "}
              <span className="text-[#9d6d49]">
                não conseguia pensar no que mais eu gostaria de ser além de
                psicóloga
              </span>
              !
            </span>
            <span className="block pb-4">
              Decisão tomada, ingressei no curso de{" "}
              <span className="text-[#9d6d49]">Psicologia</span> na Universidade
              de Fortaleza (UNIFOR), no qual me formei em meados de{" "}
              <span className="text-[#9d6d49]">2013</span>.
            </span>
            <span className="block pb-4">
              Foram várias as dificuldades para alcançar o diploma, a tripla
              jornada de trabalho, faculdade e vida pessoal/familiar me fizeram{" "}
              <span className="text-[#9d6d49]">pensar em desistir</span>{" "}
              incontáveis vezes…
            </span>
            <span className="block pb-4">
              Minha caminhada foi mais longa do que a de meus colegas de turma e
              a cada semestre de “atraso” do curso eu acessava a sensação de que{" "}
              <span className="text-[#9d6d49]">
                tornar-se uma profissional formada não seria uma possibilidade
                pra mim.
              </span>
            </span>
            <span className="block pb-4">
              Porém, o desejo de exercer esse ofício e a pergunta que me
              visitava desde a infância:{" "}
              <span className="text-[#9d6d49]">
                o que mais eu seria além de psicóloga?
              </span>
              , me fizeram dar continuidade até o fim da graduação.
            </span>
            <span className="block pb-4">
              Nessa, conheci a psicanálise e logo cedo me identifiquei com sua{" "}
              <span className="text-[#9d6d49]">
                visão de ser humano e metodologia clínica
              </span>
              , base de meu trabalho, aliada aos estudos no campo
              sócio-histórico-cultural-antropológico, que me ajudam a{" "}
              <span className="text-[#9d6d49]">
                compreender o ser contextualizado
              </span>{" "}
              com seu meio.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
