import styles from '@/components/Footer/Footer.module.css'

export function Footer() {
  return(
    <footer className={`${styles.l_footer} ${styles.l_xCenter_yColumn}`} >
      <p className={styles.p_footerStyle}>&copy; Satoshi Kageyama</p>
    </footer>
  );
} 
