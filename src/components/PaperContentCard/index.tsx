import { useInView } from "react-intersection-observer";

type Props = {
  imgSrc: string;
  media: string;
  text: string;
};

const PaperContentCard = ({ imgSrc, media, text }: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-30px",
    threshold: 0.3,
  });
  const srcUrl: string = imgSrc;
  const title: string = media;

  return (
    <li
      ref={ref}
      className={`sm:drop-shadow-sm" flex flex-col items-center bg-blue-200 pb-6
        ${inView ? "scrollFadeIn " : "scrollFadeInHidden "}`}
    >
      <img
        className="aspect-video w-full"
        src={imgSrc}
        alt={media + "Img"}
        width={640}
        height={424}
        sizes="(max-width:640px) 80vw,(max-width:1200px) 40vw,25vw"
        // priority
      />
      <div className="flex w-full flex-col">
        <h2 className="sm:hoverUnderLine01 pb-0.5">{title}</h2>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default PaperContentCard;
