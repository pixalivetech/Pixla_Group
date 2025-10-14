import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hlogo from "./../../assets/logo.png"; 

// --- Icons ---
const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ExternalLinkIcon = (props) => (
  <svg
    {...props}
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 13V19C18 20.1046 17.1046 21 16 21H6C4.89543 21 4 20.1046 4 19V9C4 7.89543 4.89543 7 6 7H12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 3H21V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14L21 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
// --- End Icons ---

export default function Header() {
  const [openDivisions, setOpenDivisions] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const panelRef = useRef(null);
  const btnRef = useRef(null);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    });
    if (headerRef.current) resizeObserver.observe(headerRef.current);
    return () => {
      if (headerRef.current) resizeObserver.unobserve(headerRef.current);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpenDivisions(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") {
        setOpenDivisions(false);
        setOpenMobileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Updated Divisions Links with correct paths
  const divisionsLinks = [
    { label: "Retail Media Network", path: "/retail" },
    { label: "FMCG / Pixla Consumer Products", path: "/fmcg" },
    { label: "IT Services – Software Development", path: "/it-services" },
  ];

  const closeAllMenus = () => {
    setOpenDivisions(false);
    setOpenMobileMenu(false);
  };

  return (
    <header className="relative bg-[#f2f2f2] z-40">
      <div 
        ref={headerRef} 
        className="mx-auto px-6 md:px-24 py-4 md:py-6 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={closeAllMenus}>
            <img
              src={Hlogo}
              alt="Pixla Group"
              className="h-10 md:h-14 transition-transform duration-300 hover:scale-[1.02]"
            />
          </Link>
        </div>

        <div className="flex-1 hidden md:block" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 xl:space-x-18 text-gray-600">
          {/* Divisions Dropdown */}
          <div className="relative">
            <button
              ref={btnRef}
              onClick={() => setOpenDivisions(s => !s)}
              aria-expanded={openDivisions}
              aria-controls="divisions-panel-desktop"
              className={`flex items-center gap-2 text-lg font-medium transition-colors duration-200 ${
                openDivisions ? "text-black" : "hover:text-black focus:outline-none"
              }`}
            >
              <span>Divisions</span>
              <span className={`transform transition-transform duration-300 ${openDivisions ? "rotate-180" : "rotate-0"}`}>
                ▾
              </span>
            </button>
          </div>

          <Link to="/about" className="text-lg font-medium hover:text-black transition-colors duration-200">About Us</Link>
          <Link to="/contact" className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-black transition-colors duration-200 group">
            <span>Contact Us</span>
            <ExternalLinkIcon className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors duration-200" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-black transition-colors duration-200"
          onClick={() => setOpenMobileMenu(s => !s)}
          aria-label="Toggle Menu"
        >
          {openMobileMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Desktop Divisions Panel */}
      <div
        id="divisions-panel-desktop"
        ref={panelRef}
        className={`hidden md:block absolute left-0 right-0 top-full bg-white transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${
          openDivisions ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-[-10px]"
        }`}
      >
        <div className="mx-auto md:pl-24 pl-6 pr-6 py-10 max-w-full">
          <div className="max-w-screen-md">
            <ul className="space-y-4">
              {divisionsLinks.map(({ label, path }) => (
                <li
                  key={label}
                  className="text-xl font-medium text-gray-900 transition-colors duration-200 hover:text-blue-600 transform hover:translate-x-1"
                >
                  <Link to={path} onClick={closeAllMenus}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <nav
        style={{ top: `${headerHeight}px` }} 
        className={`md:hidden absolute left-0 right-0 bg-white shadow-xl min-h-screen transition-transform duration-300 ease-in-out z-30 ${
          openMobileMenu ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {/* Mobile Divisions Section */}
          <div className="pt-4 pb-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Divisions</h3>
            <ul className="space-y-3 pl-2">
              {divisionsLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    onClick={closeAllMenus}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-1 transform hover:translate-x-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Mobile Links */}
          <Link
            to="/about"
            onClick={closeAllMenus}
            className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 py-2 border-b border-gray-100"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={closeAllMenus}
            className="flex items-center gap-2 text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 py-2"
          >
            Contact Us
            <ExternalLinkIcon className="w-5 h-5 text-gray-600" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
