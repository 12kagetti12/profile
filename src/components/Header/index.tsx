"#init";

import React from "react";
import Link from "next/link";
import House_fill from "@/components/icons/House.svg";
import Me_fill from "@/components/icons/Me_fill.svg";
import Work from "@/components/icons/Work.svg";
import Mail from "@/components/icons/Mail.svg";
import { useState } from "react";

type Icon = {
  id: number;
  iconSvg: React.FC;
  text: string;
  sectionName: string;
  active: boolean;
};

const navIcons: Icon[] = [
  {
    id: 0,
    iconSvg: House_fill,
    text: "Home",
    sectionName: "/#areaTop",
    active: true,
  },
  {
    id: 1,
    iconSvg: Me_fill,
    text: "Profile",
    sectionName: "/#areaProfile",
    active: false,
  },
  {
    id: 2,
    iconSvg: Work,
    text: "Work",
    sectionName: "/#areaWork",
    active: false,
  },
  {
    id: 3,
    iconSvg: Mail,
    text: "Contact",
    sectionName: "/contact",
    active: false,
  },
];

const Header = () => {
  const [navStatus, setNavStatus] = useState(navIcons);

  const handleClick = (id: number) => {
    const prevNavStatus = navStatus.map((icon) => {
      if (icon.id === id) {
        icon.active = true;
      } else {
        icon.active = false;
      }
      return icon;
    });
    setNavStatus(prevNavStatus);
  };

  return (
    <header className="flex h-20 justify-center bg-white sm:fixed sm:w-full">
      <div className="mx-4 flex w-full items-center  sm:max-w-5xl">
        <h1 className="w-28">
          <Link href="/#areaTop" scroll={false}>
            <img className="w-fit" src="/logo.svg" alt="logo" />
          </Link>
        </h1>
        <nav className="fixed bottom-0 left-0 h-20 w-full bg-white sm:static sm:flex sm:h-fit sm:max-w-5xl sm:bg-opacity-0">
          <ul
            className="flex w-full justify-around sm:justify-end"
            id="scroll_nav"
          >
            {navIcons.map((icon) => (
              <li
                key={icon.id}
                className={
                  icon.text === "Home" ? "px-4 py-6 sm:hidden" : "px-4 py-6"
                }
                onClick={() => handleClick(icon.id)}
              >
                <Link
                  className={
                    icon.active
                      ? "hoverUnderLine01 flex flex-col items-center fill-current text-[#393E46]"
                      : "hoverUnderLine01 flex flex-col items-center fill-current text-[#ADB2BA]"
                  }
                  href={icon.sectionName}
                  scroll={false}
                >
                  <icon.iconSvg />
                  <p className="text-xs">{icon.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
