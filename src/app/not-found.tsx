import { Highlighter } from "@/components/magicui/highlighter";
import { CustomLink } from "@/components/ui/link";

export default function NotFound() {
	return (
		<div className="not-found-container py-8">
			<div className="flex w-full flex-col items-center space-y-8 text-center">
				<h1 className="text-foreground font-grotesk text-9xl font-bold">
					<Highlighter action="highlight" color="#ffdf2b">
						404
					</Highlighter>
				</h1>

				<h2 className="text-foreground font-grotesk text-4xl font-semibold">
					Page not{" "}
					<Highlighter action="highlight" color="#ffdf2b">
						found
					</Highlighter>
				</h2>

				<p className="font-mono-two text-muted-foreground text-lg">
					Oops! The page you&apos;re looking for seems to have wandered off into the digital abyss. Let&apos;s
					get you back to exploring the fusion of Technology & Culture.
				</p>

				<div className="mt-4 flex w-full flex-col justify-center gap-4 font-sans sm:flex-row sm:space-x-4">
					<div className="group relative">
						<div className="relative z-30 transition-transform duration-100 group-active:translate-x-0.5 group-active:translate-y-0.5 sm:group-active:translate-y-1">
							<CustomLink href="/" variant="default" size="lg" className="w-full sm:w-auto text-white">
								Return Home
							</CustomLink>
						</div>
						<div className="absolute top-0.5 left-0.5 z-10 h-full w-full rounded-sm bg-[#cfc9b3] transition-all duration-100 sm:top-1" />
					</div>
					<div className="group relative">
						<div className="relative z-30 transition-transform duration-100 group-active:translate-x-0.5 group-active:translate-y-0.5 sm:group-active:translate-y-1">
							<CustomLink
								href="/events"
								variant="default"
								size="lg"
								className="w-full bg-[#ff7b00] hover:bg-[#f25c54] sm:w-auto"
							>
								Explore Events
							</CustomLink>
						</div>
						<div className="absolute top-0.5 left-0.5 z-10 h-full w-full rounded-sm bg-[#cfc9b3] transition-all duration-100 sm:top-1" />
					</div>
				</div>
			</div>
		</div>
	);
}
