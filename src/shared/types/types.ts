export type FurnitureType = {
  id: number;
  name: string;
};

export type ImageType = {
  id: number;
  image: string;
};

export type FurnitureObjType = {
  id: number;
  model: string;
  warranty: string;
  furniture_type: FurnitureType;
  filters: FurnitureType[];
  color: string | null;
  images: ImageType[];

  // Размеры
  dimensions?: string;
  // Описание материалов
  details?: string;
  // описание объекта
  description?: string;

  // 3д модель
  //   model_3d: null;
};
