import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Popculture from "./Pages/popculture";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pop-culture" element={<Popculture />} />
      </Routes>
    </Router>
  );
}
