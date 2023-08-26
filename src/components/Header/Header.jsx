import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenClose = () => {
    if (window.matchMedia("(max-width: 640px)").matches) {
      setMenuOpen((prevmenuOpen) => !prevmenuOpen);
    }
  };

  return (
    <header>
      <div className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-white sm:justify-center">
        <div className="flex h-fit max-w-screen-lg items-center justify-between  px-2 sm:w-full">
          <h1 className="w-28">
            <Link href="/#areaTop" scroll={false}>
              <img className="w-fit" src="/logo.svg" alt="logo" />
            </Link>
          </h1>
          <nav className="absolute right-0 h-full w-40 font-sans text-xl sm:static sm:flex sm:h-fit sm:justify-end">
            <ul
              className={
                menuOpen
                  ? "absolute top-0 flex h-screen w-fit flex-col bg-white transition-transform duration-500 sm:flex-row sm:justify-end sm:bg-transparent"
                  : "absolute top-0 flex h-screen w-fit -translate-y-full flex-col bg-white transition-transform duration-500 sm:static sm:h-fit sm:translate-y-0 sm:flex-row sm:justify-end sm:bg-transparent sm:transition-none"
              }
              id="scroll_nav"
            >
              <li className="px-4 py-6 sm:hidden">
                <Link href="/#areaTop" scroll={false} onClick={handleOpenClose}>
                  Top
                </Link>
              </li>
              <li className="px-4 py-6">
                <Link
                  className="sm:hoverUnderLine01"
                  href="/#areaProfile"
                  scroll={false}
                  onClick={handleOpenClose}
                >
                  Profile
                </Link>
              </li>
              <li className="px-4 py-6">
                <Link
                  className="sm:hoverUnderLine01"
                  href="/#areaWork"
                  scroll={false}
                  onClick={handleOpenClose}
                >
                  Work
                </Link>
              </li>
              <li className="px-4 py-6">
                <Link
                  className="sm:hoverUnderLine01"
                  href="/contact"
                  onClick={handleOpenClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button
          className="relative right-5 h-10 w-10 sm:hidden"
          onClick={handleOpenClose}
        >
          <div className="h-10 w-10">
            <span
              className={
                menuOpen
                  ? "absolute h-1 w-10 origin-left translate-x-1.5 translate-y-0 rotate-45 transform rounded-sm bg-[#393e46] transition-transform duration-500"
                  : "absolute h-1 w-10 origin-left rotate-0 transform rounded-sm bg-[#393e46] transition-transform duration-500"
              }
            ></span>
            <span
              className={
                menuOpen
                  ? "translation absolute top-3 h-1 w-0 rounded-sm bg-transparent duration-500"
                  : "translation absolute top-3 h-1 w-10 rounded-sm bg-[#393e46] duration-500"
              }
            ></span>
            <span
              className={
                menuOpen
                  ? "absolute top-6 h-1 w-10 origin-left translate-x-1.5 translate-y-1 -rotate-45 transform rounded-sm bg-[#393e46] transition duration-500"
                  : "absolute top-6 h-1 w-10 origin-left rotate-0 transform rounded-sm bg-[#393e46] transition duration-500"
              }
            ></span>
          </div>
          <span className="absolute -bottom-2 w-10 text-center">menu</span>
        </button>
      </div>
    </header>
  );
}
