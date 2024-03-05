import iconDemoCafeLogo96px from "public/DemoSite/iconDemoCafeLogo96px.svg";
import iconDemoCafeHome32px from "public/DemoSite/iconDemoCafeHome32px.svg";
import iconDemoCafeMenu32px from "public/DemoSite/iconDemoCafeMenu32px.svg";
import iconDemoCafeStory32px from "public/DemoSite/iconDemoCafeStory32px.svg";
import iconDemoCafeMap32px from "public/DemoSite/iconDemoCafeMap32px.svg";
import iconDemoCafeArrowUp32px from "public/DemoSite/iconDemoCafeArrowUp32px.svg";

type IconProperty = {
  id: number;
  iconSvg: React.FC;
  text: string;
  hrefSection: string;
  applicableSections: string[];
};

const navIcons: IconProperty[] = [
  {
    id: 0,
    iconSvg: iconDemoCafeLogo96px,
    text: "logo",
    hrefSection: "/demoCafe/#araTop",
    applicableSections: ["headerLogo"],
  },
  {
    id: 1,
    iconSvg: iconDemoCafeHome32px,
    text: "home",
    hrefSection: "/demoCafe/#areaTop",
    applicableSections: ["headerNav"],
  },
  {
    id: 2,
    iconSvg: iconDemoCafeMenu32px,
    text: "menu",
    hrefSection: "/demoCafe/#areaMenu",
    applicableSections: ["headerNav"],
  },
  {
    id: 3,
    iconSvg: iconDemoCafeStory32px,
    text: "story",
    hrefSection: "/demoCafe/#areaStory",
    applicableSections: ["headerNav"],
  },
  {
    id: 4,
    iconSvg: iconDemoCafeMap32px,
    text: "map",
    hrefSection: "/demoCafe/#areaMap",
    applicableSections: ["headerNav"],
  },
  {
    id: 5,
    iconSvg: iconDemoCafeArrowUp32px,
    text: "arrowUp",
    hrefSection: "/demoCafe/#areaTop",
    applicableSections: ["main"],
  },
];

export default navIcons;
