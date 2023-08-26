import Image from "next/image";
import Link from "next/link";

export function ContentCard(props) {
  const src = props.imgSrc;
  const title = props.media;
  const text = props.text;
  const imgTitle = props.media + ".img";
  const contentUrl = "/" + props.media;
  return (
    <li className="flex flex-col items-center justify-end leading-none">
      <Link
        href={contentUrl}
        className="flex flex-col items-center no-underline"
      >
        <Image
          className="h-auto max-w-full"
          src={src}
          alt={imgTitle}
          width={640}
          height={424}
          sizes="(max-width:640px) 80vw,(max-width:1200px) 40vw,25vw"
          priority
        />
      </Link>
      <Link href={contentUrl} className="no-underline">
        <h2 className="sm:hoverUnderLine01 pb-0.5">{title}</h2>
      </Link>
      <p className="pt-4">{text}</p>
    </li>
  );
}
