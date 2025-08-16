import { useQuery } from "@tanstack/react-query";
import RoomsBlockWrapper from "./RoomsBlockWrapper";
import RoomBlock from "../../features/RoomBlock/RoomBlock";
import { getRooms } from "./api/getRooms";
import { message, Spin } from "antd";

type Props = {
  width: number;
};

export const RoomsBlock: React.FC<Props> = ({ width }: Props) => {
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rooms"], // Уникальный ключ для кэша
    queryFn: getRooms,
  });

  if (isLoading) return <Spin />;
  if (error) {
    message.error("Не удалось получить список комнат", 3);
  }

  return (
    <RoomsBlockWrapper>
      {rooms?.map((item) => (
        <RoomBlock width={width} key={item.id} {...item} />
      ))}
    </RoomsBlockWrapper>
  );
};
