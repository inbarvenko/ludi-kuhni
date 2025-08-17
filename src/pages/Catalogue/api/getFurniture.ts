import axiosInstance from "../../../shared/configs/axios";
import type { FurnitureObjType } from "../../../shared/types/types";

type Props = {
  room: number;
  furniture_types?: string;
  filters?: string;
  color?: string;
};

export const getFurniture = async (params: Props) => {
  const { data } = await axiosInstance.get<FurnitureObjType[]>(
    "/furniture-items/",
    {
      params,
    }
  );

  console.log(data);

  return data;
};
