import styles from './footer.module.css'

export function Footer() {
  return(
    <>
      <footer className={`${styles.L_Footer} ${styles.L_X_center_Y_column}`} >
        <p className={styles.P_FooterStyle}>&copy; Satoshi Kageyama</p>
      </footer>
    </>
  );
} 
