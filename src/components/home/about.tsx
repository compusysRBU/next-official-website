import { FiPlay } from "react-icons/fi";

const About = () => {
	return (
		<div className="mx-auto h-[20rem] w-full">
			<div className="flex w-full flex-col items-center space-y-4 rounded-4xl border-2 border-zinc-950 bg-[#222222] p-12 text-center sm:space-y-6">
				<div className="flex flex-col items-center justify-center space-y-10 p-6 text-zinc-100">
					<h2 className="font-sugar pointer-events-none flex flex-col items-center gap-1 text-center leading-none sm:gap-2">
						<span className="xs:text-[1.5rem] text-[1.5rem] whitespace-nowrap text-zinc-100 sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]">
							The Official Committee
						</span>
						<div className="relative inline-block max-w-fit -rotate-2">
							<span className="xs:text-[1.5rem] relative z-20 inline-block rounded-sm border-2 border-zinc-950 bg-[#f3a20f] px-2 py-1 text-[1.5rem] whitespace-nowrap text-white sm:px-3 sm:py-0 sm:text-[2.5rem] md:text-[2.5rem] lg:px-4 lg:text-[3rem] xl:text-[4rem]">
								CSE Department
							</span>
							<div className="absolute top-0.5 left-0 z-10 h-full w-full rounded-sm bg-zinc-800/20 sm:top-1 lg:top-2"></div>
						</div>
					</h2>
					<p className="font-mono-two mb-6 max-w-3xl text-center">
						Founded by passionate students and mentored by faculty, Compusys is the driving force behind the
						CS Department&apos;s cultural, technical, and sports events. From welcoming juniors at Manzar to
						hosting our flagship Polaris and CSPL, we are dedicated to building skills, friendships, and a
						legacy of creativity.
					</p>
					<a
						href="#highlights"
						className="font-grotesk flex items-center rounded-full border-2 border-zinc-950 bg-rose-50 px-4 py-2 font-semibold text-pink-950"
					>
						<span className="mr-2 text-pink-950">
							<FiPlay className="fill-pink-600" />
						</span>{" "}
						See Highlights
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
