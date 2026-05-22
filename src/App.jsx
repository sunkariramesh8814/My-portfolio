import React from "react";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Education from "./Component/Education/Education.jsx";
import Home from "./Component/Home/Home.jsx";
import NavBar from "./Component/NavBar/NavBar.jsx";
import Projects from "./Component/Projects/Projects.jsx";
import Skills from "./Component/Skills/Skills.jsx";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
