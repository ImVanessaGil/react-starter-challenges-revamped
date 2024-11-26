import { Route, Routes } from "react-router-dom";
import NavLayout from "../src/pages/NavLayout";
import { Tic_tac_toe } from "./pages/Tic_tac_toe";
import Video from "./pages/Video";
import Github_clone from "./pages/Github_clone";
import Default from "./pages/Default";
import Home from "./pages/Home";

function App() {
  return (
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
  );
}

export default App;
