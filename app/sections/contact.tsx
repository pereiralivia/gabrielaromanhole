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
      className="min-h-screen pt-14 bg-[#9d6d49]/10 flex flex-col md:items-stretch"
      id="contact"
    >
      <div className="md:px-20 flex flex-col flex-1 px-6">
        <div className="h-[45px]"></div>
        <div
          className={`uppercase text-3xl font-bold ${playfairDisplay.className}`}
        >
          Vamos <span className="text-[#9d6d49]">conversar?</span>
        </div>
        <div className="flex flex-1 pt-4 justify-center md:py-8">
          <ol className="p-4 grid md:grid-cols-3 gap-8">
            {contactSteps.map((step) => (
              <li
                key={step.step}
                className="flex flex-col items-center justify-center bg-[#fafafa] p-4 rounded-lg"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-[#9d6d49]/10 text-[#9d6d49] rounded-full ring-4 ring-white">
                  {step.step}
                </span>
                <h3 className="pt-4 font-medium leading-tight">{step.title}</h3>
                <div className="text-center">{step.description}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};
