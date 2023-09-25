"#init";

import React, { useCallback, useEffect } from "react";
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

type RefProps = {
  refPositions: {
    topRefPosition: number;
    profileRefPosition: number;
    workRefPosition: number;
    contactRefPosition: number;
  };
};

const Header: React.FC<RefProps> = ({ refPositions }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [navStatuses, setNavStatuses] = useState(navIcons);
  const updateStatuses = (id: number) => {
    const newNavStatus = navStatuses.map((icon) => {
      icon.id === id ? (icon.active = true) : (icon.active = false);
      return icon;
    });
    setNavStatuses(newNavStatus);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newScrollTop = window.scrollY;
      setScrollTop(newScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      scrollTop < refPositions.profileRefPosition &&
      0 < refPositions.profileRefPosition
    ) {
      updateStatuses(0);
    } else if (
      refPositions.profileRefPosition <= scrollTop &&
      scrollTop < refPositions.workRefPosition &&
      0 < refPositions.profileRefPosition
    ) {
      updateStatuses(1);
    } else if (
      refPositions.workRefPosition <= scrollTop &&
      0 < refPositions.workRefPosition
    ) {
      updateStatuses(2);
    } else if (refPositions.contactRefPosition > 0) {
      updateStatuses(3);
    }
  }, [scrollTop, refPositions]);

  const handleClick = useCallback((id: number) => {
    updateStatuses(id);
  }, []);

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
                  icon.text === "Home"
                    ? "relative px-4 py-6 sm:hidden"
                    : "relative px-4 py-6"
                }
                onClick={(_e) => {
                  handleClick(icon.id);
                }}
              >
                <Link
                  className={
                    icon.active
                      ? "underLine01 sm:hoverUnderLine01 m-auto flex flex-col items-center justify-center fill-current text-[#393E46]"
                      : "underLine01None sm:hoverUnderLine01 m-auto flex flex-col items-center justify-center fill-current text-[#ADB2BA]"
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
