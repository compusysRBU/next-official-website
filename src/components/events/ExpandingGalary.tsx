"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt?: string;
}

interface ExpandingGalleryProps {
  images: GalleryImage[];
  fallbackSrc?: string;
  expandRatio?: number; // how much hovered expands
}

const ExpandingGallery: React.FC<ExpandingGalleryProps> = ({
  images,
  fallbackSrc = "https://via.placeholder.com/800x600?text=Image",
  expandRatio = 2,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(images.length);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(12);
      } else if (window.innerWidth >= 1024) {
        setVisibleCount(8);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(6);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleImages = images.slice(0, visibleCount);

  return (
    <div className="flex w-full h-[400px] overflow-hidden">
      {visibleImages.map((img, idx) => {
        const isHovered = idx === hoveredIndex;
        const flexGrow = isHovered ? expandRatio : 1;

        return (
          <div
            key={idx}
            className="relative h-full overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              flexGrow,
              flexBasis: 0,
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={img.src}
              alt={img.alt ?? `Image ${idx + 1}`}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = fallbackSrc;
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExpandingGallery;