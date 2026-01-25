import { LogoCarouselBasic } from "@/components/ui/logo-carousel-demo";

const Chapters = () => {
    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-10 lg:gap-16 justify-center items-center mx-auto">
                <div className="space-y-6 flex flex-col items-center justify-center">
                    <p className="font-mono-two text-xs tracking-[0.25em] text-muted-foreground uppercase">
                        Student Chapters under Compusys
                    </p>
                    <h2 className="font-sugar text-4xl leading-tight text-zinc-950 sm:text-5xl md:text-6xl">
                        Honouring the
                        <span className="relative inline-block max-w-fit sm:ml-2">
                            <span className="relative z-20 text-3xl md:text-6xl inline-block rounded-sm border-2 border-zinc-950 bg-[#f3a20f] px-2 py-1 text-white sm:px-3 sm:py-1">
                                chapters that lead us
                            </span>
                            <span className="absolute left-1 top-1 z-10 h-full w-full rounded-sm bg-[#cfc9b3]" />
                        </span>
                    </h2>
                    <p className="font-grotesk max-w-2xl text-base md:text-lg text-zinc-700">
                        From coding communities to global tech clubs, these student
                        chapters work alongside Compusys to inspire learning, leadership,
                        and collaboration across the CSE department.
                    </p>
                    <p className="font-mono-two text-sm text-muted-foreground">
                        Here we proudly showcase the chapters that shape our culture.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute -right-3 -bottom-3 z-0 h-full w-full rounded-2xl bg-[#cfc9b3]" />
                    <div className="relative z-10">
                        <LogoCarouselBasic />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chapters;

