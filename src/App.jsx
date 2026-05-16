import React from "react";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Education from "./component/Education/Education.jsx";
import Home from "./component/Home/Home.jsx";
import NavBar from "./component/NavBar/NavBar.jsx";
import Projects from "./component/Projects/Projects.jsx";
import Skills from "./component/Skills/Skills.jsx";

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
