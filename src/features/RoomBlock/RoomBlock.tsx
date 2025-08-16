import React from "react";
import type { RoomsHomeType } from "./types";
import { RoomBlockWrapper } from "./RoomBlockWrapper";

type Props = RoomsHomeType & {
  width?: number;
};

const RoomBlock: React.FC<Props> = ({ image, name, width }: Props) => {
  return (
    <RoomBlockWrapper width={width || 1440}>
      <div className="block">
        <img src={image} alt={name} />

        <div className="title-background"></div>
        <p className="title-text">{name}</p>
      </div>

      <div className="absolute z-2 inset-0 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20 rounded-[50px] hov transition-all duration-500 blur-2xl scale-110 z-0"></div>
    </RoomBlockWrapper>
  );
};

export default RoomBlock;
