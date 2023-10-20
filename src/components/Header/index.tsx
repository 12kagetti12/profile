"#init";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import House_fill from "@/components/icons/House.svg";
import Me_fill from "@/components/icons/Me_fill.svg";
import Work from "@/components/icons/Work.svg";
import Mail from "@/components/icons/Mail.svg";

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
    text: "home",
    sectionName: "/#areaTop",
    active: true,
  },
  {
    id: 1,
    iconSvg: Me_fill,
    text: "profile",
    sectionName: "/#areaProfile",
    active: false,
  },
  {
    id: 2,
    iconSvg: Work,
    text: "work",
    sectionName: "/#areaWork",
    active: false,
  },
  {
    id: 3,
    iconSvg: Mail,
    text: "contact",
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
    const newNavStatus = navStatuses.map((icon) => ({
      ...icon,
      active: icon.id === id,
    }));
    setNavStatuses(newNavStatus);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newScrollTop = window.scrollY + 5;
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
      refPositions.profileRefPosition > 0
    ) {
      updateStatuses(0);
    } else if (
      refPositions.profileRefPosition <= scrollTop &&
      scrollTop < refPositions.workRefPosition &&
      refPositions.profileRefPosition > 0
    ) {
      updateStatuses(1);
    } else if (
      refPositions.workRefPosition <= scrollTop &&
      refPositions.workRefPosition > 0
    ) {
      updateStatuses(2);
    } else if (refPositions.contactRefPosition > 0) {
      updateStatuses(3);
    }
  }, [scrollTop, refPositions]);

  return (
    <header className="flex h-20 justify-center bg-white sm:fixed sm:z-10 sm:w-full">
      <div className="mx-4 flex w-full items-center sm:max-w-screen-lg">
        <h1 className="w-28">
          <Link href="/#areaTop" scroll={false}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-fit" src="/logo.svg" alt="logo" />
          </Link>
        </h1>
        <nav className="fixed bottom-0 left-0 z-10 flex h-20 w-full items-center bg-white sm:static sm:top-0 sm:h-fit sm:max-w-5xl sm:justify-end sm:bg-opacity-0">
          <ul
            className="flex w-full items-center justify-around sm:justify-end"
            id="scroll_nav"
          >
            {navStatuses.map((icon) => (
              <li
                key={icon.id}
                className={
                  icon.text === "Home"
                    ? "relative px-4 sm:hidden"
                    : "relative px-4 sm:ml-8 sm:px-0"
                }
              >
                <Link
                  className={
                    icon.active
                      ? "underLine01 sm:hoverUnderLine01 m-auto flex flex-col items-center justify-center fill-current text-[#393E46]"
                      : "underLine01None sm:hoverUnderLine01 m-auto flex flex-col items-center justify-center fill-current text-[#ADB2BA] sm:justify-end"
                  }
                  href={icon.sectionName}
                  scroll={false}
                >
                  <icon.iconSvg />
                  <p className="text-xs capitalize">{icon.text}</p>
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
