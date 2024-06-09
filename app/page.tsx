"use client";

import { useState } from "react";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Header } from "./sections/header";
import { Heading } from "./sections/heading";
import { Reviews } from "./sections/reviews";
import { Services } from "./sections/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <div
        className={`min-h-screen bg-[url("https://pereiralivia.github.io/gabrielaromanhole/background.png")] bg-cover`}
      >
        <div className="h-[45px]"></div>
        <Header />
        <Heading />
      </div>
      <About />
      <Services />
      <Reviews />
      <Contact />
    </main>
  );
}
