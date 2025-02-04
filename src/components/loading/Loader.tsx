import styles from "@/styles/loader.module.css";

interface CircleProps {
  r: string;
  spin?: boolean;
}

const Circle = ({ r, spin }: CircleProps) => {
  return (
    <circle
      cx="50%"
      cy="50%"
      r={r}
      style={{ animationName: spin ? "spin-anticlockwise" : "" }}
    />
  );
};

export default function Loader() {
  const circles: CircleProps[] = [
    { r: "51", spin: true },
    { r: "43", spin: true },
    { r: "35", spin: true },
    { r: "27", spin: true },
    { r: "19", spin: true },
    { r: "11", spin: true },
    { r: "3" },
  ];

  return (
    <div className={styles.loader}>
      <svg>
        {circles.map((props, i) => (
          <Circle key={i} {...props} />
        ))}
      </svg>
    </div>
  );
}
