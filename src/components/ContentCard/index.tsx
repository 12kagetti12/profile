import Image from "next/image";
import Link from "next/link";

type Props = {
  imgSrc: string;
  media: string;
  text: string;
};

export function ContentCard({ imgSrc, media, text }: Props) {
  const srcUrl: string = imgSrc;
  const title: string = media;
  const contentUrl = "/" + media;
  return (
    <li className="flex flex-col items-center leading-none">
      <Link
        href={contentUrl}
        className="flex flex-col items-center no-underline"
      >
        <img
          className="h-auto max-w-full"
          src={srcUrl}
          alt={media + "Img"}
          width={640}
          height={424}
          sizes="(max-width:640px) 80vw,(max-width:1200px) 40vw,25vw"
          // priority
        />
      </Link>
      <Link href={contentUrl} className="no-underline">
        <h2 className="sm:hoverUnderLine01 pb-0.5">{title}</h2>
      </Link>
      <p className="pt-4">{text}</p>
    </li>
  );
}
