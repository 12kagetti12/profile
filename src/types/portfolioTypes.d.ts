export type JobProperties = {
  id: number;
  occupation: string;
  media: string;
  imgSrc: string;
  client: string;
  text: string;
  url: string;
};

export type ContentListProps = {
  id: number;
  imgSrc: string;
  client: string;
  media: string;
  url: string;
  style: string;
  isShowProps: boolean;
  handleDisplay: () => void;
};

export type ModalProps = {
  occupation: string;
  media: string;
  imgSrc: string;
  client: string;
  text: string;
  url: string;
  isShowProps: boolean;
  handleDisplay: () => void;
};
