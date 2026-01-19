"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import sun from "../../public/sun.svg";
import eye from "../../public/assets/eye.png";
import { motion, scale } from "framer-motion";
const currentYear = new Date().getFullYear();

const Footer = () => {
    const svgWrapperRef = useRef<HTMLDivElement | null>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const el = svgWrapperRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const radius = 560; // px
        const maxOffset = 24; // px

        if (distance < radius && distance > 0) {
            const strength = (radius - distance) / radius; // 0..1
            const angle = Math.atan2(dy, dx);

            // Move slightly TOWARD the cursor direction
            const moveX = Math.cos(angle) * strength * maxOffset;
            const moveY = Math.sin(angle) * strength * maxOffset;

            setOffset({ x: moveX, y: moveY });
        } else if (offset.x !== 0 || offset.y !== 0) {
            setOffset({ x: 0, y: 0 });
        }
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
        if (offset.x !== 0 || offset.y !== 0) {
            setOffset({ x: 0, y: 0 });
        }
    };

    return (
        <footer className=" border-t-2 border-zinc-800 rounded-t-3xl text-zinc-900 ">

            <div
                className="flex flex-col justify-center items-center relative overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between md:py-12">
                    <div className="space-y-3 md:max-w-sm">
                        <div className="logo-container flex items-center gap-2">
                            <Link href="/">
                                <Image src="/cselogo.svg" alt="Logo" width={48} height={48} className="rounded-full" />
                            </Link>
                        </div>
                        <h3 className="font-sugar text-3xl leading-tight text-zinc-950 sm:text-4xl">
                            Where CSE finds its crowd
                        </h3>
                        <p className="font-grotesk text-sm text-zinc-700 sm:text-base">
                            Official student committee of the Computer Science &amp; Engineering
                            department at RBU, curating events, opportunities, and experiences for
                            our community.
                        </p>
                    </div>

                    <div className="flex w-full flex-col items-center justify-around gap-8 text-sm md:flex-row md:w-auto md:gap-14 py-5 px-4">
                        <div className="space-y-3 min-w-60 flex flex-col justify-center items-center">
                            <h4 className="font-grotesk text-base font-semibold tracking-[0.18em] text-gray-800 uppercase">
                                Quick Links
                            </h4>
                            <ul className="font-mont space-y-1.5 text-zinc-800 flex flex-col items-center justify-center">
                                <li>
                                    <Link href="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/people" className="hover:underline">
                                        People
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/events" className="hover:underline">
                                        Events
                                    </Link>
                                </li>
                                {/* <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li> */}
                            </ul>
                        </div>



                        <div className="space-y-3 flex flex-col gap-2 justify-center items-center pt-5 px-32 md:px-0 z-10">
                            <h4 className="font-grotesk text-base font-semibold tracking-[0.18em] text-gray-800 uppercase">
                                Stay Connected
                            </h4>
                            <p className="font-mono-two text-xs text-zinc-700 px-2 md:px-0 text-center md:text-start">
                                Follow our official channels for announcements, event updates, and
                                behind-the-scenes from the CSE department.
                            </p>
                            <div className="relative flex flex-wrap w-96 justify-center md:justify-start mt-4 items-center gap-3 text-xs text-zinc-800">
                                <div className="relative">
                                    <div className="absolute top-0.5 left-0 z-0 h-full w-full  rounded-sm bg-zinc-800/20 sm:top-1 sm:-rotate-2 lg:top-2"></div>
                                    <Link className="relative rounded-sm border border-zinc-900 hover:bg-amber-400 bg-amber-500 px-4 py-2 font-grotesk text-white font-extrabold text-lg hover:border-amber-700 transition-all duration-300 hover:text-amber-700" href="https://www.instagram.com/cse.rbu/" target="_blank" rel="noopener noreferrer">
                                        Instagram
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="absolute top-0.5 left-0 z-0 h-full w-full  rounded-sm bg-zinc-800/20 sm:top-1 sm:-rotate-2 lg:top-2"></div>
                                    <Link href={"https://www.linkedin.com/company/compusys-student-society-rcoem-cse/about/"} target="_blank" rel="noopener noreferrer" className="relative rounded-sm border border-zinc-900 hover:bg-amber-400 bg-amber-500 px-4 py-2 font-grotesk text-white font-extrabold text-lg hover:border-amber-700 transition-all duration-300 hover:text-amber-700">
                                        LinkedIn
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="absolute top-0.5 left-0 z-0 h-full w-full  rounded-sm bg-zinc-800/20 sm:top-1 sm:-rotate-2 lg:top-2"></div>
                                    <Link href="mailto:compusysrbu@gmail.com" className="relative rounded-sm border border-zinc-900 hover:bg-amber-400 bg-amber-500 px-4 py-2 font-grotesk text-white font-extrabold text-lg hover:border-amber-700 transition-all duration-300 hover:text-amber-700">
                                        Email
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>


                </div>
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-zinc-700 sm:flex-row sm:px-6 overflow-hidden">
                    <p className="font-mono-two">
                        {currentYear} Compusys, CSE Department, RBU.
                    </p>
                    <p className="font-mono-two text-[0.7rem] text-muted-foreground">
                        Built with care by the student committee.
                    </p>
                </div>

                <div className="group">
                    <div className="absolute -bottom-52 md:-bottom-44 left-0 right-0 overflow-hidden flex justify-center items-center h-96">
                        <motion.div
                            initial={{ scale: 0.6 }}
                            whileInView={{ scale: 1 }} className="animate-spin-slow">
                            <Image src={sun} alt="Sun" height={300} width={300} />
                        </motion.div>
                    </div>
                    <div className="absolute -bottom-32 left-0 right-0 overflow-hidden flex justify-center items-center h-96 pointer-events-none">
                        <div
                            ref={svgWrapperRef}
                            className="transition-transform duration-150 ease-out pointer-events-auto"
                            style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 20"
                                fill="none"
                                className="w-12 h-12 cursor-pointer"
                            >

                                <path
                                    d="M11.7105 1.98509C11.7105 3.08142 12.5992 3.97018 13.6956 3.97018C14.7919 3.97018 15.6807 3.08142 15.6807 1.98509C15.6807 0.888755 14.7919 0 13.6956 0C12.5992 0 11.7105 0.888755 11.7105 1.98509Z"
                                    fill="currentColor"
                                    className="transition-opacity duration-200 group-hover:opacity-0"
                                />

                                <path
                                    d="M3.48091e-05 2.97764C3.48091e-05 4.07398 0.88879 4.96273 1.98512 4.96273C3.08146 4.96273 3.97021 4.07398 3.97021 2.97764C3.97021 1.88131 3.08146 0.992554 1.98512 0.992554C0.88879 0.992554 3.48091e-05 1.88131 3.48091e-05 2.97764Z"
                                    fill="currentColor"
                                />

                                <path
                                    d="M10.5 2L14.5 1.49999"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                />

                                <path
                                    d="M4.36526 10.0526C5.48807 11.3236 7.37792 12.4373 8.99134 12.3823C10.3455 12.3362 11.3858 12.1855 12.582 11.4026C13.4381 10.8424 13.9967 10.0329 14.7406 8.66282"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    className="transition-opacity duration-200 "
                                />

                                {/* <path 
    d="M11.8921 18C5.9557 19.2392 4.66149 14.9968 3.5863 11.9479C3.37455 11.3475 3.80655 10.6869 4.44285 10.6652C9.15161 10.5051 11.2843 10.3509 14.8793 8.66061C15.4922 8.37244 16.2307 8.80754 16.2719 9.48354C16.4616 12.6034 16.766 16.6483 11.8921 18Z"
    fill="var(--color-light, transparent)"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
  /> */}

                                {/* <path 
    d="M4.5 14C9.24535 14.5931 13.9652 13.5983 16 12"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
  /> */}

                            </svg>

                        </div>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
