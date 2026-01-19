"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { eventItems } from "@/lib/event-data";
import DraggableSticker from "../DraggableSticker";
const orderedIds = ["teachers-day", "polaris", "cspl", "manzar"] as const;

const accentMap: Record<string, { bg: string; badge: string }> = {
    "teachers-day": { bg: "bg-[#ffe5b9]", badge: "bg-[#f97316]" },
    polaris: { bg: "bg-[#e0f2fe]", badge: "bg-[#0284c7]" },
    cspl: { bg: "bg-[#fee2e2]", badge: "bg-[#b91c1c]" },
    manzar: { bg: "bg-[#ecfccb]", badge: "bg-[#65a30d]" },
};

const copy: Record<string, { tag: string; blurb: string; highlights: string[] }> = {
    "teachers-day": {
        tag: "Most recent bash",
        blurb:
            "A wholesome Teachers' Day celebration filled with gratitude, fun games, and heartfelt surprises planned by the core and juniors.",
        highlights: [
            "Thank-you wall with handwritten notes",
            "Fun games and mini performances for faculty",
            "Photo corner and quick recap of the year",
        ],
    },
    polaris: {
        tag: "Flagship techno-cultural fest",
        blurb:
            "Our biggest CSE-only festival — a 2–3 day chaos of tech, culture, nights full of energy, and a whole lot of CompUSys madness.",
        highlights: [
            "Hackathons, coding duels and design sprints",
            "Major speakers and alumni sessions",
            "DJ night, performances and after-movie",
        ],
    },
    cspl: {
        tag: "Cricket + CSE vibes",
        blurb:
            "The Computer Science Premier League where batches form squads, fight it out on the ground and off it with live commentary and memes.",
        highlights: [
            "Batch-wise teams and jersey reveals",
            "Scoreboard, stats and fantasy banter",
            "Finals evening with crowd chants",
        ],
    },
    manzar: {
        tag: "Welcome to CSE",
        blurb:
            "Our fresher welcome that sets the tone for the year — icebreakers, stage acts, and the first big memory for the new batch.",
        highlights: [
            "Intro games and buddy activities",
            "Performances by seniors and juniors",
            "Photo ops and closing DJ / open floor",
        ],
    },
};

type EventSticker = {
    id: string;
    src: string;
    alt: string;
    initialClassName: string;
};

const stickersByEvent: Record<string, EventSticker[]> = {
    "teachers-day": [
        {
            id: "t1",
            src: "/assets/stickers/home-sticker.svg",
            alt: "Apple sticker",
            initialClassName: "top-3 right-3",
        },
        {
            id: "t2",
            src: "/assets/stickers/teach.png",
            alt: "Chalk sticker",
            initialClassName: "top-9/11 left-4",
        },
    ],
    polaris: [
        {
            id: "p1",

            src: "/assets/stickers/pol1.png",
            alt: "Music sticker",
            initialClassName: "top-3 right-5",
        },
        {
            id: "p2",
            src: "/assets/stickers/music.png",
            alt: "Code sticker",
            initialClassName: "top-3/4 left-20",
        },
    ],
    cspl: [
        {
            id: "c1",
            src: "/assets/stickers/ball.png",
            alt: "Cricket ball sticker",
            initialClassName: "top-9/11 left-6",
        },
        {
            id: "c2",
            src: "/assets/stickers/bat.png",
            alt: "Trophy sticker",
            initialClassName: "bottom-4 right-5",
        },
    ],
    manzar: [
        {
            id: "m1",
            src: "/assets/stickers/trophy.png",
            alt: "Party sticker",
            initialClassName: "top-3 right-4",
        },
        {
            id: "m2",
            src: "/assets/stickers/sport.png",
            alt: "Camera sticker",
            initialClassName: "top-9/11 left-5",
        },
    ],
};

export function EventDetailSections() {
    const orderedEvents = orderedIds
        .map((id) => eventItems.find((e) => e.id === id))
        .filter((e): e is typeof eventItems[number] => Boolean(e));

    return (
        <div className="space-y-24 pb-24">
            {orderedEvents.map((event, index) => {
                const isReversed = index % 2 === 1;
                const accent = accentMap[event.id] ?? accentMap["polaris"];
                const meta = copy[event.id] ?? copy["polaris"];
                const stickers = stickersByEvent[event.id] ?? [];

                return (
                    <motion.section
                        key={event.id}
                        className={`event-detail-section relative grid grid-cols-1 items-center gap-10 rounded-3xl border-2 border-zinc-950 px-6 py-10 shadow-[rgba(20,20,22,0.18)_0_0.75em_0_0] transition-transform duration-500 ${isReversed ? "hover:-translate-y-2 hover:rotate-1" : "hover:translate-y-2 hover:-rotate-1"} md:grid-cols-2 ${accent.bg}`}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className={`${isReversed ? "md:order-2" : ""} space-y-4`}>
                            <span className={`inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 px-3 py-1 text-xs font-mono-two font-semibold uppercase tracking-[0.18em] text-white ${accent.badge}`}>
                                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                <span>{meta.tag}</span>
                                <span className="hidden text-[0.65rem] opacity-80 sm:inline">{event.date}</span>
                            </span>
                            <h3 className="font-sugar text-4xl leading-tight text-zinc-950 sm:text-5xl">
                                {event.title}
                            </h3>
                            <p className="font-grotesk text-base text-zinc-900 sm:text-lg">
                                {meta.blurb}
                            </p>
                            <ul className="font-grotesk mt-2 space-y-1 text-sm text-zinc-800 sm:text-base">
                                {meta.highlights.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`${isReversed ? "md:order-1" : ""} flex justify-center`}>
                            <motion.div
                                className="relative w-full max-w-md"
                                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "0px 0px -140px 0px" }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.18 + index * 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <div className="absolute -right-3 -bottom-3 h-full w-full rounded-3xl bg-zinc-900/10" />
                                <div className="event-detail-image relative overflow-hidden rounded-3xl border-2 border-zinc-950 bg-zinc-900/5">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={640}
                                        height={420}
                                        className="h-64 w-full object-cover sm:h-72 md:h-80 lg:h-96"
                                    />
                                </div>
                            </motion.div>
                        </div>
                        {stickers.map((s) => (
                            <DraggableSticker
                                key={s.id}
                                imageSrc={s.src}
                                alt={s.alt}
                                initialClassName={s.initialClassName}
                            />
                        ))}
                    </motion.section>
                );
            })}
        </div>
    );
}
