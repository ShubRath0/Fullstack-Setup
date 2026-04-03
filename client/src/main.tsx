import { Providers } from "@/app/Providers";
import "@/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Providers />
    </StrictMode>,
);
