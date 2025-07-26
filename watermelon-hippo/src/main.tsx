import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import Header from "./Header.tsx";
import Hero from "./Hero";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <Header />
    <Hero />
  </StrictMode>,
);

initThemeMode();
