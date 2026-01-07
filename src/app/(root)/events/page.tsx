import ExpandingGallery from "@/components/events/ExpandingGalary";
import SpreadImages from "@/components/events/SpreadImages";
import { EventDetailSections } from "@/components/events/EventDetailSections";
import { eventItems } from "@/lib/event-data";
import ImageTrail from "@/components/ImageTrail";
import ScrollReveal from "@/components/animations/ScrollReveal";
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
			<section className="relative">
				<ExpandingGallery images={images} />
				<div className="pointer-events-none absolute top-1/2 left-1/2 z-20 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 px-4 sm:px-8">
					{/* <Image
						src="/assets/manzar/manzar-event-image.svg"
						alt="CSE Logo"
						width={500}
						height={150}
						className="h-auto w-full"
					/> */}
					<p className="mb-8 rotate-12 pr-4 text-right text-xl font-bold text-yellow-400 sm:pr-12 sm:text-2xl">
						coming soon...
					</p>
					<h1 className="font-serif text-4xl font-extrabold text-blue-500 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
						Polaris &apos; 26
					</h1>
				</div>
			</section>

			<main className="mx-auto w-full max-w-7xl px-4 py-16 space-y-24">
							{/* <ScrollReveal
				as="section"
				className="mx-auto w-full max-w-7xl px-4 py-16 space-y-24"
			> */}

				<section className="flex justify-around items-center md:flex-row flex-col mx-auto">
					<div className="space-y-4 min-w-1/2">
						<h2 className="font-sugar text-5xl leading-tight text-zinc-950 sm:text-6xl">
							Our <span className="font-chewy">2026</span>
						</h2>
						<h3 className="font-sugar flex justify-start items-center relative text-3xl leading-tight sm:text-4xl md:text-5xl">
							<ScrollReveal
							as ="div"
							delay={0.1}>
								
							<div className="relative inline-block max-w-fit">
								<span className="relative z-20 inline-block -rotate-2 rounded-sm border-2 border-zinc-950 bg-[#f3a20f] px-3 py-1 text-white sm:px-4 sm:py-2">
									Event
								</span>
								<div className="absolute left-0 top-1 z-10 h-full w-full -rotate-2 rounded-sm bg-zinc-800/20 sm:top-2" />
							</div>
							</ScrollReveal>
							<ScrollReveal
							as ="div"
							delay={0.2}>

								
							<div className="relative ml-4 inline-block max-w-fit sm:-mt-4 md:-mt-5">
								<span className="relative z-20 inline-block rotate-2 rounded-sm border-2 border-zinc-950 bg-[#f97028] px-3 py-1 text-white sm:px-4 sm:py-2">
									Lineup
								</span>
								<div className="absolute left-0 top-1 z-10 h-full w-full rotate-2 rounded-sm bg-zinc-800/20 sm:top-2" />
							</div>
							</ScrollReveal>

						</h3>
						<div className="font-grotesk mt-6 px-4 space-y-3 text-lg text-zinc-900">
							<p>
								Yep, we&apos;ve got <span className="font-bold">amazing events</span> lined up for the year
								— from flagship fests to cosy in-house sessions.
							</p>
							<p>
								This page will become your <span className="font-bold">one-stop guide</span> for what&apos;s happening around CSE, plus a throwback to our favourite memories.
							</p>
							<p>(More events and details to be announced!)</p>
						</div>
						<div className="relative mt-4 max-w-fit">
							<ScrollReveal
							as ="div"
							delay={0.3}>

							<div className="font-mono-two relative z-20 rounded-full border-2 border-zinc-950 bg-[#f489a3] px-6 py-2 text-sm font-semibold text-zinc-900">
								Scroll to highlights
							</div>
							<div className="absolute left-1 top-1 z-10 h-full w-full rounded-full bg-[#cfc9b3]" />
							</ScrollReveal>
						</div>
					</div>
	                <ScrollReveal
							as ="div"
							delay={0.1}
							className="flex h-full min-w-1/2 items-center justify-center lg:col-span-2"
							>

					<div className="flex h-full w-full items-center justify-center lg:col-span-2">
						<div className="group relative w-full max-w-xl">
							<div className="absolute -right-3 -bottom-3 z-0 h-full w-full rounded-3xl bg-[#cfc9b3]" />
							<div className="relative z-10 rounded-3xl border-2 border-zinc-950 bg-[#ffb703] p-8 shadow-[rgba(20,20,22,0.25)_0_0.75em_0_0] transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1">
								<p className="font-mono-two inline-flex rounded-full border border-zinc-950 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900">
									Coming soon
								</p>
								<h3 className="mt-4 font-sugar text-4xl leading-tight text-zinc-950 sm:text-5xl">
									Polaris &apos; <span className="font-chewy">26</span>
								</h3>
								<p className="mt-4 font-grotesk text-base text-zinc-900 sm:text-lg">
									Our flagship CSE fest packed with <span className="font-bold">tech talks</span>, <span className="font-bold">hackathons</span>, cultural nights, and lots of campus chaos — in the best way possible.
								</p>
								<p className="mt-3 font-grotesk text-sm text-zinc-800 sm:text-base">
									Dates, themes, and speaker lineup will drop here first. Stay tuned!
								</p>
								<div className="mt-6 flex flex-wrap gap-2">
									<span className="font-mono-two rounded-full bg-[#f97028] px-3 py-1 text-xs font-semibold text-white">
										Flagship fest
									</span>
									<span className="font-mono-two rounded-full bg-[#f25c54] px-3 py-1 text-xs font-semibold text-white">
										Tech × Culture
									</span>
									<span className="font-mono-two rounded-full bg-[#219ebc] px-3 py-1 text-xs font-semibold text-white">
										2026 edition
									</span>
								</div>
							</div>
						</div>
					</div>
					</ScrollReveal>
				</section>
			{/* </ScrollReveal> */}

				<section className="relative" id="highlights">
					<div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
						<h2 className="font-sugar flex items-center gap-2 text-center text-4xl leading-none sm:text-5xl md:text-6xl">
							<span className="text-zinc-800">Past</span>
							<span className="relative inline-block max-w-fit">
								<span className="relative z-20 inline-block -rotate-2 rounded-sm border-2 border-zinc-950 bg-[#f3a20f] px-3 py-1 text-white sm:px-4 sm:py-2">
									Events
								</span>
								<span className="absolute left-0 top-1 z-10 h-full w-full -rotate-2 rounded-sm bg-zinc-800/20" />
							</span>
						</h2>
					</div>
					<SpreadImages
						images={eventItems.map((event) => ({
							src: event.image,
							alt: event.title,
						}))}
					/>
				</section>

				<section className="mt-24">
					<EventDetailSections />
				</section>

				<section className="mb-16 text-center">
					<p className="font-grotesk text-base text-gray-600 sm:text-lg">
						That&apos;s a peek into what we&apos;ve done so far. More workshops, socials, and surprise events for 2025 will keep dropping here — stay tuned!
					</p>
				</section>
			</main>
			{/* <div className="relative h-[500px]">
				<ImageTrail

					items={[
						"https://picsum.photos/id/287/300/300",
						"https://picsum.photos/id/1001/300/300",
						"https://picsum.photos/id/1025/300/300",
						"https://picsum.photos/id/1026/300/300",
						"https://picsum.photos/id/1027/300/300",
						"https://picsum.photos/id/1028/300/300",
						"https://picsum.photos/id/1029/300/300",
						"https://picsum.photos/id/1030/300/300",
						// ...
					]}
					variant={1}
				/>
			</div> */}
		</div>
	);
}
