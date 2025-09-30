import { cn } from "@/lib/utils";
import Image from "next/image";
import MorphName from "./morph-name";

interface CoHeadCardProps {
	name: string;
	role: string;
	imageUrl: string;
	backgroundColor?: string;
	nameTagColor?: string;
	instagramUrl?: string;
	linkedinUrl?: string;
	className?: string;
}

export function CoHeadCard({ name, role, imageUrl, backgroundColor = "bg-[#f2a65a]", className }: CoHeadCardProps) {
	const uniqueId = (name + role).toString().replace(/\s+/g, "_").toLowerCase();
	return (
		<div className={cn("relative w-full max-lg:max-w-[16rem]", className)}>
			<div
				id={uniqueId}
				className={cn(
					"relative h-[24rem] w-full overflow-hidden rounded-xl border-2 border-zinc-950",
					backgroundColor
				)}
			>
				<Image
					src={imageUrl || "/placeholder.svg"}
					alt={name}
					className="h-full w-full object-cover"
					loading="lazy"
					width={400}
					height={400}
					sizes="100vw"
				/>
			</div>
			<div className="absolute bottom-2 left-1/2 w-full max-w-[80%] -translate-x-1/2 transform">
				<MorphName role={role} name={name} id={uniqueId} />
			</div>
		</div>
	);
}
