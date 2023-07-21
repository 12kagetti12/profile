import styles from "@/components/Header/Header.module.css";
import Link from "next/link";
import { useState } from "react";

export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenClose = (e) => {
    setMenuOpen((prevmenuOpen) => !prevmenuOpen);
  };

  return (
    <header>
      <div className={styles.l_flexInlineTop}>
        <div className={`${styles.l_addMargin} ${styles.l_addMaxWidth_xCenter_yColumn} ${styles.l_xAlignSide_yCenter}`}>
          <h1 className={styles.c_logo}>
            <Link href="#areaTop" scroll={false}>
              <img className={`${styles.c_logo} ${styles.l_xCenter_yCenter}`} src="/logo.svg" alt="logo"/>
            </Link>
          </h1>
          <nav className={styles.p_nav}>
            <ul className={`${styles.c_nav_noStyle} ${menuOpen ? styles.open : ""}`} id="scroll_nav">
              <li className={`${styles.c_nav_xRight} ${styles.c_mediaOnly} ${styles.hoverA}`}>
                <Link href="#areaTop" scroll={false}>
                  Top
                </Link>
              </li>
              <li className={styles.c_nav_xRight}>
                <Link href="/#areaProfile" scroll={false}>
                  Profile
                </Link>
              </li>
              <li className={styles.c_nav_xRight}>
                <Link href="/#areaWork" scroll={false}>
                  Work
                </Link>
              </li>
              <li className={styles.c_nav_xRight}>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className={`${styles.c_media_navButton} ${menuOpen ? styles.open : ""}`} onClick={handleOpenClose}>
        <span className={`${styles.c_media_navButton_line} ${menuOpen ? styles.open : ""}`}></span>
        <span className={styles.c_mediaOnly}>menu</span>
        </button>
      </div>
    </header>
  );
}