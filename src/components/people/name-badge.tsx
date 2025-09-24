import { Cursor } from "@/components/icons";
import { cn } from "@/lib/utils";

interface NameBadgeProps {
	name: string;
	nameTagColor: string;
}

function NameBadge({ name, nameTagColor }: NameBadgeProps) {
	// Extract the hex color value from the nameTagColor class for the cursor
	const colorValue = nameTagColor.match(/#[0-9a-fA-F]+/)?.[0] || "#ec7f23";

	return (
		<div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 transform">
			<div className="relative">
				<div className="absolute -top-5 -left-5">
					<Cursor color={colorValue} />
				</div>
				<div className={cn("rounded-full border-2 border-white px-4 py-2", nameTagColor)}>
					<span className="font-grotesk text-sm font-semibold text-white">{name}</span>
				</div>
			</div>
		</div>
	);
}

export default NameBadge;
