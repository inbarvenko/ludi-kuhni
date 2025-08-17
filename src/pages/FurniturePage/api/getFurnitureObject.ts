import axiosInstance from "../../../shared/configs/axios";
import type { FurnitureObjType } from "../../../shared/types/types";

export const getFurnitureObject = async (id?: string) => {
  const { data } = await axiosInstance.get<FurnitureObjType>(
    `/furniture-items/${id}/`
  );

  console.log(data);

  return data;
};
