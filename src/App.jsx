import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Education from "./sections/Education/Education";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";

import ProjectDetails from "./sections/Projects/ProjectDetails";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      navigate("/", {
        replace: true,
        state: null,
      });
    }
  }, [location.state, navigate]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/projects/:slug"
        element={<ProjectDetails />}
      />
    </Routes>
  );
}

export default App;