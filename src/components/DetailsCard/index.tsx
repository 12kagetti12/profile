type Props = {
  occupation: string;
  media: string;
  imgSrc: string;
  client: string;
  text: string;
  url: string;
};

const DetailsCard = ({
  occupation,
  media,
  imgSrc,
  client,
  text,
  url,
}: Props) => (
  <div className="relative max-w-screen-lg rounded-lg bg-blue-200 p-8 shadow-lg">
    <h1 className="pb-2 leading-10">{media}</h1>
    <div className="flex h-full flex-row overflow-x-scroll sm:overflow-x-auto">
      <ul className="h-full w-[80vw] sm:w-1/2">
        <li className="w-full">{occupation}</li>
        <li>{text}</li>
        <li>{client}</li>
        <li className="break-all">{url}</li>
      </ul>
      <img
        className="mx-2 aspect-auto max-h-[60vh] w-[80vw] sm:w-auto"
        src={imgSrc}
        alt={`${media}Img`}
      />
    </div>
    <button className="absolute right-3 top-3">
      <span className="roundButton"></span>
    </button>
  </div>
);

export default DetailsCard;
