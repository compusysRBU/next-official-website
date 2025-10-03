import ExpandingGallery from "@/components/events/ExpandingGalary";
import Image from "next/image";

export default function EventPage() {
	const images = [
		{
			src: "https://res.cloudinary.com/dblbskhpi/image/upload/v1759074030/yapmwdn3rervdg1amrbl.jpg",
			alt: "Image 1",
		},
		{
			src: "https://res.cloudinary.com/dblbskhpi/image/upload/v1759074033/txclt2cijt5bryjev1lv.jpg",
			alt: "Image 2",
		},
		{
			src: "https://res.cloudinary.com/dblbskhpi/image/upload/v1759074035/lte4sbptoky8jnsuuo9t.jpg",
			alt: "Image 3",
		},
		{
			src: "https://res.cloudinary.com/dblbskhpi/image/upload/v1759074040/tsxvvtpljivhmx84u9uz.jpg",
			alt: "Image 4",
		},
		{
			src: "https://res.cloudinary.com/dblbskhpi/image/upload/v1759074045/npl71ndbv21w7qusvfho.jpg",
			alt: "Image 5",
		},
		{
			src: "https://res.cloudinary.com/dblbskhpi/image/upload/v1759074051/pudujdide0pzwakwygpe.jpg",
			alt: "Image 6",
		},
		{
			src: "https://res.cloudinary.com/dblbskhpi/image/upload/v1759074053/x5zov7r0zzjyb9fdxtql.jpg",
			alt: "Image 7",
		},
		{ src: "/ikshit.jpeg", alt: "Image 8" },
		{ src: "/ikshit-2.jpeg", alt: "Image 9" },
		{ src: "/ikshit.jpg", alt: "Image 10" },
		{ src: "https://picsum.photos/id/1022/800/600", alt: "Image 11" },
		{ src: "https://picsum.photos/id/1023/800/600", alt: "Image 12" },
	];

	return (
		<div className="h-full w-full">
			<ExpandingGallery images={images} />
			<div className="absolute top-2/3 left-1/2 z-20 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-8 sm:max-w-xl md:max-w-3xl  pointer-events-none">
				<Image
					src="/assets/manzar/manzar-event-image.svg"
					alt="CSE Logo"
					// We remove fixed width/height for responsiveness
					// and use layout="responsive" if this were Next.js Image,
					// but since it's a generic React component, we use Tailwind classes.
					width={500}
					height={150}
					className="h-auto w-full" // Key: w-full makes it fill its parent, h-auto maintains aspect ratio
				/>
			</div>
		</div>
	);
}
