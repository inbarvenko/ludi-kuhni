import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Grid3X3, List, Heart, Eye, X, SlidersHorizontal } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

import { Button, Card, Checkbox, Divider } from "antd";
import CardContent from "@mui/material/CardContent";
import { CatalogueWrapper } from "./CatalogueWrapper";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../widgets/RoomsBlock/api/getRooms";
import { getFurniture } from "./api/getFurniture";
import type {
  ColorType,
  FilterValueType,
} from "../../features/RoomBlock/types";
import { colors } from "../../shared/constants/colors";
import type { FurnitureType } from "../../shared/types/types";
import { useNavigate, useSearchParams } from "react-router-dom";
import CatalogHeader from "./CatalogHeader/CatalogHeader";
import ColorCircle from "../../shared/ui/ColorCircle/ColorCircle";

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // имя и номер выбранной комнаты
  const [selectedCategory, setSelectedCategory] = useState<FilterValueType>(
    {} as FilterValueType
  );
  // выбранные цвета
  const [selectedColors, setSelectedColors] = useState<ColorType[]>([]);
  // выбранные типы мебели
  const [selectedTypes, setSelectedTypes] = useState<FurnitureType[]>([]);
  // выбранные ост фильтры
  const [selectedStyles, setSelectedStyles] = useState<FilterValueType[]>([]);

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  const { data: rooms } = useQuery({
    queryKey: ["rooms"], // Уникальный ключ для кэша
    queryFn: getRooms,
  });

  const selectedRoom = useMemo(() => {
    return rooms?.find((room) => room.id === selectedCategory.id);
  }, [rooms, selectedCategory.id]);

  // Установка нужной комнаты в state из searchParams
  useEffect(() => {
    const r = searchParams.get("room")!;
    if (
      !selectedCategory.id ||
      !selectedCategory.name ||
      +r !== selectedCategory.id
    ) {
      setSelectedCategory({
        id: +r,
        name: rooms?.find((room) => room.id === +r)?.name || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rooms, searchParams]);

  const furniture_types_ids = useMemo(
    () => selectedTypes?.map((type) => type.id).join(","),
    [selectedTypes]
  );

  const filters_ids = useMemo(
    () => selectedStyles?.map((type) => type.id).join(","),
    [selectedStyles]
  );

  const color_ids = useMemo(
    () => selectedColors?.map((type) => type.id).join(","),
    [selectedColors]
  );

  const { data: furniture } = useQuery({
    queryKey: [
      `furniture?room=${selectedCategory.id}&styles=${filters_ids}&types=${furniture_types_ids}&colors=${color_ids}`,
    ], // Уникальный ключ для кэша
    queryFn: () =>
      getFurniture({
        room: selectedCategory.id,
        filters: filters_ids,
        furniture_types: furniture_types_ids,
        color: color_ids,
      }),
  });

  const navigateProduct = (id: number) => {
    navigate("/product/" + id);
  };

  const clearStates = () => {
    setSelectedStyles([]);
    setSelectedTypes([]);
    setSelectedColors([]);
  };

  const handleCategoryToggle = (category: FilterValueType) => {
    setSelectedCategory(category);
    setSearchParams((prev) => {
      return { ...prev, room: category.id };
    });
    clearStates();
  };

  const handleColorToggle = (style: ColorType) => {
    setSelectedColors((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleStyleToggle = (style: FilterValueType) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleTypeToggle = (style: FilterValueType) => {
    setSelectedTypes((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const removeFilter = (type: "color" | "type" | "style", value: number) => {
    if (type === "color") {
      setSelectedColors((prev) => prev.filter((s) => s.id !== value));
    } else {
      if (type === "type") {
        setSelectedTypes((prev) => prev.filter((s) => s.id !== value));
      } else {
        setSelectedStyles((prev) => prev.filter((s) => s.id !== value));
      }
    }
  };

  return (
    <CatalogueWrapper className="min-h-screen bg-gray-50">
      {/* Catalog Header */}
      <CatalogHeader />

      <div
        className={`w-full flex flex-row items-center ${
          selectedCategory ? " justify-between" : " justify-end"
        } px-[78px] mt-6 `}
      >
        {/* Active Filters */}
        {(selectedCategory ||
          selectedStyles.length > 0 ||
          selectedTypes.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <div
                key={selectedCategory.id}
                className="badge"
                // onClick={() => removeFilter("category", selectedCategory)}
              >
                Выбранная категория: {selectedCategory.name}
                <X size={14} />
              </div>
            )}

            {selectedStyles.map((style) => (
              <div
                key={style.id}
                className="badge"
                onClick={() => removeFilter("style", style.id)}
              >
                Фильтры: {style.name}
                <X size={14} />
              </div>
            ))}

            {selectedTypes.map((style) => (
              <div
                key={style.id}
                className="badge"
                onClick={() => removeFilter("type", style.id)}
              >
                Выбранный тип: {style.name}
                <X size={14} />
              </div>
            ))}

            {selectedColors.map((style) => (
              <div
                key={style.id}
                className="badge"
                onClick={() => removeFilter("color", style.id)}
              >
                Выбранный цвет: {style.name}
                <X size={14} />
              </div>
            ))}
          </div>
        )}

        {/* Search and Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between h-[41px]">
          <div className="flex items-center gap-[5px]">
            <Button
              variant="outlined"
              size="small"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Фильтры</span>
            </Button>

            <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "filled" : "outlined"}
                size="small"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "filled" : "outlined"}
                size="small"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-64 flex-shrink-0 "
            >
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h3 className="filter-main">Категории</h3>

                      <div className="space-y-3">
                        {rooms?.map((room, index) => (
                          <div
                            key={index}
                            onClick={() =>
                              room.id &&
                              handleCategoryToggle({
                                id: room.id,
                                name: room.name,
                              })
                            }
                            className="flex items-center gap-[5px]"
                          >
                            <label
                              className={`text-sm cursor-pointer text-gray-700 category  ${
                                selectedCategory.id === room.id &&
                                "category-active"
                              }`}
                            >
                              {room.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Divider />

                    <div>
                      <h3 className="filter-main">Тип мебели</h3>
                      {selectedRoom?.furniture_types.map((type, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[5px]"
                        >
                          <Checkbox
                            checked={selectedTypes.includes(type)}
                            onChange={() => handleTypeToggle(type)}
                          />

                          <label
                            htmlFor={type.name}
                            className={`text-sm cursor-pointer text-gray-700 category `}
                          >
                            {type.name}
                          </label>
                        </div>
                      ))}
                    </div>

                    <Divider />

                    <div>
                      <h3 className="filter-main">Цвета</h3>
                      {selectedRoom?.colors.map((color, index) => (
                        <div
                          key={index + color.hex_value}
                          className="flex items-center gap-[5px]"
                        >
                          <Checkbox
                            checked={selectedColors.includes(color)}
                            onChange={() => handleColorToggle(color)}
                          />

                          <ColorCircle
                            hexColor={color.hex_value}
                            colorName={color.name}
                          />
                        </div>
                      ))}
                    </div>

                    <Divider />

                    {/* Styles */}
                    {selectedRoom?.filter_groups.map((group, index) => (
                      <div key={index}>
                        <h3 className="filter-main">{group.name}</h3>

                        {group.filters.map((filter, index) => (
                          <div
                            key={index}
                            // onClick={() => handleStyleToggle(filter.name)}
                            className="flex items-center gap-[5px]  pt-[10px] pb-[10px]"
                          >
                            <Checkbox
                              checked={selectedStyles.includes(filter)}
                              onChange={() => handleStyleToggle(filter)}
                            />

                            <label
                              htmlFor={filter.name}
                              className={`text-sm cursor-pointer text-gray-700 category pl-[10px]`}
                            >
                              {filter.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.aside>
          )}

          {/* Product Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Найдено {furniture?.length} товаров
              </p>
            </div>

            <motion.div
              layout
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {/* {isLoading ? (
                <img src={Loading} />
              ) : ( */}
              {furniture?.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card
                    className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 max-h-[460px] min-h-[460px] hover:cursor-pointer"
                    cover={
                      <img
                        src={product.images[0].image}
                        alt=""
                        style={{
                          maxHeight: "330px",
                          minHeight: "330px",
                          objectFit: "cover",
                        }}
                      />
                    }
                    onClick={() => navigateProduct(product.id)}
                  >
                    <div className="relative">
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity space-y-2">
                        <Button
                          size="small"
                          variant="solid"
                          className="h-8 w-8 p-0 rounded-full"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              favorites.includes(product.id)
                                ? "fill-red-500 text-red-500"
                                : ""
                            }`}
                          />
                        </Button>

                        <Button
                          size="small"
                          variant="solid"
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Color Dots */}
                      <div className="absolute bottom-4 left-4 flex space-x-1">
                        {product.color && (
                          <div
                            className="w-3 h-3 rounded-full border border-white shadow-sm"
                            style={{ backgroundColor: product.color }}
                          />
                        )}
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="card-text-main text-[#0f0449] group-hover:text-[#79bf3a] transition-colors">
                          {product.model}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between gap-[15px]">
                        <div className="card-text text-[#6c6c6c] font-['Montserrat']">
                          {product.filters
                            .map((filter) => filter.name)
                            .join(", ")}
                        </div>

                        <FaArrowRight
                          size={24}
                          color={colors["light"].accent_green}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              {/* )} */}
            </motion.div>

            {furniture?.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Товары не найдены</p>
                <p className="text-sm text-gray-400 mt-2">
                  Попробуйте изменить параметры поиска
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </CatalogueWrapper>
  );
};

export default CatalogPage;
