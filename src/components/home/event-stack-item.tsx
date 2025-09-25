"use client";

import { EventItem } from "@/lib/event-data";
import Image from "next/image";

interface EventStackItemProps {
	item: EventItem;
	rotationClass?: string;
}

export default function EventStackItem({ item }: EventStackItemProps) {
	return (
		<div className="h-full w-full overflow-hidden rounded-xl bg-transparent">
			<div className="relative h-48 w-full p-3 sm:h-56 sm:p-4 lg:h-64">
				<Image
					src={item.image}
					alt={item.title}
					className="h-full w-full rounded-xl object-cover"
					width={400}
					height={300}
					priority
				/>
			</div>

			<div className="flex flex-col items-center space-y-2 p-4 sm:items-start">
				<div className="flex flex-col items-center sm:items-start">
					<h3 className="font-grotesk text-xl font-bold text-gray-800">{item.title}</h3>

					<span className={"font-grotesk hidden text-base font-medium sm:block"}>{item.description}</span>
				</div>
				<span className="text-muted-foreground font-mono-two hidden text-base font-semibold sm:block">
					{item.date}
				</span>
			</div>
		</div>
	);
}
