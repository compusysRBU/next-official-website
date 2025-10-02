"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
	const [offset, setOffset] = useState<{ [key: number]: { x: number; y: number } }>({});

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				setVisibleCount(12);
			} else if (window.innerWidth >= 1024) {
				setVisibleCount(10);
			} else if (window.innerWidth >= 768) {
				setVisibleCount(8);
			} else {
				setVisibleCount(6);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const visibleImages = images.slice(0, visibleCount);

	// Handle pointer movement
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width - 0.5) * 7.5; // -10px to +10px
		const y = ((e.clientY - rect.top) / rect.height - 0.5) * 7;
		setOffset((prev) => ({ ...prev, [idx]: { x, y } }));
	};

	return (
		<div className="flex h-[120vh] w-full overflow-hidden p-0 "
		style={{
    filter: "sepia(40%) contrast(60%) brightness(110%)"
  }}	>
			{visibleImages.map((img, idx) => {
				const isHovered = idx === hoveredIndex;
				const flexGrow = isHovered ? expandRatio : 1;
				const shift = offset[idx] ? { x: offset[idx].x, y: offset[idx].y } : { x: 0, y: 0 };

				return (
					<div
						key={idx}
						className="relative h-full w-full overflow-hidden transition-all duration-500 ease-in-out"
						style={{
							flexGrow,
							flexBasis: 0,
						}}
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseMove={(e) => handleMouseMove(e, idx)}
						onMouseLeave={() => {
							setHoveredIndex(null);
							setOffset((prev) => ({ ...prev, [idx]: { x: 0, y: 0 } }));
						}}
					>
						<Image
							src={img.src}
							alt={img.alt ?? `Image ${idx + 1}`}
							fill
							className="object-cover"
							style={{
								transform: `translate(${shift.x}px, ${shift.y}px) scale(${isHovered ? 1.05 : 1.05})`,
								transformOrigin: "center",
							}}
							loading="lazy"
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
