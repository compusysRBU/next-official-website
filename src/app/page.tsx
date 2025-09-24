"use client";

import About from "@/components/home/about";
import EventStackItem from "@/components/home/event-stack-item";
import Hero from "@/components/home/hero";
import "@/components/styles/ScrollStack.css";
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack";
import { eventItems } from "@/lib/event-data";

export default function Home() {
	return (
		<div className="min-h-screen w-full">
			<Hero />
			<About />

			<div className="mb-80 sm:mb-40 md:mb-32 lg:mb-28" />

			<section className="mx-auto w-full" id="highlights">
				{/* ScrollStack Component with responsive heights */}
				<ScrollStack
					className="relative z-10 w-full max-w-none sm:mx-auto sm:max-w-3xl"
					cardHeight="40rem" // Desktop height
					tabletCardHeight="36rem" // Tablet height
					mobileCardHeight="24rem" // Mobile height
					topOffset="10vh"
					mobileTopOffset="24vh"
				>
					{/* Background Title - Fully Responsive */}
					<h2 className="font-sugar pointer-events-none absolute top-1/2 left-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 text-center leading-none sm:flex-row sm:gap-2">
						<span className="xs:text-[4rem] text-[3rem] whitespace-nowrap text-zinc-800 sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
							Event
						</span>
						<div className="relative inline-block max-w-fit">
							<span className="xs:text-[4rem] relative z-20 inline-block -rotate-1 rounded-sm border-2 border-zinc-950 bg-[#f3a20f] px-2 py-1 text-[3rem] whitespace-nowrap text-white sm:-rotate-2 sm:px-3 sm:py-0 sm:text-[5rem] md:text-[6rem] lg:px-4 lg:text-[8rem] xl:text-[10rem]">
								Highlights
							</span>
							<div className="absolute top-0.5 left-0 z-10 h-full w-full -rotate-1 rounded-sm bg-zinc-800/20 sm:top-1 sm:-rotate-2 lg:top-2"></div>
						</div>
					</h2>

					{/* Map through the blog items */}
					{eventItems.map((item, index) => {
						// Define different rotation classes for each item
						const rotationClasses = [
							"overflow-hidden rotate-3",
							"overflow-hidden rotate-1",
							"overflow-hidden -rotate-1",
							"overflow-hidden -rotate-3",
						];

						return (
							<ScrollStackItem
								key={item.id}
								itemClassName={rotationClasses[index % rotationClasses.length]}
							>
								<EventStackItem
									item={item}
									rotationClass={rotationClasses[index % rotationClasses.length]}
								/>
							</ScrollStackItem>
						);
					})}
				</ScrollStack>
			</section>

			<div className="mt-12 h-screen w-full px-4 sm:mt-16 sm:px-6 lg:mt-20 lg:px-8">
				<div className="text-center text-gray-600">End of event stories</div>
			</div>
		</div>
	);
}
