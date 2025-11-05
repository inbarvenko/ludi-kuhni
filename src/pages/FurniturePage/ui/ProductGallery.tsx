import { Image } from "antd";
import { useState } from "react";
import type { ImageType } from "../../../shared/types/types";

interface ProductGalleryProps {
  images: ImageType[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Image.PreviewGroup items={images.map((img) => img.image)}>
      <div className="flex flex-col gap-4">
        {/* Main image - кликабельная и с preview */}
        <div className="bg-[#f9f9f9] rounded-[20px] overflow-hidden w-full max-w-[600px]">
          <Image
            src={images[selectedImage].image}
            alt={`${productName} - главное изображение`}
            className="w-full h-full object-cover cursor-zoom-in"
            preview={{}}
          />
        </div>

        {/* Thumbnail gallery */}
        <div className="flex gap-3 flex-wrap">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative bg-[#f9f9f9] rounded-lg overflow-hidden w-20 h-20 transition-all ${
                selectedImage === index
                  ? "ring-2 ring-[#79bf3a] opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                loading="lazy"
                preview={false}
                src={image.thumbnail}
                alt={`${productName} - миниатюра ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </Image.PreviewGroup>
  );
}
