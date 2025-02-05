import styles from "@/styles/loader.module.css";

interface CircleProps {
  radius: string;
}

const Circle = ({ radius }: CircleProps) => {
  return <circle cx="50%" cy="50%" r={radius} />;
};

export default function Loader() {
  const circles = ["51", "43", "35", "27", "19", "11", "3"];

  return (
    <div className={styles.loader}>
      <svg>
        {circles.map((radius, i) => (
          <Circle key={i} radius={radius} />
        ))}
      </svg>
    </div>
  );
}
