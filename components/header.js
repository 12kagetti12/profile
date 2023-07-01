import styles from './header.module.css';
import Link from 'next/link';

export function Header(){
  return (
    <>
      <header id="header">
        <div className={styles.l_flexInlineTop}>
          <div className={`${styles.l_addMargin} ${styles.l_addMaxWidth_xCenter_yColumn} ${styles.l_xAlignSide_yCenter}`}>
            <h1 className={styles.c_logo}><a href="#area_top"><img className={`${styles.c_logo} ${styles.l_xCenter_yCenter}`} src="/logo.svg" alt="logo"/></a></h1>
            <nav className={styles.p_nav}>
              <ul className={styles.c_nav_noStyle} id="scroll_nav">
                <li className={`${styles.c_nav_xRight} ${styles.c_mediaOnly}`}>
                  <a href="#area_top">Top</a>
                </li>
                <li className={styles.c_nav_xRight}>
                  <a href="#area_profile">Profile</a>
                </li>
                <li className={styles.c_nav_xRight}>
                  <a href="#area_favorite">Work</a>
                </li>
                <li className={styles.c_nav_xRight}>
                  <Link href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <button className={styles.c_media_navButton}>
          <span className={styles.c_media_navButton_line}></span>
          <span>menu</span>
        </button>
      </header>
    </>
  );
}