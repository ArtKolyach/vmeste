import styles from "./Roundie.module.css";

export const Roundie = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img {...props} className={styles.roundie} alt={props.src} />
);
