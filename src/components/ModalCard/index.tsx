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

const ModalCard: React.FC<Props> = ({
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
          ? "opacity-100 delay-500 duration-1000"
          : "translate-y-full opacity-0 duration-1000"
      } fixed left-1/2 top-1/2 z-20 w-[80vw] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/95 p-8 shadow-lg backdrop-blur-sm sm:max-w-screen-sm`}
    >
      <h1 className="pb-2 leading-10">{media}</h1>
      <div className="flex h-fit max-h-[50vh] snap-y flex-col overflow-y-scroll sm:max-h-[60vh] sm:w-full sm:flex-row sm:overflow-x-auto">
        <img
          className="mb-2 aspect-auto w-full snap-start sm:w-1/2"
          src={imgSrc}
          alt={`${media}Img`}
        />
        <ul className="h-full w-auto snap-mandatory snap-start sm:h-auto sm:w-1/2 sm:pl-4">
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

export default ModalCard;
