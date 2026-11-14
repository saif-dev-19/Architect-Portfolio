
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Education from "./sections/Education/Education";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
      </main>
    </>
  );
}

export default App;
