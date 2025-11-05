export type FurnitureType = {
  id: number;
  name: string;
};

export type ImageType = {
  id: number;
  image: string;
  large: string;
  medium: string;
  thumbnail: string;
};

export type ColorCircleType = {
  hex_value: string;
  name: string;
};

export type FurnitureObjType = {
  id: number;
  model: string;
  warranty: string;
  furniture_type: FurnitureType;
  filters: FurnitureType[];
  colors: ColorCircleType[] | null;
  images: ImageType[];
  preview_image: string;

  // Размеры
  dimensions?: string;
  // Описание материалов
  details?: string;
  // описание объекта
  description?: string;

  recommendations: RecommendationType[];

  // 3д модель
  //   model_3d: null;
};

export type RecommendationType = {
  category: string;
  id: number;
  image: string;
  name: string;
  style: string;
};
