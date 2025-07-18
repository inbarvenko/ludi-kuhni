import React from "react";
import { FurnitureWrapper } from "./FurnitureWrapper";
import type { FurnitureHomeType } from "./types";

type Props = FurnitureHomeType & {
  width?: number;
};

const Furniture: React.FC<Props> = ({ image, name, width }: Props) => {
  return (
    <FurnitureWrapper width={width || 1440}>
      <img src={image} alt={name} />

      <div className="title-background"></div>
      <p className="title-text">{name}</p>
    </FurnitureWrapper>
  );
};

export default Furniture;
