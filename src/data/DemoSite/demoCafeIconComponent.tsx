import Menu from "public/DemoSite/iconDemoCafeMenu48px.svg";

const icons = { Menu };

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
