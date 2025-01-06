import "../../styles/icon-slider.css";

interface Props {
  iconList: [React.ReactNode, string][];
  duration: number;
  width?: number;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
}
// icon-slider component
export default function IconSlider({
  iconList,
  width,
  height,
  duration,
  marginTop,
  marginBottom,
}: Props) {
  const timeDistance = duration / iconList.length;

  return (
    <div
      className="image-slider"
      style={{
        height: height || 100,
        marginTop,
        marginBottom,
      }}
    >
      <div
        className="list"
        style={{
          width: width || 1000,
        }}
      >
        {iconList.map(([icon, name], i) => (
          <div
            title={name}
            key={i}
            className="icon-slider-item"
            style={{
              animationDuration: `${duration}s`,
              animationDelay: `${timeDistance * i * -1}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
