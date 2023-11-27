import React, { useEffect } from "react";
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
};

const navIcons: Icon[] = [
  {
    id: 0,
    iconSvg: House_fill,
    text: "home",
    sectionName: "/#areaTop",
  },
  {
    id: 1,
    iconSvg: Me_fill,
    text: "profile",
    sectionName: "/#areaProfile",
  },
  {
    id: 2,
    iconSvg: Work,
    text: "work",
    sectionName: "/#areaWork",
  },
  {
    id: 3,
    iconSvg: Mail,
    text: "contact",
    sectionName: "/contact",
  },
];

type Props = {
  itemState: number;
  isShowSection: (itemState: number) => void;
};

const Header: React.FC<Props> = ({ itemState, isShowSection }) => {
  const ref = React.useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isShowSection) {
          isShowSection(itemState);
        }
      },
      { threshold: 0.1 },
    );

    if (!ref.current) return undefined;

    observer.observe(ref.current);
    const { current } = ref;
    return () => {
      observer.unobserve(current);
    };
  }, [isShowSection, itemState]);

  return (
    <header className="flex h-16 justify-center bg-white sm:fixed sm:z-30 sm:h-20 sm:w-full">
      <div className="mx-4 flex w-full items-center sm:max-w-screen-lg">
        <h1 className="w-28">
          <Link href="/#areaTop" scroll={false}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-fit" src="/logo.svg" alt="logo" />
          </Link>
        </h1>
        <nav className="fixed bottom-0 left-0 z-30 flex h-14 w-full items-center bg-white sm:static sm:top-0 sm:h-fit sm:max-w-5xl sm:justify-end sm:bg-opacity-0">
          <ul
            className="flex w-full items-center justify-around sm:justify-end"
            id="scroll_nav"
          >
            {navIcons.map((icon) => (
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
                    icon.id === itemState
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
