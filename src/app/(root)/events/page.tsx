import ExpandingGallery from "@/components/events/ExpandingGalary";

export default function EventPage() {
	const images = [
  { "src": "https://picsum.photos/id/1011/800/600", "alt": "Image 1" },
  { "src": "https://picsum.photos/id/1012/800/600", "alt": "Image 2" },
  { "src": "https://picsum.photos/id/1013/800/600", "alt": "Image 3" },
  { "src": "https://picsum.photos/id/1014/800/600", "alt": "Image 4" },
  { "src": "https://picsum.photos/id/1015/800/600", "alt": "Image 5" },
  { "src": "https://picsum.photos/id/1016/800/600", "alt": "Image 6" },
  { "src": "https://picsum.photos/id/1018/800/600", "alt": "Image 7" },
  { "src": "https://picsum.photos/id/1019/800/600", "alt": "Image 8" },
  { "src": "https://picsum.photos/id/1020/800/600", "alt": "Image 9" },
  { "src": "https://picsum.photos/id/1021/800/600", "alt": "Image 10" },
  { "src": "https://picsum.photos/id/1022/800/600", "alt": "Image 11" },
  { "src": "https://picsum.photos/id/1023/800/600", "alt": "Image 12" }
];

	return <div className="h-full w-full">
		<ExpandingGallery images={images} />
	</div>;
}
