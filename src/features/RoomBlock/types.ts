import type { FurnitureType } from "../../shared/types/types";

export type FilterValueType = {
  id: number;
  name: string;
};

export type FilterType = {
  filters: FilterValueType[];
  id: number;
  name: string;
};

export type ColorType = {
  hex_value: string;
  id: number;
  name: string;
};

export type RoomsHomeType = {
  id?: number;
  image: string;
  name: string;

  colors: ColorType[];
  filter_groups: FilterType[];
  furniture_types: FurnitureType[];
};
