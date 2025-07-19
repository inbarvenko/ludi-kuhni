import axiosInstance from "../../../shared/configs/axios";

export const getFaq = async () => {
  const { data } = await axiosInstance.get("/faqs/");

  return data;
};
