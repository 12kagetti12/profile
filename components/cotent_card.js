import styles from '@/styles/Home.module.css'

export default function ContentCard(props) {
  const src = props.imgSrc
  const title = props.contentTitle;
  const text = props.text;
  const imgTitle = props.contentTitle + ".img";
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