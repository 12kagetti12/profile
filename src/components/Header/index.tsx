import React from "react";
import Link from "next/link";
import Image from "next/image";
import House_fill from "@/components/icons/House.svg";
import Me_fill from "@/components/icons/Me_fill.svg";
import Work from "@/components/icons/Work.svg";
import Mail from "@/components/icons/Mail.svg";

const Header = () => {
  return (
    <header className="mx-4 flex h-20 items-center">
      <h1 className="w-28">
        <Link href="/#areaTop" scroll={false}>
          <img className="w-fit" src="/logo.svg" alt="logo" />
        </Link>
      </h1>
      <nav className="fixed bottom-0 left-0 h-20 w-full  bg-white sm:static sm:flex sm:h-fit sm:justify-end">
        <ul className="flex w-full justify-around" id="scroll_nav">
          <li className="px-4 py-6 sm:hidden">
            <Link href="/#areaTop" scroll={false}>
              <House_fill className="fill-current text-[#393E46]" />
            </Link>
          </li>
          <li className="px-4 py-6">
            <Link
              className="sm:hoverUnderLine01"
              href="/#areaProfile"
              scroll={false}
            >
              <Me_fill className=" fill-current  text-[#ADB2BA]" />
            </Link>
          </li>
          <li className="px-4 py-6">
            <Link
              className="sm:hoverUnderLine01"
              href="/#areaWork"
              scroll={false}
            >
              <Work className="fill-current  text-[#ADB2BA]" />
            </Link>
          </li>
          <li className="px-4 py-6">
            <Link className="sm:hoverUnderLine01" href="/contact">
              <Mail className="fill-current  text-[#ADB2BA]" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
