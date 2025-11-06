import { Image } from "antd";
import { ArrowRight } from "lucide-react";
import type { RecommendationType } from "../../../shared/types/types";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { scrollToTop } from "../../../shared/model/scrollToTop";

interface RelatedProductsProps {
  products: RecommendationType[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const navigate = useNavigate();

  const isMobile = useMemo(() => window.innerWidth < 768, []);

  const navigateCatalogue = () => {
    navigate("/catalog?room=2");
    scrollToTop();
  };

  const onItemClick = (id: number) => {
    navigate("/product/" + id);
    scrollToTop();
  };

  return (
    <div className="bg-[#f9f9f9] py-16">
      <div
        className={`container mx-auto ${isMobile ? "px-[24px]" : "px-[78px]"}`}
      >
        <div className="mb-12">
          <h2 className="font-['Montserrat'] text-[#6c6c6c] text-2xl mb-2">
            / Похожие товары
          </h2>
          <p className="font-['Montserrat'] text-[#6c6c6c]">
            Другие товары, которые могут вам понравиться
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div
                onClick={() => onItemClick(product.id)}
                className="relative bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Product image */}
                <div className="aspect-square overflow-hidden">
                  <Image
                    preview={false}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Arrow button */}
                <div className="absolute top-4 right-4">
                  <div className="bg-[#615756] rounded-full p-2 blur-[10px] absolute inset-0" />
                  <div className="relative bg-[#615756] rounded-full p-2 group-hover:bg-[#79bf3a] transition-colors">
                    <ArrowRight className="size-4 text-white" />
                  </div>
                </div>

                {/* Product info */}
                <div className="pl-6 pt-6 ">
                  <h3 className="font-['Montserrat'] text-[#0f0449] text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <div className="pl-6 pb-6">
                  <div className="font-['Montserrat'] text-[#6c6c6c] text-[#6c6c6c] text-sm">
                    {product.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={navigateCatalogue}
            className="bg-[#79bf3a] text-white px-8 py-3 rounded-lg font-['Montserrat'] hover:bg-[#6ba632] transition-colors"
          >
            Посмотреть все товары
          </button>
        </div>
      </div>
    </div>
  );
}
