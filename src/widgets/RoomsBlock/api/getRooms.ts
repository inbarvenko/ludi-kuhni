import type { RoomsHomeType } from "../../../features/RoomBlock/types";
import axiosInstance from "../../../shared/configs/axios";

export const getRooms = async () => {
  const { data } = await axiosInstance.get<RoomsHomeType[]>("/rooms/");

  console.log(data);

  return data;
};
