import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";

import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />

      <section id="home"><Hero/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="experience"><Experience/></section>
      <section id="projects"><Projects/></section>
      <section id="certifications"><Certifications/></section>
      <section id="contact"><Contact/></section>

    </div>
  );
};

export default HomePage;
