import { Image } from "antd";
import { useState } from "react";
import type { ImageType } from "../../../shared/types/types";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductGalleryProps {
  images: ImageType[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative">
        <div className="bg-[#f9f9f9] rounded-[20px] overflow-hidden w-full max-w-[600px]">
          <Image
            src={images[selectedImage].image}
            alt={`${productName} - изображение ${selectedImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Thumbnail gallery */}
      <div className="flex gap-3 flex-wrap">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={` relative bg-[#f9f9f9] rounded-lg overflow-hidden w-20 h-20 transition-all ${
              selectedImage === index
                ? "ring-2 ring-[#79bf3a] opacity-100"
                : "opacity-70 hover:opacity-100"
            }
            `}
          >
            <Image
              preview={false}
              src={image.image}
              alt={`${productName} - миниатюра ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
