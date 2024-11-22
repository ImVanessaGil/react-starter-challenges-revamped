import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavLayout from "../src/pages/NavLayout";
import { Tic_tac_toe } from "./pages/Tic_tac_toe";
import Video from "./pages/Video";
import Github_clone from "./pages/Github_clone";
import Default from "./pages/Default";
import Home from "./pages/Home";
import AppRouter from "./router/AppRouter";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
