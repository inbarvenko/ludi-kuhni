import { useState } from "react";
import { motion } from "motion/react";
import { Grid3X3, List, Heart, Eye, X, SlidersHorizontal } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";

import svgPaths from "./Catalogue.svg";

import { Button, Card, Checkbox, Divider, Select } from "antd";
import CardContent from "@mui/material/CardContent";
import { CatalogueWrapper } from "./CatalogueWrapper";

const categories = [
  "Кухни",
  "Шкафы",
  "Прихожие",
  "Ванные",
  "Гостиные",
  "Спальни",
  "Детские",
  "Офисная мебель",
  "Другое",
];

const styles = ["Классика", "Неоклассика", "Модерн", "Лофт"];

const mockProducts = [
  {
    id: 1,
    name: "Кухня №1",
    category: "Кухни",
    style: "Классика",
    price: 180000,
    rating: 4.8,
    image: <div className="bg-[#8B4513]"></div>,
    colors: ["#F6F0E9", "#8B4513", "#D2B48C"],
  },
  {
    id: 2,
    name: "Кухня №2",
    category: "Кухни",
    style: "Модерн",
    price: 250000,
    rating: 4.9,
    image: <div className="bg-[#8B4513]"></div>,
    colors: ["#FFFFFF", "#808080", "#000000"],
  },
  {
    id: 3,
    name: "Кухня №3",
    category: "Кухни",
    style: "Лофт",
    price: 320000,
    rating: 4.7,
    image: <div className="bg-[#8B4513]"></div>,
    colors: ["#8B4513", "#2F4F4F", "#D2B48C"],
  },
  {
    id: 4,
    name: "Кухня №4",
    category: "Кухни",
    style: "Неоклассика",
    price: 420000,
    rating: 5.0,
    image: <div className="bg-[#8B4513]"></div>,
    colors: ["#F5F5DC", "#8B4513", "#CD853F"],
  },
  {
    id: 5,
    name: "Кухня №5",
    category: "Кухни",
    style: "Классика",
    price: 190000,
    rating: 4.6,
    image: <div className="bg-[#8B4513]"></div>,
    colors: ["#FFFFFF", "#4682B4", "#F0F8FF"],
  },
  {
    id: 6,
    name: "Кухня №6",
    category: "Кухни",
    style: "Модерн",
    price: 350000,
    rating: 4.8,
    image: <div className="bg-[#8B4513]"></div>,
    colors: ["#FFFFFF", "#696969", "#D3D3D3"],
  },
];

const SelectOptions = [
  {
    label: "По названию",
    value: "name",
  },
  {
    label: "По цене",
    value: "price",
  },
  {
    label: "По рейтингу",
    value: "rating",
  },
];

export function CatalogPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Кухни",
  ]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>(["Классика"]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("name");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleStyleToggle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const removeFilter = (type: "category" | "style", value: string) => {
    if (type === "category") {
      setSelectedCategories((prev) => prev.filter((c) => c !== value));
    } else {
      setSelectedStyles((prev) => prev.filter((s) => s !== value));
    }
  };

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesStyle =
      selectedStyles.length === 0 || selectedStyles.includes(product.style);
    return matchesCategory && matchesStyle;
  });

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
            style={{ fontSize: "32px", textAlign: "center" }}
          >
            Каталог
          </p>
        </div>
      </div>

      <div
        className={`w-full flex flex-row items-center ${
          selectedCategories.length > 0 || selectedStyles.length > 0
            ? " justify-between"
            : " justify-end"
        } px-[78px] mt-6 `}
      >
        {/* Active Filters */}
        {(selectedCategories.length > 0 || selectedStyles.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <div
                key={category}
                className="badge"
                onClick={() => removeFilter("category", category)}
              >
                Категория: {category}
                <X size={14} />
              </div>
            ))}

            {selectedStyles.map((style) => (
              <div
                key={style}
                className="badge"
                onClick={() => removeFilter("style", style)}
              >
                Стиль: {style}
                <X size={14} />
              </div>
            ))}
          </div>
        )}

        {/* Search and Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between h-[41px]">
          <div className="flex items-center gap-[5px]">
            <Select
              options={SelectOptions}
              value={sortBy}
              onChange={setSortBy}
            ></Select>

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
                      <h3 className="text-lg text-[#0f0449] mb-4">Категория</h3>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center gap-[5px]"
                          >
                            <Checkbox
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryToggle(category)}
                            />

                            <label
                              htmlFor={category}
                              className="text-sm cursor-pointer text-gray-700 hover:text-[#0f0449]"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Divider />

                    {/* Styles */}
                    <div>
                      <h3 className="text-lg text-[#0f0449] mb-4">Стиль</h3>
                      <div className="space-y-3">
                        {styles.map((style) => (
                          <div
                            key={style}
                            className="flex items-center gap-[5px]"
                          >
                            <Checkbox
                              id={style}
                              checked={selectedStyles.includes(style)}
                              onChange={() => handleStyleToggle(style)}
                            />
                            <label
                              htmlFor={style}
                              className="text-sm cursor-pointer text-gray-700 hover:text-[#0f0449]"
                            >
                              {style}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.aside>
          )}

          {/* Product Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Найдено {filteredProducts.length} товаров
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
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <div
                        className="aspect-square bg-cover bg-center"
                        style={{ backgroundImage: `url('${product.image}')` }}
                      />

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
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full border border-white shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg text-[#0f0449] group-hover:text-[#79bf3a] transition-colors">
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">
                            {product.style}
                          </p>
                          <p className="text-xl text-[#0f0449]">
                            {product.price.toLocaleString("ru-RU")} ₽
                          </p>
                        </div>

                        <FaArrowRight className="bg-[#79bf3a] hover:bg-[#6aa332]" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
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
