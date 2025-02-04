import styles from "@/styles/spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <svg>
        <circle
          cx="50%"
          cy="50%"
          r="21"
          style={{
            animationName: "spin-anticlockwise",
          }}
        />
        <circle
          cx="50%"
          cy="50%"
          r="15"
          style={{
            animationName: "spin-clockwise",
          }}
        />
      </svg>
    </div>
  );
}
