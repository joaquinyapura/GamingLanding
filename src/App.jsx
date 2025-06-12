import React from "react";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Features } from "./Components/Features";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
