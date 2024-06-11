import { Metadata } from "next";
import "./globals.css";
import { roboto } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Gabriela Romanhole - Atendimento psicoterapêutico individual online",
  description:
    "Atendimento psicoterapêutico individual online com abordagem psicanalítica.",
  keywords: [
    "Psicoterapia online",
    "Atendimento psicológico virtual",
    "Terapia online",
    "Psicoterapia individual remota",
    "Psicoterapeuta online",
    "Terapia virtual",
    "Aconselhamento psicológico online",
    "Terapia individual à distância",
    "Consulta psicológica online",
    "Terapia por vídeo chamada",
    "Psicoterapia via internet",
    "Atendimento psicoterapêutico remoto",
    "Sessões de terapia online",
    "Psicoterapeuta virtual",
    "Apoio psicológico online",
    "Psicanálise online",
    "Análise online",
  ],
  openGraph: {
    title:
      "Gabriela Romanhole - Atendimento psicoterapêutico individual online",
    description:
      "Atendimento psicoterapêutico individual online com abordagem psicanalítica.",
    type: "website",
    url: "https://gabrielaromanhole.com.br",
    siteName: "Gabriela Romanhole",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gabriela Romanhole - Atendimento psicoterapêutico individual online",
    description:
      "Atendimento psicoterapêutico individual online com abordagem psicanalítica.",
    images: [
      "https://pereiralivia.github.io/gabrielaromanhole/gabriela-romanhole.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
