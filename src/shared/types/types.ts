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
  //   model_3d: null;
};
