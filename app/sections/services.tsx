import { motion } from "framer-motion";
import { playfairDisplay } from "../ui/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

export const Services = () => {
  const [currentItem, setCurrentItem] = useState("item-1");

  const services = [
    {
      title: "Ansiedade",
      description: (
        <div className="space-y-2">
          <p>
            Você <span className="text-[#9d6d49]">sofre por antecipar</span>{" "}
            possíveis situações difíceis que podem lhe ocorrer?{" "}
          </p>
          <p>
            <span className="text-[#9d6d49]">
              Pensamentos intrusivos, taquicardia, sudorese intensa
            </span>{" "}
            são sintomas que seu corpo costuma sentir em situações ansiogênicas?
          </p>
        </div>
      ),
    },
    {
      title: "Depressão",
      description: (
        <div className="space-y-2">
          <p>
            Você já se deparou com a{" "}
            <span className="text-[#9d6d49]">
              ausência do prazer, ânimo, disposição
            </span>
            ?
          </p>
          <p>
            Já sentiu uma espécie de{" "}
            <span className="text-[#9d6d49]">anestesia dos sentidos </span> ou
            tristeza profunda por período prolongado?
          </p>
        </div>
      ),
    },
    {
      title: "Estresse",
      description: (
        <p>
          Você sente uma{" "}
          <span className="text-[#9d6d49]">sobrecarga mental</span>,{" "}
          <span className="text-[#9d6d49]">cansaço extremo</span>,
          irritabilidade, predisposição a alteração de humor?
        </p>
      ),
    },
    {
      title: "Insônia",
      description: (
        <p>
          Você tem dificuldade para dormir ou para ter um{" "}
          <span className="text-[#9d6d49]">sono de qualidade</span> , mesmo que
          faça a higiene do sono antes de deitar?
        </p>
      ),
    },
    {
      title: "Auto Estima",
      description: (
        <p>
          Você tem dificuldade de{" "}
          <span className="text-[#9d6d49]">
            reconhecer suas qualidades e aptidões
          </span>
          ? Sente-se mal com sua aparência e/ou jeito de ser?
        </p>
      ),
    },
    {
      title: "Problemas com Relacionamento",
      description: (
        <p>
          Você já sofreu{" "}
          <span className="text-[#9d6d49]">
            agressões verbais, físicas, psicológicas ou patrimoniais
          </span>{" "}
          em algum relacionamento?
        </p>
      ),
    },
    {
      title: "Assédio",
      description: (
        <p>
          Você já se viu na interação interpessoal diante de{" "}
          <span className="text-[#9d6d49]">condutas de natureza ofensiva</span>,
          como perturbação, ameaça, chantagem, perseguição e/ou importunação
          sexual?
        </p>
      ),
    },
    {
      title: "Trabalho e carreira",
      description: (
        <p>
          Você sente dificuldade de encontrar um ofício em que haja{" "}
          <span className="text-[#9d6d49]">identificação</span>, afinidade ou
          atravessa desafios financeiros para{" "}
          <span className="text-[#9d6d49]">
            viver com qualidade na profissão
          </span>{" "}
          de sua escolha?
        </p>
      ),
    },
    {
      title: "Luto",
      description: (
        <p>
          Você já atravessou{" "}
          <span className="text-[#9d6d49]">perdas significativas</span> e teve
          dificuldade em lidar com elas?
        </p>
      ),
    },
    {
      title: "Distúrbios Alimentares",
      description: (
        <p>
          Como é a sua{" "}
          <span className="text-[#9d6d49]">relação com a comida</span>? Já
          apresentou episódios anoréxicos, bulímicos e/ou compulsivos?
        </p>
      ),
    },
    {
      title: "Gordofobia",
      description: (
        <p>
          Você já passou por situações de rejeição por não ter um corpo
          considerado aceito pelo{" "}
          <span className="text-[#9d6d49]">padrão de beleza</span> cultural
          atual?
        </p>
      ),
    },
    {
      title: "Vício/Compulsão",
      description: (
        <p>
          Você faz <span className="text-[#9d6d49]">uso abusivo</span> ou sem
          controle de alguma substância, causando impactos negativos para sua
          vida? Você{" "}
          <span className="text-[#9d6d49]">compra desnecessariamente</span> sem
          controle e sente-se mal depois ?
        </p>
      ),
    },
    {
      title: "Não Monogamia",
      description: (
        <p>
          Você encontra dificuldade de conviver socialmente com uma escolha de{" "}
          <span className="text-[#9d6d49]">
            dinâmica relacional diferente do padrão social
          </span>
          ? Que desafios você enfrenta nessa proposta de relação?
        </p>
      ),
    },
    {
      title: "Racismo",
      description: (
        <div className="space-y-2">
          <p>
            Você já sofreu preconceito/violência por suas características
            étnicas?
          </p>
          <p>
            Já se deparou com{" "}
            <span className="text-[#9d6d49]">
              prejuízos na circulação social e na conquista de seus objetivos
            </span>{" "}
            em decorrência de suas origens raciais?
          </p>
          <p> Já sentiu rejeição nas relações por causa de seu tom de pele?</p>
        </div>
      ),
    },
    {
      title: "Xenofobia",
      description: (
        <p>
          Você já foi alvo de
          <span className="text-[#9d6d49]">
            {" "}
            chacota, descredibilização, exclusão ou impedimentos
          </span>{" "}
          em decorrência de sua região natal?
        </p>
      ),
    },
    {
      title: "Violência de Gênero",
      description: (
        <p>
          Você já sofreu{" "}
          <span className="text-[#9d6d49]">
            tratamentos inadequados, falta de reconhecimento, julgamentos ou
            agressões
          </span>{" "}
          de qualquer ordem em decorrência de seu{" "}
          <span className="text-[#9d6d49]">gênero e identidade</span>?
        </p>
      ),
    },
    {
      title: "Violência de Orientação Sexual",
      description: (
        <p>
          Você já sofreu violência ou rejeição em decorrência de sua orientação
          sexual? Você sente{" "}
          <span className="text-[#9d6d49]">medo de assumir sua orientação</span>{" "}
          e sofrer preconceito?
        </p>
      ),
    },
    {
      title: "Problemas com Acessibilidade",
      description: (
        <p>
          Você é pessoa com deficiência e sofre com a{" "}
          <span className="text-[#9d6d49]">
            falta de adaptação e acessibilidade
          </span>{" "}
          nos ambientes públicos e privados?
        </p>
      ),
    },
    {
      title: "Etarismo",
      description: (
        <p>
          Você já se deparou com{" "}
          <span className="text-[#9d6d49]">
            preconceitos ou limitações sociais
          </span>{" "}
          em decorrência de sua idade?
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#9d6d49]/10 md:px-14 py-6" id="services">
      <div className="h-[45px]"></div>
      <div
        className={`px-6 py-8 uppercase text-3xl font-bold ${playfairDisplay.className}`}
      >
        Serviços
      </div>
      <div className="md:pb-4 flex flex-col gap-2 tracking-wide leading-7 text-[#101010] px-6">
        <p>
          Atendimento psicoterapêutico individual online, com metodologia
          psicanalítica para pessoas a partir de 18 anos.
        </p>
        <p>
          A sessão ocorre por chamada de vídeo e é necessário estar num ambiente
          com privacidade para falar. Segue abaixo alguns exemplos das demandas
          atendidas, dentre outros.
        </p>
      </div>
      <Accordion
        type="single"
        value={currentItem}
        collapsible
        className="md:hidden w-full px-6 pt-4 "
        orientation="vertical"
        onValueChange={setCurrentItem}
      >
        {services
          .sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          })
          .map((service, index) => (
            <AccordionItem
              key={service.title}
              value={`item-${index + 1}`}
              className="border-none bg-[#fafafa] rounded-tr-[30px] rounded-bl-[30px] mb-4 p-4 shadow-md shadow-[#9d6d49]/10"
            >
              <AccordionTrigger
                className={`no-underline tracking-wide text-xl md:text-2xl text-[#9d6d49] font-light text-start ${playfairDisplay.className}`}
              >
                {service.title}
              </AccordionTrigger>
              <AccordionContent className="pt-2 text-[#101010] bg-[#fafafa] text-sm leading-6 tracking-wide md:text-md">
                {service.description}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
      <div className="hidden md:grid gap-6 md:grid-cols-3 pt-8 p-6">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="relative flex flex-col gap-5 rounded rounded-br-[50px] text-[#101010] bg-[#fafafa] p-6 shadow-md shadow-[#9d6d49]/10"
          >
            <p
              className={`tracking-wide text-xl md:text-2xl font-medium text-[#9d6d49] ${playfairDisplay.className}`}
            >
              {service.title}
            </p>
            <div className="text-sm leading-6 tracking-wide md:text-md">
              {service.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
