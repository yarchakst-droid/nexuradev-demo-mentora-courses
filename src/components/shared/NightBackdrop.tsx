import type { CSSProperties, ReactNode } from "react";
import styles from "./NightBackdrop.module.css";

type CometConfig = CSSProperties & Record<`--${string}`, string>;

const COMETS: CometConfig[] = [
  { "--top": "8%", "--left": "6%", "--rot": "-24deg", "--tx": "260px", "--ty": "115px", "--dur": "9s", "--delay": "0.5s" },
  { "--top": "14%", "--left": "62%", "--rot": "-34deg", "--tx": "220px", "--ty": "150px", "--dur": "12s", "--delay": "4s" },
  { "--top": "4%", "--left": "38%", "--rot": "-18deg", "--tx": "200px", "--ty": "85px", "--dur": "14s", "--delay": "8s" },
  { "--top": "20%", "--left": "82%", "--rot": "-30deg", "--tx": "230px", "--ty": "135px", "--dur": "16s", "--delay": "2s" },
];

export default function NightBackdrop({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`${styles.night} ${className}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.starsDeep} aria-hidden="true" />
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.comets} aria-hidden="true">
        {COMETS.map((style, i) => (
          <span key={i} className={styles.comet} style={style} />
        ))}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
