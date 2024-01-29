import Logo from "public/DemoSite/iconDemoCafeLogo96px.svg";
import Menu from "public/DemoSite/iconDemoCafeMenu48px.svg";
import Home from "public/DemoSite/iconDemoCafeHome48px.svg";
import Story from "public/DemoSite/iconDemoCafeStory48px.svg";
import Map from "public/DemoSite/iconDemoCafeMap48px.svg";
import ArrowUp from "public/DemoSite/iconDemoCafeArrowUp48px.svg";

const icons = { Logo, Home, Menu, Story, Map, ArrowUp };

type Name = keyof typeof icons;
type Props = {
  name: Name;
  size?: number;
  className?: string;
};

const DEFAULT_SIZE: number = 48;

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
