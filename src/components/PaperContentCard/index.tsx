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
    <li className="bg-blue-200 px-2 py-2 drop-shadow-sm">
      <img
        className="h-auto max-w-full"
        src={srcUrl}
        alt={media + "Img"}
        width={640}
        height={424}
        sizes="(max-width:640px) 80vw,(max-width:1200px) 40vw,25vw"
        // priority
      />
      <h2 className="sm:hoverUnderLine01 pb-0.5">{title}</h2>
      <p className="pt-4">{text}</p>
    </li>
  );
}
