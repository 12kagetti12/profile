import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

type Props = {
  id: number;
  imgSrc: string;
  client: string;
  media: string;
  url: string;
  style: string;
  isShowProps: boolean;
  handleDisplay: () => void;
};

const ContentList = ({
  imgSrc,
  client,
  media,
  url,
  style,
  handleDisplay,
}: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-30px",
    threshold: 0.3,
  });

  const [isDisplay, setIsDisplay] = useState("scrollFadeInHidden");
  useEffect(() => {
    if (!inView) {
      setIsDisplay("scrollFadeOut");
      const timeState = setTimeout(() => {
        setIsDisplay("scrollFadeInHidden");
      }, 2000);
      return () => clearTimeout(timeState);
    }
    return setIsDisplay("scrollFadeIn");
  }, [inView]);

  const title: string = media;

  return (
    <li
      ref={ref}
      className={`flex flex-col items-start pb-6 sm:flex-1 sm:items-start
        ${isDisplay} ${style}`}
    >
      <div className="relative flex justify-center sm:h-[50vh] sm:w-1/2">
        <h2 className="absolute top-1/2 z-0 aspect-auto animate-pulse text-gray-300">
          Loading...
        </h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="z-10 aspect-auto w-full cursor-pointer object-contain shadow-lg sm:h-full sm:w-auto"
          src={imgSrc}
          alt={`${media}Img`}
          onClick={handleDisplay}
        />
      </div>
      <div className="flex flex-col sm:w-1/2 sm:pl-2">
        <div className="sm:hoverUnderLine01 flex w-fit flex-col pb-0.5">
          <button onClick={handleDisplay}>
            <h2>{title}</h2>
          </button>
        </div>
        <p>{client}</p>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all hover:text-gray-500"
        >
          {url}
        </Link>
      </div>
    </li>
  );
};

export default ContentList;
