import styles from '@/components/ContentCard/ContentCard.module.css'
import Image from 'next/image'

export function ContentCard(props) {
  const src = props.imgSrc
  const title = props.media;
  const text = props.text;
  const imgTitle = props.media + ".img";
  return(
    <li className={styles.l_xCenter_yColumn}>
      <a href="#" className={`${styles.l_xCenter_yColumn} ${styles.f_noStyles}`}>
        <Image
            className={styles.p_imageMargin}
            src={src}
            alt={imgTitle}
            width={640}
            height={424}
            sizes="(max-width:640px) 80vw,(max-width:1200px) 40vw,25vw"
        />
        <h2 className={`${styles.p_contentTitleMargin} ${styles.p_capitalizeFirstString}`}>{title}</h2>
      </a>
      <p>{text}</p>
    </li>
  );
}