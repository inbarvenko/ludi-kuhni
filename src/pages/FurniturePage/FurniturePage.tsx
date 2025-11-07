import React, { useMemo } from "react";
import FurniturePageWrapper from "./FurniturePageWrapper";
import { ProductGallery } from "./ui/ProductGallery";
import { ProductInfo } from "./ui/ProductInfo";
import { RelatedProducts } from "./ui/RelatedProducts";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getFurnitureObject } from "./api/getFurnitureObject";
import ContactModal from "../../widgets/ContactModal/ContactModal";
import { ContentLoader } from "../../widgets/ContentLoader/ContentLoader";

// const relatedProducts = [
//   {
//     id: "1",
//     name: "Кухня 'Прованс'",
//     price: "от 120 000 ₽",
//     image:
//       "https://images.unsplash.com/photo-1680210849773-f97a41c6b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzU1NDE0MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     category: "Кухни",
//   },
//   {
//     id: "2",
//     name: "Кухня 'Классик'",
//     price: "от 180 000 ₽",
//     image:
//       "https://images.unsplash.com/photo-1640923365248-3602d58f0b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZnVybml0dXJlJTIwY2FiaW5ldHxlbnwxfHx8fDE3NTU0MTQ3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     category: "Кухни",
//   },
//   {
//     id: "3",
//     name: "Кухня 'Лофт'",
//     price: "от 140 000 ₽",
//     image:
//       "https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc1NTQxNDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     category: "Кухни",
//   },
//   {
//     id: "4",
//     name: "Кухня 'Скандинавия'",
//     price: "от 110 000 ₽",
//     image:
//       "https://images.unsplash.com/photo-1682888818718-74b9ffa75907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwY2FiaW5ldCUyMHdoaXRlfGVufDF8fHx8MTc1NTQxNDc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     category: "Кухни",
//   },
// ];

const FurniturePage: React.FC = () => {
  const { id } = useParams();
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const isMobile = useMemo(() => window.innerWidth < 768, []);

  const {
    data: furniture,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [`furniture-obj?id=${id}`], // Уникальный ключ для кэша
    queryFn: () => getFurnitureObject(id),
  });

  const openModal = () => {
    setIsContactModalOpen(true);
  };

  return (
    <FurniturePageWrapper>
      {isLoading || isFetching || !furniture ? (
        <div className="h-full w-full mh-[40vh]">
          <ContentLoader text="Загрузка объекта..." />
        </div>
      ) : (
        <>
          {isContactModalOpen && (
            <ContactModal
              isOpen={isContactModalOpen}
              onClose={() => setIsContactModalOpen(false)}
            />
          )}

          <div
            className={`container mx-auto mh-[70vh] ${
              isMobile ? "px-[24px]" : "px-[78px]"
            } py-12`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <ProductGallery
                images={furniture.images}
                productName={furniture.model}
              />

              <ProductInfo
                name={furniture.model}
                description={furniture.description || ""}
                characteristics={{
                  material: furniture.details || "",
                  colors: furniture.colors || null,
                  warranty: furniture.warranty || "",
                  dimensions: furniture.dimensions || "",
                  manufacturer: "Люди! Кухни",
                  // style: furniture.filters.find((filter) => filter === 'Классика') || '',
                  installation: "Включен в стоимость",
                }}
                modalOpen={openModal}
              />
            </div>
          </div>

          <RelatedProducts products={furniture.recommendations} />
        </>
      )}
    </FurniturePageWrapper>
  );
};

export default FurniturePage;
