import iconDemoCafeLogo96px from "public/DemoSite/iconDemoCafeLogo96px.svg";
import iconDemoCafeHome48px from "public/DemoSite/iconDemoCafeHome48px.svg";
import iconDemoCafeMenu48px from "public/DemoSite/iconDemoCafeMenu48px.svg";
import iconDemoCafeStory48px from "public/DemoSite/iconDemoCafeStory48px.svg";
import iconDemoCafeMap48px from "public/DemoSite/iconDemoCafeMap48px.svg";
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
    hrefSection: "/demoCafe/#areaTop",
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
    iconSvg: iconDemoCafeArrowUp48px,
    text: "arrowUp",
    hrefSection: "/demoCafe/#areaTop",
    applicableSections: ["main"],
  },
];

export default navIcons;
