import Link from "next/link";
import iconDemoCafeLogo96px from "public/DemoSite/iconDemoCafeLogo96px.svg";
import iconDemoCafeHome48px from "public/DemoSite/iconDemoCafeHome48px.svg";
import iconDemoCafeMenu48px from "public/DemoSite/iconDemoCafeMenu48px.svg";
import iconDemoCafeStory48px from "public/DemoSite/iconDemoCafeStory48px.svg";
import iconDemoCafeMap48px from "public/DemoSite/iconDemoCafeMap48px.svg";
import iconDemoCafeInstagram48px from "public/DemoSite/iconDemoCafeInstagram48px.svg";
import iconDemoCafeArrowUp48px from "public/DemoSite/iconDemoCafeArrowUp48px.svg";

type Icon = {
  id: number;
  iconSvg: React.FC;
  text: string;
  hrefSection: string;
  applicableSections: string[];
};

const navIcons: Icon[] = [
  {
    id: 0,
    iconSvg: iconDemoCafeLogo96px,
    text: "logo",
    hrefSection: "/demoCafe",
    applicableSections: ["headerLogo"],
  },
  {
    id: 1,
    iconSvg: iconDemoCafeHome48px,
    text: "home",
    hrefSection: "/demoCafe",
    applicableSections: ["headerNav"],
  },
  {
    id: 2,
    iconSvg: iconDemoCafeMenu48px,
    text: "menu",
    hrefSection: "/demoCafe/#areaMenu",
    applicableSections: ["headerNav"],
  },
  {
    id: 3,
    iconSvg: iconDemoCafeStory48px,
    text: "story",
    hrefSection: "/demoCafe/#areaStory",
    applicableSections: ["headerNav"],
  },
  {
    id: 4,
    iconSvg: iconDemoCafeMap48px,
    text: "map",
    hrefSection: "/demoCafe/#areaMap",
    applicableSections: ["headerNav"],
  },
  {
    id: 5,
    iconSvg: iconDemoCafeInstagram48px,
    text: "Instagram",
    hrefSection: "/demoCafe/#areaMap",
    applicableSections: ["sectionMap"],
  },
  {
    id: 6,
    iconSvg: iconDemoCafeArrowUp48px,
    text: "arrowUp",
    hrefSection: "/demoCafe/#areaTop",
    applicableSections: ["main"],
  },
];

export default function DemoCafe() {
  return (
    <>
      <header id="areaTop">
        <div>
          <h1 className="hidden">
            <Link href="/demoCafe" scroll={false}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-fit" src="#" alt="DemoCafeLogo" />
            </Link>
          </h1>
          <nav className="fixed bottom-0 z-30 flex h-[10vh] w-full items-center bg-white">
            <ul
              className="flex w-full items-center justify-around"
              id="scroll_nav"
            >
              {navIcons.map((icon) =>
                icon.applicableSections.includes("headerNav") ? (
                  <li
                    key={icon.id}
                    className={
                      icon.text === "logo"
                        ? "relative px-4 sm:hidden"
                        : "relative px-4"
                    }
                  >
                    <Link
                      className="m-auto flex flex-col items-center justify-center fill-current"
                      href={icon.hrefSection}
                      scroll={false}
                    >
                      <icon.iconSvg />
                      <p className="relative -top-1 h-2 text-xs capitalize text-[#FFCA99]">
                        {icon.text}
                      </p>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </nav>
        </div>
        <main>
          <section id="mainVisual"></section>
          <section id="areaMenu"></section>
          <section id="areaStory"></section>
          <section id="areaMap"></section>
        </main>
      </header>
    </>
  );
}
