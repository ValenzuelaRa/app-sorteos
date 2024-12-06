"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import AppHero from "../components/AppHero";
import InputField from "../components/InputField";

export default function Home() {
  const [lineCount, setLineCount] = useState(0);

  return (
    <div className="grid items-center justify-items-center min-h-screen pb-20 gap-16">
  
      <Header />

      <main role="main" className="flex flex-col gap-8 row-start-2">
        <AppHero />

        <div
          id="rpp-app"
          className="flex flex-wrap items-center justify-center"
        >
          <InputField lineCount={lineCount} setLineCount={setLineCount} />
        </div>
      </main>


      <footer
        role="contentinfo"
        className="row-start-3 flex gap-6 items-center justify-center"
      >
        <p className="text-sm text-gray-600">© 2024 Sorteo App. All rights reserved.</p>
      </footer>
    </div>
  );
}