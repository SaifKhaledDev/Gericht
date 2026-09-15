import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Menu", "#menu"],
    ["Contact Us", "#contact"],
  ];

  return (
    <nav className="relative w-full px-6 md:px-16 py-6 border-b border-[#DCCA87]/10 z-30">
      <div className="flex justify-between items-center">
        <div className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-extrabold tracking-widest text-white uppercase cursor-pointer">
          GERÍCHT
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wider font-light text-white">
          {navLinks.map(([label, href]) => (
            <li
              key={href}
              className="hover:text-[#DCCA87] transition cursor-pointer"
            >
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center gap-6 text-sm tracking-wider font-medium">
          <a href="#contact" className="hover:text-[#DCCA87] transition">
            Log In / Registration
          </a>

          <div className="w-[1px] h-6 bg-[#DCCA87]/30"></div>

          <a href="#contact" className="hover:text-[#DCCA87] transition">
            Book Table
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="lg:hidden text-[#DCCA87] text-2xl focus:outline-none"
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {isMenuOpen && (
        <ul className="lg:hidden absolute left-0 right-0 top-full flex flex-col gap-5 bg-[#0C0C0C] px-6 py-6 text-sm tracking-wider text-white shadow-xl">
          {navLinks.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block hover:text-[#DCCA87] transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
