import Link from "next/link";

type Props = {
  imgSrc: string;
  media: string;
  text: string;
};

const ContentCard = ({ imgSrc, media, text }: Props) => {
  const srcUrl: string = imgSrc;
  const title: string = media;
  const contentUrl = `/${media}`;
  return (
    <li className="flex flex-col items-center leading-none">
      <Link
        href={contentUrl}
        className="flex flex-col items-center no-underline"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-auto max-w-full"
          src={srcUrl}
          alt={`${media}Img`}
          width={640}
          height={424}
          sizes="(max-width:640px) 80vw,(max-width:1200px) 40vw,25vw"
        />
      </Link>
      <Link href={contentUrl} className="pt-2 no-underline">
        <h2 className="sm:hoverUnderLine01 pb-0.5 capitalize">{title}</h2>
      </Link>
      <p className="pt-4">{text}</p>
    </li>
  );
};

export default ContentCard;
