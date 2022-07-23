import { CSSProperties } from "react";
import styles from "../styles/components/progressbar.module.css";

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  const childStyle: CSSProperties = {
    height: "100%",
    backgroundColor: "var(--blue)",
    width: `${progress}%`,
    borderRadius: "50px",
  };
  return (
    <div className={styles.parent}>
      <div style={childStyle} className={styles.child}>
        <span>{progress}%</span>
      </div>
    </div>
  );
}
