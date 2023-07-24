import styles from "@/components/ContentCard/ContentCard.module.css";
import Image from "next/image";
import Link from "next/link";

export function ContentCard(props) {
  const src = props.imgSrc
  const title = props.media;
  const text = props.text;
  const imgTitle = props.media + ".img";
  const contentUrl = "/" + props.media;
  return(
    <li className={styles.l_xCenter_yColumn}>
      <Link href={contentUrl} className={`${styles.l_xCenter_yColumn} ${styles.f_noStyles}`}>
        <Image
          className={styles.p_imageMargin}
          src={src}
          alt={imgTitle}
          width={640}
          height={424}
          sizes="(max-width:640px) 80vw,(max-width:1200px) 40vw,25vw"
          priority
        />
        <h2 className={`${styles.p_contentTitleMargin} ${styles.p_capitalizeFirstString}`}>{title}</h2>
      </Link>
      <p>{text}</p>
    </li>
  );
}