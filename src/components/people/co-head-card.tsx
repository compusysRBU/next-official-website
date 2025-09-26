import { cn } from "@/lib/utils";
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

export function CoHeadCard({
	name,
	role,
	imageUrl,
	backgroundColor = "bg-[#f2a65a]",
	nameTagColor = "bg-[#ec7f23]",
	instagramUrl,
	linkedinUrl,
	className,
}: CoHeadCardProps) {
	const uniqueId = (name + role).toString().replace(/\s+/g, "_").toLowerCase();
	return (
		<div className={cn("relative w-full max-lg:max-w-[16rem]", className)} >
			<div id={uniqueId} className={cn("relative w-full rounded-xl border-2 border-zinc-950", backgroundColor)}>
				<img
					src={imageUrl || "/placeholder.svg"}
					alt={name}
					className="h-full w-full object-cover"
					loading="lazy"
				/>
				<div className="absolute bottom-2 left-1/2 w-full max-w-[80%] -translate-x-1/2 transform">
					<MorphName role={role} name={name} id={uniqueId}/>
				</div>
			</div>
		</div>
	);
}
