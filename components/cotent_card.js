import styles from '@/styles/Home.module.css'

export function ContentCard(props) {
  const src = props.imgSrc
  const title = props.media;
  const text = props.text;
  const imgTitle = props.media + ".img";
  return(
    <>
      <li className="l-x_center_y_column">
        <img className="p-image_margin" src={src} alt={imgTitle}/>
        <h2 className="p-contentTitle_margin">{title}</h2>
        <p>{text}</p>
      </li>
    </>
  );
}