import type React from "react";

interface ColorCircleProps {
  hexColor: string;
  colorName: string;
}

const ColorCircle: React.FC<ColorCircleProps> = ({ hexColor, colorName }) => {
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
    margin: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle}></div>
      <span>{colorName}</span>
    </div>
  );
};

export default ColorCircle;
