import React, { useEffect, useState } from "react";
import { getFurniture } from "./api/getFurniture";
import Furniture from "../../features/Furniture/Furniture";
import type { FurnitureHomeType } from "../../features/Furniture/types";
import FurnitureBlockWrapper from "./FurnitureBlockWrapper";

type Props = {
  width?: number;
};

const FurnitureBlock: React.FC<Props> = ({ width }: Props) => {
  const [furniture, setFurniture] = useState<FurnitureHomeType[]>([]);

  useEffect(() => {
    const handleFurniture = async () => {
      await getFurniture().then((res) => {
        setFurniture(res);
      });
    };

    handleFurniture();
  }, []);

  return (
    <FurnitureBlockWrapper>
      {furniture.map((item) => (
        <Furniture width={width} key={item.id} {...item} />
      ))}
    </FurnitureBlockWrapper>
  );
};

export default FurnitureBlock;
