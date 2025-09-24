import { CoHeadCard } from "@/components/people/co-head-card";
import { MemberCard } from "@/components/people/mem-card";
import { coheadColorPairs, coheads, colorPairs, members } from "@/lib/memberdata";

export default function PeoplePage() {
	return (
		<div className="mx-auto h-full w-full max-w-7xl px-4 py-12">
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{/* First row - Text in first column, first speaker card in columns 2 and 3 */}
				<div className="lg:col-span-1">
					<div className="space-y-4">
						<h1 className="font-sugar text-7xl leading-tight text-zinc-950">
							Our <span className="font-chewy">2025</span>
						</h1>
						<h2 className="font-sugar relative text-4xl leading-tight sm:text-5xl md:text-6xl">
							<div className="relative inline-block max-w-fit">
								<span className="relative z-20 inline-block -rotate-2 rounded-sm border-2 border-zinc-950 bg-[#f3a20f] px-3 py-1 text-white sm:px-4 sm:py-2">
									Core
								</span>
								<div className="absolute top-1 left-0 z-10 h-full w-full -rotate-2 rounded-sm bg-zinc-800/20 sm:top-2"></div>
							</div>
							<span className="-mt-3 inline-block rotate-1 rounded-sm border-2 border-zinc-950 bg-[#f97028] px-3 py-1 text-white sm:-mt-4 sm:px-4 sm:py-2 md:-mt-5">
								Committee
							</span>
						</h2>
						<div className="font-grotesk mt-6 space-y-3 text-lg">
							<p>
								Yep, we got <span className="font-bold">amazing leaders</span> for our core team. Plus
								some absolute <span className="font-bold">rockstars</span> that will be guiding CSE
								activities this year.
							</p>
							<p>(Junior committee members to be announced!)</p>
						</div>
						<div className="relative max-w-fit">
							<div className="font-mono-two relative z-20 mt-4 max-w-fit rounded-full border-2 border-zinc-950 bg-[#f489a3] px-6 py-2 font-semibold text-zinc-900">
								Scroll Down
							</div>
							<div className="absolute top-1 left-1 z-10 h-full w-full rounded-full bg-[#cfc9b3] px-6 py-2"></div>
						</div>
					</div>
				</div>

				{/* First keynote speaker in column 2 */}
				<div className="lg:col-span-1">
					<MemberCard
						name={members[0].name}
						role={members[0].role}
						backgroundColor="bg-[#ffb703]"
						nameTagColor="bg-[#fb8500]"
						imageUrl={members[0].image}
						instagramUrl={members[0].instagramUrl}
						linkedinUrl={members[0].linkedinUrl}
						className="mx-auto"
					/>
				</div>

				{/* Another featured speaker in column 3 */}
				<div className="lg:col-span-1">
					<MemberCard
						name={members[1].name}
						role={members[1].role}
						backgroundColor="bg-[#ff7b00]"
						nameTagColor="bg-[#f25c54]"
						imageUrl={members[1].image}
						instagramUrl={members[1].instagramUrl}
						linkedinUrl={members[1].linkedinUrl}
						className="mx-auto"
					/>
				</div>
			</div>

			{/* Rest of the speakers in a grid */}
			<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{/* Exclude the first two speakers that are already displayed above */}
				{members.slice(2).map((member, idx) => (
					<div key={`speaker-${idx}`} className={`w-full ${idx % 3 === 1 ? "mt-16" : ""}`}>
						<MemberCard
							name={member.name}
							role={member.role}
							backgroundColor={colorPairs[idx % colorPairs.length].bg}
							nameTagColor={colorPairs[idx % colorPairs.length].tag}
							imageUrl={member.image}
							instagramUrl={member.instagramUrl}
							linkedinUrl={member.linkedinUrl}
							className="mx-auto"
						/>
					</div>
				))}
			</div>

			{/* Last row, last column - Additional text section */}
			<div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2"></div> {/* Empty space */}
				<div className="relative lg:col-span-1">
					<div className="absolute -right-2 -bottom-2 z-0 h-full w-full rounded-md bg-[#cfc9b3]" />{" "}
					{/* Shadow */}
					<div className="font-grotesk relative rounded-md border-2 border-zinc-950 bg-[#ffb703] p-6">
						<h3 className="mb-4 text-2xl font-bold">
							Our <span className="font-sugar text-3xl">Technical</span> visionaries
						</h3>
						<p className="mb-2">
							Our <span className="font-bold">brilliant team</span> of tech enthusiasts. They're the ones
							who put the <span className="font-bold">C</span> in CSE and will be leading our department's
							innovations this year!
						</p>
					</div>
				</div>
			</div>

			<div className="space-y-4">
				{/* Co-Head Section Title */}
				<div className="mt-20 mb-10">
					<h2 className="font-sugar text-center text-5xl leading-tight text-zinc-950">
						Our <span className="font-sugar text-[#f97028]">Co-Heads</span>
					</h2>
					<p className="font-grotesk mt-4 text-center text-lg">
						Meet the amazing team that will be leading our department's various initiatives
					</p>
				</div>

				{/* Co-heads grid with description */}
				<div className="grid grid-cols-1 gap-8 max-lg:place-items-center lg:grid-cols-4">
					{/* Left side - Description text */}
					<div className="lg:col-span-1">
						<div className="sticky top-24 space-y-6">
							<div className="relative">
								<div className="absolute -right-2 -bottom-2 z-0 h-full w-full rounded-lg bg-zinc-800/20" />
								<div className="font-grotesk relative rounded-lg border-2 border-zinc-950 bg-[#f489a3] p-6">
									<h3 className="mb-4 text-2xl font-bold text-zinc-900">
										Department <span className="font-sugar text-3xl">Leaders</span>
									</h3>
									<p className="mb-4 text-zinc-900">
										Our dedicated <span className="font-bold">co-heads</span> who drive innovation
										and excellence across different domains of our CSE department.
									</p>
									<p className="text-sm text-zinc-700">
										Each bringing unique expertise and passion to make this year extraordinary!
									</p>
								</div>
							</div>

							<div className="relative">
								<div className="font-mono-two relative z-20 w-full rounded-full border-2 border-zinc-950 bg-[#ffb703] px-4 py-2 text-center text-sm font-semibold text-zinc-900">
									Connect with them!
								</div>
								<div className="absolute top-1 left-1 z-10 h-full w-full rounded-full bg-[#cfc9b3]"></div>
							</div>
						</div>
					</div>

					{/* Right side - Co-heads cards */}
					<div className="lg:col-span-3">
						<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
							{coheads.map((cohead, idx) => (
								<div key={`cohead-${idx}`} className={`w-full ${idx % 3 === 1 ? "md:mt-8" : ""}`}>
									<CoHeadCard
										name={cohead.name}
										role={cohead.role}
										imageUrl={cohead.image}
										backgroundColor={coheadColorPairs[idx % coheadColorPairs.length].bg}
										nameTagColor={coheadColorPairs[idx % coheadColorPairs.length].tag}
										instagramUrl={cohead.instagramUrl}
										linkedinUrl={cohead.linkedinUrl}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
