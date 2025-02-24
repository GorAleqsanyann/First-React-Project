import { BrowserRouter as Router, Routes, Route } from "react-router";

import Menu from "./components/Menu/Menu";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage/Contact";
import Weather from "./pages/WeatherPage/Weather";
import Register from "./pages/RegisterPage/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Weather" element={<Weather />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
