import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Menu from "./components/menu/Menu";

import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
