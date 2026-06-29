import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Skill1 from "./components/Skill1";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Skill1 />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;