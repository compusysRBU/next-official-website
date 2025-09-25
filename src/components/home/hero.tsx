import { Highlighter } from "@/components/magicui/highlighter";
import { CustomLink } from "@/components/ui/link";

const Hero = () => {
	return (
		<div className="hero-container mx-auto mb-20 w-full max-w-5xl px-4 py-8 sm:px-6 md:py-12 lg:py-16">
			<div className="flex w-full flex-col items-center space-y-4 text-center sm:space-y-6">
				<h2 className="text-primary-foreground font-grotesk text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
					Experience the fusion of{" "}
					<Highlighter action="highlight" color="#06d6a0">
						<p className="text-primary-foreground inline">Technology</p>
					</Highlighter>{" "}
					&{" "}
					<Highlighter action="underline" color="#ff0054">
						<p className="text-primary-foreground inline">Culture</p>
					</Highlighter>
					.
				</h2>

				<p className="font-mono-two text-muted-foreground max-w-2xl text-base sm:text-lg">
					The official Computer Science Department committee of RBU, bringing together innovation, learning,
					and unforgettable events for our student community.
				</p>

				<div className="mt-4 flex w-full flex-col justify-center gap-4 font-sans sm:flex-row sm:space-x-4">
					<div className="group relative">
						<div className="relative z-30 transition-transform duration-100 group-active:translate-x-0.5 group-active:translate-y-0.5 sm:group-active:translate-y-1">
							<CustomLink
								href="/people"
								variant="default"
								size="xxl"
								className="w-full bg-[#222222] text-lg text-white hover:bg-[#333333] sm:w-auto"
							>
								Meet the Team
							</CustomLink>
						</div>
						<div className="absolute top-0.5 left-0.5 z-10 h-full w-full rounded-md bg-[#cfc9b3] transition-all duration-100 sm:top-1" />
					</div>
					<div className="group relative">
						<div className="relative z-30 transition-transform duration-100 group-active:translate-x-0.5 group-active:translate-y-0.5 sm:group-active:translate-y-1">
							<CustomLink
								href="/events"
								variant="default"
								size="xxl"
								className="w-full bg-[#39c2ff] text-lg text-white hover:bg-[#06a8f1] sm:w-auto"
							>
								Explore Events
							</CustomLink>
						</div>
						<div className="absolute top-0.5 left-0.5 z-10 h-full w-full rounded-md bg-[#cfc9b3] transition-all duration-100 sm:top-1" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
