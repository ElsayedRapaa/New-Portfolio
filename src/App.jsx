import { Route, Routes } from "react-router";
import { useCallback } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

import Header from "./components/header";
import AsideMobile from "./components/aside-mobile";

import useNavbar from "./hooks/useNavbar";

import { Toaster } from "react-hot-toast";

function App() {
  const navbar = useNavbar();

  const handleNavbar = useCallback(() => {
    navbar.onClose();
  }, [navbar]);

  return (
    <main
      className="
        bg-[url('/images/world.avif')]
        bg-cover
        min-w-screen
        min-h-screen
        relative
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          w-full
          h-full
          bg-custom-gradient
          opacity-95
        "
      ></div>
      <div
        className={`
          fixed
          inset-0
          bg-black
          transition-opacity
          duration-200
          z-50
          ${navbar.isOpen ? "opacity-30" : "opacity-0 pointer-events-none"}
        `}
        onClick={handleNavbar}
      ></div>
      <Header />
      <Toaster />
      <AsideMobile />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
