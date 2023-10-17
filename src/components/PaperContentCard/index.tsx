import { useInView } from "react-intersection-observer";

type Props = {
  imgSrc: string;
  client: string;
  media: string;
  text: string;
  url: string;
  style: string;
};

const PaperContentCard = ({
  imgSrc,
  client,
  media,
  text,
  url,
  style,
}: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-30px",
    threshold: 0.3,
  });
  const title: string = media;

  return (
    <li
      ref={ref}
      className={`flex flex-col items-start pb-6 sm:flex-1 sm:items-start
        ${inView ? "scrollFadeIn" : "scrollFadeInHidden "} ${style}`}
    >
      <div className="flex justify-center sm:w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="aspect-auto shadow-lg sm:max-h-[80vh]"
          src={imgSrc}
          alt={`${media}Img`}
        />
      </div>
      <div className="flex flex-col sm:w-1/2 sm:pl-2">
        <div className="sm:hoverUnderLine01 flex w-fit flex-col pb-0.5">
          <button>
            <h2>{title}</h2>
          </button>
        </div>
        <p>{client}</p>
        <p>{text}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all"
        >
          {url}
        </a>
      </div>
    </li>
  );
};

export default PaperContentCard;
