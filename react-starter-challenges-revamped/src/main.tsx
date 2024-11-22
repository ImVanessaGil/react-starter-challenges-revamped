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

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <NavLayout />
        <Routes>
          <Route path="/tic_tac_toe" element={<Tic_tac_toe />} />
          <Route path="/video" element={<Video />} />
          <Route path="/github_clone" element={<Github_clone />} />
          <Route path="*" element={<Default />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
