// hooks/useImagePreload.ts
import { useState, useEffect } from "react";

export function useImagePreload(imageUrls: string[], preloadIndices: number[]) {
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
        img.onerror = () => resolve(url); // Все равно резолвим, чтобы не блокировать
      });
    });

    Promise.all(preloadPromises).then((loadedUrls) => {
      setLoadedUrls((prev) => new Set([...prev, ...loadedUrls]));
    });
  }, [imageUrls, preloadIndices, loadedUrls]);

  return loadedUrls;
}
