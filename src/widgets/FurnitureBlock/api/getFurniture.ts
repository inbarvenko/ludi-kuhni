import axiosInstance from "../../../shared/configs/axios";

export const getFurniture = async () => {
  const { data } = await axiosInstance.get("/rooms/");

  console.log(data);

  return data;
};
