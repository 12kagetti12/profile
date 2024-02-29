import Logo from "public/DemoSite/iconDemoCafeLogo96px.svg";
import Menu from "public/DemoSite/iconDemoCafeMenu32px.svg";
import Home from "public/DemoSite/iconDemoCafeHome32px.svg";
import Story from "public/DemoSite/iconDemoCafeStory32px.svg";
import Map from "public/DemoSite/iconDemoCafeMap32px.svg";
import ArrowUp from "public/DemoSite/iconDemoCafeArrowUp32px.svg";

const icons = { Logo, Home, Menu, Story, Map, ArrowUp };

type Name = keyof typeof icons;
type Props = {
  name: Name;
  size?: number;
  className?: string;
};

const DEFAULT_SIZE: number = 32;

const Icon: React.FC<Props> = ({
  name,
  size = DEFAULT_SIZE,
  className,
}: Props) => {
  const SvgComponent = icons[name];

  return (
    <SvgComponent
      style={{ height: `${size}px`, width: `${size}px` }}
      className={className}
    />
  );
};

export default Icon;
