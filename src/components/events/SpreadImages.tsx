
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SpreadImage {
    src: string;
    alt?: string;
}

interface SpreadImagesProps {
    images: SpreadImage[];
}

gsap.registerPlugin(ScrollTrigger);

export default function SpreadImages({ images }: SpreadImagesProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const g1Ref = useRef<HTMLDivElement | null>(null);
    const g2Ref = useRef<HTMLDivElement | null>(null);
    const g3Ref = useRef<HTMLDivElement | null>(null);
    const g4Ref = useRef<HTMLDivElement | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [badgeText, setBadgeText] = useState<string>("");
    const [badgePos, setBadgePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const imagesToUse = images.slice(0, 4);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // initial grid positions for 4 images around center
            gsap.set(g1Ref.current, { x: "-60px", y: "-80px", scale: 0.6, opacity: 1 }); // top-left
            gsap.set(g2Ref.current, { x: "-60px", y: "60px", scale: 0.6, opacity: 1 }); // bottom-left
            gsap.set(g3Ref.current, { x: "60px", y: "-80px", scale: 0.6, opacity: 1 }); // top-right
            gsap.set(g4Ref.current, { x: "60px", y: "60px", scale: 0.6, opacity: 1 }); // bottom-right

            const imageTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 30%",
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                },
            });

            const isMobile = window.innerWidth < 768;

            // spread them out further on scroll
            imageTl
                .to(g1Ref.current, {
                    x: isMobile ? "-150px" : "-300px",
                    y: isMobile ? "-100px" : "-200px",
                    scale: isMobile ? 0.8 : 1,
                    opacity: 1,
                    rotation: -3,
                    duration: 1,
                    ease: "power2.out",
                })
                .to(
                    g2Ref.current,
                    {
                        x: isMobile ? "-150px" : "-300px",
                        y: isMobile ? "100px" : "200px",
                        scale: isMobile ? 0.8 : 1,
                        opacity: 1,
                        rotation: 3,
                        duration: 1,
                        ease: "power2.out",
                    },
                    0.1,
                )
                .to(
                    g3Ref.current,
                    {
                        x: isMobile ? "150px" : "300px",
                        y: isMobile ? "-100px" : "-200px",
                        scale: isMobile ? 0.8 : 1,
                        opacity: 1,
                        rotation: 3,
                        duration: 1,
                        ease: "power2.out",
                    },
                    0.2,
                )
                .to(
                    g4Ref.current,
                    {
                        x: isMobile ? "150px" : "300px",
                        y: isMobile ? "100px" : "200px",
                        scale: isMobile ? 0.8 : 1,
                        opacity: 1,
                        rotation: -3,
                        duration: 1,
                        ease: "power2.out",
                    },
                    0.3,
                );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative z-20 flex min-h-screen w-full items-center justify-center py-24"
        >
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute left-1/2 top-1/2 h-0 w-0" />

                {/* G1 - top-left */}
                {imagesToUse[0] && (
                    <div
                        ref={g1Ref}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        onMouseEnter={() => {
                            setHoveredIndex(0);
                            setBadgeText(imagesToUse[0].alt ?? "Event 1");
                        }}
                        onMouseMove={(event) => {
                            if (!containerRef.current) return;
                            const rect = containerRef.current.getBoundingClientRect();
                            setBadgePos({
                                x: event.clientX - rect.left,
                                y: event.clientY - rect.top - 300,
                            });
                        }}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={imagesToUse[0].src}
                            alt={imagesToUse[0].alt ?? "Event 1"}
                            width={420}
                            height={320}
                            sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 220px"
                            className="h-44 w-32 cursor-pointer rounded-lg object-cover shadow-2xl sm:h-56 sm:w-40 md:h-64 md:w-48 lg:h-72 lg:w-96"
                            priority
                        />
                    </div>
                )}

                {/* G2 - bottom-left */}
                {imagesToUse[1] && (
                    <div
                        ref={g2Ref}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        onMouseEnter={() => {
                            setHoveredIndex(1);
                            setBadgeText(imagesToUse[1].alt ?? "Event 2");
                        }}
                        onMouseMove={(event) => {
                            if (!containerRef.current) return;
                            const rect = containerRef.current.getBoundingClientRect();
                            setBadgePos({
                                x: event.clientX - rect.left,
                                y: event.clientY - rect.top - 300,
                            });
                        }}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={imagesToUse[1].src}
                            alt={imagesToUse[1].alt ?? "Event 2"}
                            width={420}
                            height={320}
                            sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 220px"
                            className="h-44 w-32 cursor-pointer rounded-lg object-cover shadow-2xl sm:h-56 sm:w-40 md:h-64 md:w-48 lg:h-72 lg:w-96"
                        />
                    </div>
                )}

                {/* G3 - top-right */}
                {imagesToUse[2] && (
                    <div
                        ref={g3Ref}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        onMouseEnter={() => {
                            setHoveredIndex(2);
                            setBadgeText(imagesToUse[2].alt ?? "Event 3");
                        }}
                        onMouseMove={(event) => {
                            if (!containerRef.current) return;
                            const rect = containerRef.current.getBoundingClientRect();
                            setBadgePos({
                                x: event.clientX - rect.left,
                                y: event.clientY - rect.top - 300,
                            });
                        }}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={imagesToUse[2].src}
                            alt={imagesToUse[2].alt ?? "Event 3"}
                            width={420}
                            height={320}
                            sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 220px"
                            className="h-44 w-32 cursor-pointer rounded-lg object-cover shadow-2xl sm:h-56 sm:w-40 md:h-64 md:w-48 lg:h-72 lg:w-96"
                        />
                    </div>
                )}

                {/* G4 - bottom-right */}
                {imagesToUse[3] && (
                    <div
                        ref={g4Ref}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        onMouseEnter={() => {
                            setHoveredIndex(3);
                            setBadgeText(imagesToUse[3].alt ?? "Event 4");
                        }}
                        onMouseMove={(event) => {
                            if (!containerRef.current) return;
                            const rect = containerRef.current.getBoundingClientRect();
                            setBadgePos({
                                x: event.clientX - rect.left,
                                y: event.clientY - rect.top - 300,
                            });
                        }}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={imagesToUse[3].src}
                            alt={imagesToUse[3].alt ?? "Event 4"}
                            width={420}
                            height={320}
                            sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 220px"
                            className="h-44 w-32 cursor-pointer rounded-lg object-cover shadow-2xl sm:h-56 sm:w-40 md:h-64 md:w-48 lg:h-72 lg:w-96"
                        />
                    </div>
                )}

                {hoveredIndex !== null && (
                    <div
                        className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-full rounded-full border-2 border-zinc-950 bg-[#ffb703] px-4 py-1 font-mono-two text-xs font-semibold text-zinc-900 shadow-md sm:text-sm"
                        style={{ left: badgePos.x, top: badgePos.y }}
                    >
                        {badgeText}
                    </div>
                )}
            </div>
        </div>
    );
}

