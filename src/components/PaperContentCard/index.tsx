import { useInView } from "react-intersection-observer";

type Props = {
  imgSrc: string;
  media: string;
  text: string;
  style: string;
};

const PaperContentCard = ({ imgSrc, media, text, style }: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-30px",
    threshold: 0.3,
  });
  const srcUrl: string = imgSrc;
  const title: string = media;

  return (
    <li
      ref={ref}
      className={`flex flex-col items-start pb-6 sm:flex-1 sm:items-start sm:drop-shadow-sm
        ${inView ? "scrollFadeIn " : "scrollFadeInHidden "} ${style}`}
    >
      <img
        className="aspect-video w-full sm:w-1/2"
        src={imgSrc}
        alt={media + "Img"}
        width={640}
        height={424}
        sizes="(max-width:640px) 80vw,(max-width:1200px) 40vw,25vw"
      />
      <div className="w-fll flex flex-col sm:w-1/2 sm:pl-2">
        <div className="sm:hoverUnderLine01 flex w-fit flex-col pb-0.5">
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default PaperContentCard;
