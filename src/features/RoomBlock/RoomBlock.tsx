import React from "react";
import type { RoomsHomeType } from "./types";
import { RoomBlockWrapper } from "./RoomBlockWrapper";

type Props = RoomsHomeType & {
  width?: number;
};

const RoomBlock: React.FC<Props> = ({ image, name, width }: Props) => {
  return (
    <RoomBlockWrapper width={width || 1440}>
      <img src={image} alt={name} />

      <div className="title-background"></div>
      <p className="title-text">{name}</p>
    </RoomBlockWrapper>
  );
};

export default RoomBlock;
