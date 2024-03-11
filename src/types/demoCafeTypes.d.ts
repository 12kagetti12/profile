export type IconProperty = {
  id: number;
  iconSvg: React.FC;
  text: string;
  hrefSection: string;
  applicableSections: string[];
};

export type Menu = {
  id: number;
  name: string;
  price: number;
  classification: string;
};

export type MenuBlockProps = { menuClassification: string };

export type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

export type MapPosition = {
  lat: number;
  lng: number;
};
