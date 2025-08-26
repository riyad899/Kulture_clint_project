import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Our Work", href: "#work", id: "work" },
    { name: "Collaborations", href: "#collaborations", id: "collaborations" },
    { name: "Highlights", href: "#highlights", id: "highlights" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Smooth scroll function
  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-yellow-400/20 shadow-xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img
                  src="https://i.ibb.co.com/9mYHfRKv/Logo.png"
                  alt="Kulture Tribe Logo"
                  className="w-10 h-10 object-contain rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-lg opacity-30 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-black leading-tight">
                  <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                    KULTURE
                  </span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`relative group px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 ${
                      activeSection === item.id
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                  ></div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Glow effect */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-yellow-400/5 rounded-lg blur-sm"></div>
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button & Social Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <a
                  href="https://instagram.com/kulture.tribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors duration-300 p-1.5 hover:bg-yellow-400/10 rounded-full"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info.kulturetribe@gmail.com"
                  className="text-white hover:text-yellow-400 transition-colors duration-300 p-1.5 hover:bg-yellow-400/10 rounded-full"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="w-px h-6 bg-white/20"></div>

              <button
                onClick={() => handleNavClick("#contact", "contact")}
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1.5 rounded-full text-sm font-bold hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Let's Collaborate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400/10 border border-yellow-400/20 hover:bg-yellow-400/20 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-black via-gray-900 to-black border-l border-yellow-400/20 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-yellow-400/20">
            <div className="flex items-center space-x-3">
              <img
                src="/src/assets/images/Logo.png"
                alt="Kulture Tribe Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
              <div>
                <h2 className="text-lg font-black text-white">KULTURE TRIBE</h2>
                <p className="text-xs text-yellow-400/80">FIRST IN ME</p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border-l-4 border-yellow-400"
                    : "text-white hover:bg-white/5 hover:text-yellow-400"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen
                    ? "slideInRight 0.5s ease-out forwards"
                    : "none",
                }}
              >
                <span className="relative">
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Social Links & CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-yellow-400/20">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <a
                href="https://instagram.com/kulture.tribe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info.kulturetribe@gmail.com"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => handleNavClick("#contact", "contact")}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-full font-bold hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
