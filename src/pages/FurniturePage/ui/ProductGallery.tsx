import { Image } from "antd";
import { useState, useMemo, useCallback, useEffect } from "react";
import type { ImageType } from "../../../shared/types/types";

interface ProductGalleryProps {
  images: ImageType[];
  productName: string;
}

// Кастомный хук для предзагрузки изображений
function useImagePreload(imageUrls: string[], preloadIndices: number[]) {
  const [loadedUrls, setLoadedUrls] = useState<Set<string>>(new Set());

  useEffect(() => {
    const urlsToPreload = preloadIndices
      .map((index) => imageUrls[index])
      .filter((url) => url && !loadedUrls.has(url));

    if (urlsToPreload.length === 0) return;

    const preloadPromises = urlsToPreload.map((url) => {
      return new Promise<string>((resolve) => {
        const img = document.createElement("img");
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => resolve(url);
      });
    });

    Promise.all(preloadPromises).then((loadedUrls) => {
      setLoadedUrls((prev) => new Set([...prev, ...loadedUrls]));
    });
  }, [imageUrls, preloadIndices, loadedUrls]);

  return loadedUrls;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Подготавливаем данные для предзагрузки
  const imageUrls = useMemo(() => images.map((img) => img.image), [images]);
  const preloadIndices = useMemo(
    () =>
      [
        selectedImage - 1,
        selectedImage,
        selectedImage + 1,
        selectedImage + 2,
      ].filter((index) => index >= 0 && index < images.length),
    [selectedImage, images.length]
  );

  // Используем хук предзагрузки
  const loadedUrls = useImagePreload(imageUrls, preloadIndices);

  // Проверяем, загружено ли текущее изображение
  const isCurrentImageLoaded = loadedUrls.has(imageUrls[selectedImage]);

  const previewItems = useMemo(() => images.map((img) => img.image), [images]);

  const handleThumbnailClick = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <div className="bg-[#f9f9f9] rounded-[20px] overflow-hidden w-full max-w-[600px] h-96 flex items-center justify-center">
          <span className="text-gray-400">Нет изображений</span>
        </div>
      </div>
    );
  }

  return (
    <Image.PreviewGroup items={previewItems}>
      <div className="flex flex-col gap-4">
        {/* Main image - используем информацию о предзагрузке */}
        <div className="bg-[#f9f9f9] rounded-[20px] overflow-hidden w-full max-w-[600px] min-h-[400px] flex items-center justify-center">
          <Image
            src={images[selectedImage].image}
            alt={`${productName} - главное изображение`}
            className="w-full h-full object-cover cursor-zoom-in"
            placeholder={
              !isCurrentImageLoaded ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-pulse bg-gray-200 w-full h-full" />
                </div>
              ) : undefined
            }
            fallback="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f9f9f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%23ccc'%3EИзображение не загружено%3C/text%3E%3C/svg%3E"
          />
        </div>

        {/* Thumbnail gallery - также можно оптимизировать миниатюры */}
        <div className="flex gap-3 flex-wrap ">
          {images.map((image, index) => {
            const isThumbnailLoaded = loadedUrls.has(imageUrls[index]);

            return (
              <button
                key={image.id}
                onClick={() => handleThumbnailClick(index)}
                className={`relative bg-[#f9f9f9] rounded-lg overflow-hidden w-20 h-20 transition-all flex-shrink-0 ${
                  selectedImage === index
                    ? "ring-2 ring-[#79bf3a] opacity-100 scale-105"
                    : "opacity-70 hover:opacity-100 hover:scale-105"
                }`}
                aria-label={`Просмотр изображения ${index + 1} из ${
                  images.length
                }`}
                aria-pressed={selectedImage === index}
              >
                <Image
                  loading="lazy"
                  preview={false}
                  src={image.thumbnail}
                  alt={`${productName} - миниатюра ${index + 1}`}
                  className="w-full h-full object-cover"
                  placeholder={
                    !isThumbnailLoaded ? (
                      <div className="w-full h-full bg-gray-200 animate-pulse" />
                    ) : undefined
                  }
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = image.image;
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </Image.PreviewGroup>
  );
}
