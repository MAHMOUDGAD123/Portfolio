import "../../styles/icon-slider.css";

interface Props {
  iconList: React.ReactNode[];
  duration: number;
  width?: number;
  height?: number;
}
// icon-slider component
export default function IconSlider({
  iconList,
  width,
  height,
  duration,
}: Props) {
  const timeDistance = duration / iconList.length;

  return (
    <div className="image-slider" style={{ height: height || 100 }}>
      <div
        className="list"
        style={{
          width: width || 1000,
        }}
      >
        {iconList.map((icon, i) => (
          <div
            key={i}
            className="icon-slider-item"
            style={{
              animationDuration: `${duration}s`,
              animationDelay: `${timeDistance * i}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
