import axiosInstance from "../../../shared/configs/axios";
import type { FurnitureObjType } from "../../../shared/types/types";

type Props = {
  roomId: number;
};

export const getFurniture = async ({ roomId }: Props) => {
  const { data } = await axiosInstance.get<FurnitureObjType[]>(
    "/furniture-items/",
    {
      params: {
        room: roomId,
      },
    }
  );

  console.log(data);

  return data;
};
