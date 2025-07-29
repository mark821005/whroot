import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import Header from "./Components/Header.tsx";
import Hero from "./Components/Hero.tsx";
import Footer from "./Components/Footer.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <App />
  </StrictMode>,
);

initThemeMode();
