/* eslint-disable @next/next/no-img-element */
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
  <div className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-blue-200 p-8 shadow-lg">
    <h1 className="w-[70vw] pb-2 leading-10">{media}</h1>
    <div className="flex h-full w-[70vw] snap-x flex-row overflow-x-scroll sm:overflow-x-auto">
      <ul className="mx-2 h-auto w-[70vw] snap-mandatory snap-center sm:w-1/2">
        <li className="w-[70vw] break-words">{occupation}</li>
        <li className="w-[70vw] break-words">{text}</li>
        <li className="w-[70vw] break-words">{client}</li>
        <li className="w-[70vw] break-words">{url}</li>
      </ul>
      <img
        className="mx-2 aspect-auto max-h-[70vh] w-[70vw] snap-center"
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
