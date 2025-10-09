import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hlogo from "./../../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      // close if click is outside the dropdown panel and the button
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header className="relative bg-[#f2f2f2]">
      <div className="mx-auto px-6 md:px-24 py-6 z-20 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={Hlogo} alt="Pixla Group" className="h-14" />
          </Link>
        </div>

        {/* CENTER spacer */}
        <div className="flex-1" />

        {/* RIGHT: Nav */}
        <nav className="flex items-center space-x-18 text-gray-600">
          {/* Divisions button */}
          <div className="relative">
            <button
              ref={btnRef}
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="divisions-panel"
              className="flex items-center gap-2 text-md md:text-lg font-medium hover:text-black focus:outline-none "
            >
              <span>Divisions ▾</span>
            </button>
          </div>

          <a
            href="#"
            className="text-md md:text-lg font-medium hover:text-black transition-colors"
          >
            About Us
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-md md:text-lg font-medium hover:text-black transition-colors"
          >
            <span>Contact Us</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 13V19C18 20.1046 17.1046 21 16 21H6C4.89543 21 4 20.1046 4 19V9C4 7.89543 4.89543 7 6 7H12"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 3H21V9"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14L21 3"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>

      {/* Divisions panel (full-width pale strip) */}
      {open && (
        <div
          id="divisions-panel"
          ref={panelRef}
          className="absolute left-0 right-0 top-full bg-white z-30"
        >
          {/* The inner container mimics the screenshot alignment:
              large left offset so items start under the same left margin as the page content */}
          <div className="mx-auto md:pl-24 pl-6 pr-6 py-10 max-w-full">
            <div className="max-w-screen-md">
              <ul className="space-y-6">
                <li className="text-lg md:text-xl font-medium text-gray-900">
                  Retail Media Network
                </li>
                <li className="text-lg md:text-xl font-medium text-gray-900">
                  FMCG / Pixla Consumer Products
                </li>
                <li className="text-lg md:text-xl font-medium text-gray-900">
                  IT Services – Software Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
