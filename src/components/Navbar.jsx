import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative z-50 mt-2 px-20 mr-5 bg-transparent ml-5 ">
      {/* Rotating border glow */}
      <div className="absolute inset-0  rounded-2xl bg-gradient-to-r  blur-sm opacity-60 pointer-events-none" />

      {/* Glassmorphism Navbar */}
      <nav className="glass-navbar relative px-2  py-2 sticky top-0 z-50 rounded-2x border backdrop-blur-lg bg-black/30 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-orange-500">asyncnikhil.in</div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-white">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-orange-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Download Resume with Static Glassy Border Around Button */}
          <div className="hidden md:block  relative group rounded-md  bg-gradient-to-br  resume-navbar">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block   text-orange-400 py-1 hover:text-zinc-400 px-3 text-sm border border-orange  hover:border-zinc-600 rounded-sm font-medium transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <span className="text-2xl text-orange-500">
                {isOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 text-center text-white">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-xl"
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
