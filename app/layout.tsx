import { Metadata } from "next";
import "./globals.css";
import { roboto } from "./ui/fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";

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
    title: "Gabriela Romanhole - Atendimento psicoterapêutico online",
    description:
      "Atendimento psicoterapêutico individual online com abordagem psicanalítica.",
    type: "website",
    url: "https://gabrielaromanhole.com.br",
    siteName: "Gabriela Romanhole",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriela Romanhole - Atendimento psicoterapêutico online",
    description:
      "Atendimento psicoterapêutico individual online com abordagem psicanalítica.",
    images: ["https://gabrielaromanhole.com.br/gabriela-romanhole.webp"],
  },
  alternates: {
    canonical: "https://gabrielaromanhole.com.br",
    languages: {
      "pt-BR": "https://gabrielaromanhole.com.br",
    },
  },
  icons: {
    icon: "https://gabrielaromanhole.com.br/icon.png",
    shortcut: "https://gabrielaromanhole.com.br/icon.png",
    apple: "https://gabrielaromanhole.com.br/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "https://gabrielaromanhole.com.br/icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-10934518873"
        strategy="afterInteractive"
      />
      <Script id="google-ads-script" strategy="afterInteractive">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-10934518873');
                `}
      </Script>
      {/* <GoogleTagManager gtmId="AW-10934518873" /> */}
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
