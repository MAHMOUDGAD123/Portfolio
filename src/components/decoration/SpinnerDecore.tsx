type SpinDir = "anticlockwise" | "clockwise";

type AnimationSpinName = `spin-${SpinDir}` | "";
type StrokeRange = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

interface Props {
  nStroke?: number;
  strokeWidth?: number;
  durationStart?: number;
  radiusStart?: number;
  radiusPlus?: number;
  strokeDashStart?: number;
  strokeDashPlus?: number;
  translateX?: string | number;
  translateY?: string | number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  animate?: boolean;
  spinDirection?: SpinDir;
  strokeOpacity?: StrokeRange;
}

export default function SpinnerDecore({
  nStroke,
  top,
  left,
  right,
  bottom,
  translateX,
  translateY,
  strokeWidth,
  durationStart,
  radiusStart,
  radiusPlus,
  strokeDashStart,
  strokeDashPlus,
  animate,
  spinDirection,
  strokeOpacity,
}: Props) {
  // all in px
  const N_STROKE = nStroke || 7;
  const STROKE_WIDTH = strokeWidth || 9;
  const R_START = radiusStart || 3;
  const R_PLUS = (radiusPlus || 8) + STROKE_WIDTH;
  const STROKE_START = strokeDashStart || 10;
  const STROKE_PLUS = strokeDashPlus || 50;
  const DURATION = durationStart || 0.35; // in seconds
  const ANIMATE = animate === undefined ? true : animate;
  const SPIN_DIR: SpinDir = spinDirection ?? "anticlockwise";
  const STROKE_OPACITY: StrokeRange = strokeOpacity || 0.3;

  return (
    <div
      className="spinner-decore fixed -z-10 flex h-fit w-fit select-none items-center justify-center rounded-full text-dodgerblue"
      style={{
        translate: `${translateX} ${translateY}`,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
      }}
    >
      <svg
        style={{
          strokeOpacity: STROKE_OPACITY,
          fillOpacity: STROKE_OPACITY,
          fill: "currentcolor",
        }}
        width={N_STROKE * R_PLUS * 2}
        className="aspect-square rounded-[inherit] stroke-current [stroke-linejoin:round] [&>:nth-child(1)]:[stroke-dasharray:none] [&>:nth-child(n+2)]:[animation-iteration-count:infinite] [&>:nth-child(n+2)]:[animation-timing-function:linear] motion-reduce:[&>circle]:[animation-play-state:paused]"
      >
        {new Array(N_STROKE).fill(0).map((_, i) => (
          <circle
            className="origin-center rounded-[inherit] fill-none [stroke-linecap:round] transform-gpu"
            key={i}
            cx="50%"
            cy="50%"
            r={R_START + i * R_PLUS}
            strokeDasharray={
              STROKE_START + i * STROKE_PLUS - (i * STROKE_PLUS) / 2
            }
            strokeWidth={STROKE_WIDTH}
            style={{
              animationName: (ANIMATE
                ? SPIN_DIR === "anticlockwise"
                  ? "spin-anticlockwise"
                  : "spin-clockwise"
                : "") satisfies AnimationSpinName,
              animationDuration: `${((i + 1) * DURATION).toFixed(2)}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
