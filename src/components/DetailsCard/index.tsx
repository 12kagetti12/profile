/* eslint-disable @next/next/no-img-element */
type Props = {
  occupation: string;
  media: string;
  imgSrc: string;
  client: string;
  text: string;
  url: string;
  isShowProps: boolean;
  handleDisplay: () => void;
};

const DetailsCard: React.FC<Props> = ({
  occupation,
  media,
  imgSrc,
  client,
  text,
  url,
  isShowProps,
  handleDisplay,
}) => (
  <>
    <div
      className={`${
        isShowProps
          ? "h-[100vh] w-[100vw] duration-500"
          : "h-0 w-0 delay-500 duration-1000"
      } fixed bottom-0 left-0 z-10 bg-black/50 backdrop-blur-sm`}
      onClick={handleDisplay}
    ></div>
    <div
      className={`${
        isShowProps
          ? "w-fit duration-1000"
          : "translate-y-10 opacity-0 duration-1000"
      } fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/95 p-8 shadow-lg backdrop-blur-sm`}
    >
      <h1 className="pb-2 leading-10">{media}</h1>
      <div className="flex max-h-[65vh] w-[70vw] snap-y flex-col overflow-y-scroll sm:flex-row sm:overflow-x-auto">
        <img
          className="mb-2 aspect-auto h-auto w-[70vw] snap-start"
          src={imgSrc}
          alt={`${media}Img`}
        />
        <ul className="h-full w-auto snap-mandatory snap-start sm:h-auto sm:w-1/2">
          <li className="">{occupation}</li>
          <li className="">{text}</li>
          <li className="">{client}</li>
          <li className="break-all">{url}</li>
        </ul>
      </div>
      <button onClick={handleDisplay} className="absolute right-3 top-3">
        <span className="roundButton"></span>
      </button>
    </div>
  </>
);

export default DetailsCard;
