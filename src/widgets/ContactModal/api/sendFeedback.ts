import axiosInstance from "../../../shared/configs/axios";
type Params = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const sendFeedback = async (params: Params) => {
  const { data } = await axiosInstance.post("/feedback/", params);

  console.log(data);

  return data ? true : false;
};
