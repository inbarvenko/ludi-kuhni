import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Grid3X3, List, Heart, Eye, X, SlidersHorizontal } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

import svgPaths from "./Catalogue.svg";

import { Button, Card, Checkbox, Divider, Spin } from "antd";
import CardContent from "@mui/material/CardContent";
import { CatalogueWrapper } from "./CatalogueWrapper";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../widgets/RoomsBlock/api/getRooms";
import { getFurniture } from "./api/getFurniture";
import type { FilterValueType } from "../../features/RoomBlock/types";
import { colors } from "../../shared/constants/colors";

export function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>(2);
  const [selectedStyles, setSelectedStyles] = useState<FilterValueType[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  const { data: rooms } = useQuery({
    queryKey: ["rooms"], // Уникальный ключ для кэша
    queryFn: getRooms,
  });

  const selectedRoom = useMemo(() => {
    return rooms?.find((room) => room.id === selectedCategory);
  }, [rooms, selectedCategory]);

  const { data: furniture, isLoading } = useQuery({
    queryKey: [`furniture?=${selectedCategory}`], // Уникальный ключ для кэша
    queryFn: () => getFurniture({ roomId: selectedCategory }),
  });

  const handleCategoryToggle = (category: number) => {
    setSelectedCategory(category);
  };

  const handleStyleToggle = (style: FilterValueType) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const removeFilter = (type: "category" | "style", value: number) => {
    if (type === "category") {
      setSelectedCategory(1);
    } else {
      setSelectedStyles((prev) => prev.filter((s) => s.id !== value));
    }
  };

  return (
    <CatalogueWrapper className="min-h-screen bg-gray-50">
      {/* Catalog Header */}
      <div
        className={` bg-[#F6F0E9] overflow-clip relative shrink-0 w-full flex justify-center items-center py-[40px]`}
      >
        <div
          className="absolute h-[346px] left-[1026px] top-[72px] w-[542px]"
          data-name="Vector"
        >
          <div className="absolute inset-[-28.9%_-18.45%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 742 546"
            >
              <g filter="url(#filter0_f_4_202)" id="Vector">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p243a2400}
                  fill="#79BF3A"
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="546"
                  id="filter0_f_4_202"
                  width="742"
                  x="-1.18722e-07"
                  y="-5.8524e-08"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  />
                  <feGaussianBlur
                    result="effect1_foregroundBlur_4_202"
                    stdDeviation="50"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#0f0449] blur-[50px] filter h-[117px] left-28 opacity-50 rounded-[100px] top-[-42px] w-[213px]" />

        <div className="text-[#0f0449] p">
          <p
            className="block leading-[normal] whitespace-pre mak"
            style={{ fontSize: "36px", textAlign: "center" }}
          >
            Каталог
          </p>
        </div>
      </div>

      <div
        className={`w-full flex flex-row items-center ${
          selectedCategory ? " justify-between" : " justify-end"
        } px-[78px] mt-6 `}
      >
        {/* Active Filters */}
        {(selectedCategory || selectedStyles.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <div
                key={selectedCategory}
                className="badge"
                // onClick={() => removeFilter("category", selectedCategory)}
              >
                Категория: {selectedCategory}
                <X size={14} />
              </div>
            )}

            {selectedStyles.map((style) => (
              <div
                key={style.id}
                className="badge"
                onClick={() => removeFilter("style", style.id)}
              >
                Стиль: {style.name}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-64 flex-shrink-0"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h3 className="filter-main">Комната</h3>

                      <div className="space-y-3">
                        {rooms?.map((room, index) => (
                          <div
                            key={index}
                            onClick={() => handleCategoryToggle(room.id || 1)}
                            className="flex items-center gap-[5px]"
                          >
                            <label
                              // htmlFor={room.}
                              className={`text-sm cursor-pointer text-gray-700 category  ${
                                selectedCategory === room.id &&
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

                    {/* Styles */}
                    {selectedRoom?.filter_groups.map((group, index) => (
                      <div key={index}>
                        <h3 className="filter-main">{group.name}</h3>

                        {group.filters.map((filter, index) => (
                          <div
                            key={index}
                            // onClick={() => handleStyleToggle(filter.name)}
                            className="flex items-center gap-[5px]"
                          >
                            <Checkbox
                              checked={selectedStyles.includes(filter)}
                              onChange={() => handleStyleToggle(filter)}
                            />

                            <label
                              htmlFor={filter.name}
                              className={`text-sm cursor-pointer text-gray-700 category `}
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
              {isLoading ? (
                <Spin />
              ) : (
                furniture?.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card
                      className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      cover={<img src={product.images[0].image} alt="" />}
                    >
                      <div className="relative">
                        {/* <div
                          className="aspect-square bg-cover bg-center"
                          style={{
                            backgroundImage: `url('${product.images[0].image}')`,
                          }}
                        /> */}

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
                          <h3 className="text-lg text-[#0f0449] group-hover:text-[#79bf3a] transition-colors">
                            {product.model}
                          </h3>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            {product.filters.map((filter, index) => (
                              <p
                                key={filter.name + index}
                                className="text-sm text-gray-500"
                              >
                                {filter.name}
                              </p>
                            ))}
                          </div>

                          <FaArrowRight
                            size={24}
                            color={colors["light"].accent_green}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
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
}

export default CatalogPage;
