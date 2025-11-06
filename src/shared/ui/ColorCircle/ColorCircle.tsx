import type React from "react";

interface ColorCircleProps {
  hexColor: string;
  textSm?: boolean;
  colorName: string;
  textClassName?: string;
  colorStyle?: React.CSSProperties;
  containerStyleMore?: React.CSSProperties;
}

const ColorCircle: React.FC<ColorCircleProps> = ({
  hexColor,
  colorName,
  textClassName,
  textSm,
  colorStyle = {},
  containerStyleMore = {},
}) => {
  const circleStyle: React.CSSProperties = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: hexColor,
    display: "inline-block",
    marginRight: "10px",
    border: "1px solid #505050",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    margin: "0 10px",
  };

  return (
    <div style={{ ...containerStyle, ...containerStyleMore }}>
      <div style={{ ...circleStyle, ...colorStyle }}></div>
      <span
        style={textSm ? { fontSize: "var(--text-sm)" } : {}}
        className={textClassName}
      >
        {colorName}
      </span>
    </div>
  );
};

export default ColorCircle;
