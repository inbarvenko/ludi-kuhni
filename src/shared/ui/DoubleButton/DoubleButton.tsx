import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DoubleButtonWrapper from "./DoubleButtonWrapper";

type Props = {
  width: number;
  onClick: () => void;
};

const DoubleButton: React.FC<Props> = ({ width, onClick }: Props) => {
  return (
    <DoubleButtonWrapper width={width} onClick={onClick}>
      <div className="button one">Обсудить проект</div>
      <div className="button two">
        <ArrowOutwardIcon className="icon2" />
      </div>
    </DoubleButtonWrapper>
  );
};

export default DoubleButton;
