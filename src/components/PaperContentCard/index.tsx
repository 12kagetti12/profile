import Image from "next/image";
import Link from "next/link";

type Props = {
  imgSrc: string;
  media: string;
  text: string;
};

export function PaperContentCard({ imgSrc, media, text }: Props) {
  const srcUrl: string = imgSrc;
  const title: string = media;
  return (
    <li className="flex flex-col items-center bg-blue-200 pb-6 sm:drop-shadow-sm">
      <img
        className="aspect-video w-full"
        src={srcUrl}
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
}
