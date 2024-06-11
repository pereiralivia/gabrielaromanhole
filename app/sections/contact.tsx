import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { playfairDisplay } from "../ui/fonts";
import { Footer } from "./footer";

export const Contact = () => {
  const contactSteps = [
    {
      step: 1,
      title: "Entre em contato pelo WhatsApp",
      description: (
        <p>
          <a
            href="https://wa.me/5585996874109"
            className="underline underline-offset-4 text-[#9d6d49]"
          >
            Clique aqui
          </a>{" "}
          para me enviar uma mensagem.
        </p>
      ),
    },
    {
      step: 2,
      title: "Agende uma sessão",
      description: <p>Vamos combinar juntos os detalhes do atendimento.</p>,
    },
    {
      step: 3,
      title: "Sessão online",
      description: (
        <p>
          No dia e hora combinados, você poderá fazer a sessão no seu computador
          ou celular.
        </p>
      ),
    },
  ];
  return (
    <div
      className="min-h-screen pt-14 bg-[#9d6d49]/10 flex flex-col "
      id="contact"
    >
      <div className="sm:px-20 flex flex-col flex-1 px-6">
        <div className="h-[45px]"></div>
        <div
          className={`uppercase text-3xl font-bold ${playfairDisplay.className}`}
        >
          Vamos <span className="text-[#9d6d49]">conversar?</span>
        </div>
        <div className="flex pt-4 justify-center flex-1 sm:py-8">
          <div className="p-4 grid sm:flex sm:justify-center gap-8  items-center">
            {contactSteps.map((step, index) => (
              <Card
                key={step.title}
                className="flex flex-col rounded text-[#101010] bg-[#fafafa] shadow-md shadow-[#9d6d49]/10 sm:w-[300px] sm:h-[220px] border-none"
              >
                <CardHeader className="flex items-center justify-center">
                  <CardTitle className="bg-[#9d6d49]/10 text-[#9d6d49] w-9 h-9 flex items-center justify-center rounded-full text-md">
                    {index + 1}
                  </CardTitle>
                  <CardDescription className="text-md text-[#9d6d49]">
                    {step.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  {step.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
