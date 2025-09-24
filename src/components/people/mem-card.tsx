import { cn } from "@/lib/utils";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import NameBadge from "./name-badge";

interface MemberCardProps {
	name: string;
	role: string;
	imageUrl: string;
	backgroundColor?: string;
	nameTagColor?: string;
	instagramUrl?: string;
	linkedinUrl?: string;
	className?: string;
}

export function MemberCard({
	name,
	role,
	imageUrl,
	backgroundColor = "bg-[#f2a65a]",
	nameTagColor = "bg-[#ec7f23]",
	instagramUrl,
	linkedinUrl,
	className,
}: MemberCardProps) {
	return (
		<div className={cn("relative w-full max-w-[24rem]", className)}>
			{/* Main card container with two sections */}
			<div className="relative z-10 w-full border-2 border-zinc-900">
				{/* Shadow/offset - moved to be rendered first (behind) */}
				<div className="absolute -right-2 -bottom-2 z-0 h-full w-full bg-zinc-800/20" />
				<div className="relative">
					<div className="absolute -top-3 -left-3 z-20 h-3 w-3 border-2 border-zinc-900 bg-zinc-50 sm:h-5 sm:w-5" />
					<div className="absolute -top-3 -right-3 z-20 h-3 w-3 border-2 border-zinc-900 bg-zinc-50 sm:h-5 sm:w-5" />
					<div className="absolute -bottom-3 -left-3 z-20 h-3 w-3 border-2 border-zinc-900 bg-zinc-50 sm:h-5 sm:w-5" />
					<div className="absolute -right-3 -bottom-3 z-20 h-3 w-3 border-2 border-zinc-900 bg-zinc-50 sm:h-5 sm:w-5" />

					{/* Role label */}
					<div className="absolute -top-3 left-1/2 z-20 w-full max-w-[64%] -translate-x-1/2 transform sm:-top-4">
						<div className="rounded-md border-2 border-zinc-900 bg-zinc-50 px-3 py-0.5 text-center sm:px-4 sm:py-1">
							<span className="font-mono-two truncate text-xs font-semibold text-zinc-950 sm:text-sm">
								{role}
							</span>
						</div>
					</div>

					<div
						className={cn(
							"relative h-[22rem] w-full overflow-hidden select-none sm:h-[24rem] md:h-[26rem]",
							backgroundColor
						)}
					>
						{/* Person Image */}
						<div className="absolute inset-0 flex items-center justify-center px-2">
							<img
								src={imageUrl || "/placeholder.svg"}
								alt={name}
								className="h-full w-full object-cover"
								loading="lazy"
							/>
						</div>

						{/* Name badge */}
						<NameBadge name={name} nameTagColor={nameTagColor} />
					</div>
				</div>
			</div>
			<div className="mx-auto flex h-fit w-full max-w-[76%] items-center justify-center gap-4 border-2 border-t-0 border-zinc-900 bg-zinc-50 py-2 sm:gap-6 sm:py-2.5">
				{instagramUrl && (
					<a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s GitHub`}>
						<AiFillInstagram className="h-6 w-6 text-purple-500 transition-colors duration-300 hover:text-purple-600 sm:h-7 sm:w-7 md:h-8 md:w-8" />
					</a>
				)}
				{linkedinUrl && (
					<a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`}>
						<AiFillLinkedin className="h-6 w-6 text-blue-500 transition-colors duration-300 hover:text-blue-600 sm:h-7 sm:w-7 md:h-8 md:w-8" />
					</a>
				)}
			</div>
		</div>
	);
}
