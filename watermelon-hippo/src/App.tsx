import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Literature from "./Pages/literature";
import Art from "./Pages/art";
import Safari from "./Pages/safari";
import PopCult from "./Pages/populareculture";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/literature" element={<Literature />} />
        <Route path="/art" element={<Art />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/popular-culture" element={<PopCult />} />
      </Routes>
    </Router>
  );
}
