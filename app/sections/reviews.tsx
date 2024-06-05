import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { playfairDisplay } from "../ui/fonts";

export const Reviews = () => {
  const reviews = [
    {
      name: "Amanda C.",
      review: (
        <p>
          Gabriela passa serenidade, faz comentários pertinentes, te deixa a
          vontade e com vontade de voltar a cada consulta. Embora seja um
          TRATAMENTO, não é sempre que nos sentimos assim em expor nosso eu
          íntimo para alguém, mesmo que esse alguém seja um profissional.
          Procurava uma pessoa na qual eu me identificasse minimamente - mesmo
          sem a conhecer fora dali e mantendo a distância entre
          psicóloga/paciente - e assim foi. PRA MIM, está funcionando. Desejo
          sucesso!
        </p>
      ),
      date: <p>18 de julho de 2019</p>,
    },
    {
      name: "paciente anônimo",
      review: (
        <p>
          Excelente profissional! Ética, atenciosa, acolhedora... Só tenho
          elogios. Iniciei a terapia há pouco mais de 1 ano e desde então tenho
          percebido inumeras mudanças em minha vida. Tenho conseguido trabalhar
          e compreender melhor algumas questões. Já a indiquei a alguns amigos.
          Recomendo!
        </p>
      ),
      date: "22 de outubro de 2017",
    },
    {
      name: "paciente anônimo",
      review: (
        <p>
          O tratamento foi essencial para retomar minha vida com tranquilidade e
          equilibrio. Tive depressao e pânico, foi muito difícil, mas aos poucos
          com as sessões fui conseguindo descobrir os motivos da minha doença.
          Ressalto, remédios foram só um apoio. É importante psicólogo, chamo o
          meu de anjo.
        </p>
      ),
      date: "29 de janeiro de 2016",
    },
  ];

  return (
    <div className="min-h-screen p-6 pt-14 bg-[#fafafa] md:px-20" id="reviews">
      <div className="h-[45px]"></div>
      <div
        className={`uppercase text-3xl font-bold ${playfairDisplay.className}`}
      >
        O que meus <span className="text-[#9d6d49]">pacientes dizem</span> sobre
        mim
      </div>
      <div className="grid md:grid-cols-3 gap-8 pt-8 ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative flex flex-col  gap-5 rounded rounded-br-[50px] text-[#101010]  bg-[#fafafa]"
          >
            <div
              className={`text-xl font-medium flex flex-col gap-2 text-[#9d6d49] z-10 capitalize ${playfairDisplay.className}`}
            >
              {review.name}
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-[#9d6d49]" />
                ))}
              </div>
            </div>
            <div className="leading-7 tracking-wide border-l-4 pl-4 border-[#9d6d49]/20">
              {review.review}
            </div>
          </div>
        ))}
      </div>
      <Link
        href="https://www.doctoralia.com.br/gabriela-romanhole/psicologo/fortaleza"
        className="bg-[#9d6d49]/60  mt-6 p-2 rounded flex gap-1 w-fit"
      >
        <span className="text-[#fafafa]">Ver perfil no</span>
        <Image
          src="/doctoralia.svg"
          alt="Logo do Doctoralia"
          width={400}
          height={400}
          className="w-[100px]"
        />
      </Link>
    </div>
  );
};
