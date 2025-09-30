/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import Magnet from "../Magnet";

const MorphName = ({ role, name, id }: { role: string; name: string; id: string }) => {
	const [text, setText] = useState(name);
	const [isRole, setIsRole] = useState(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		if (timerRef.current) clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			setText(role);
			setIsRole(true);
		}, 0);
	};

	const handleMouseLeave = () => {
		if (timerRef.current) clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			setText(name);
			setIsRole(false);
		}, 100);
	};

	useEffect(() => {
		const eventId = document.getElementById(id);
		if (!eventId) return;
		eventId.addEventListener("mouseenter", handleMouseEnter);
		eventId.addEventListener("mouseleave", handleMouseLeave);
		return () => {
			eventId.removeEventListener("mouseenter", handleMouseEnter);
			eventId.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [id]);

	return (
		<button
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`w-full ${isRole ? "scale-105 cursor-pointer" : "cursor-default"}`}
		>
			<Magnet
				padding={50}
				disabled={false}
				magnetStrength={10}
				triggerId={id}
				className="flex w-full items-center justify-center"
			>
				<p className="font-grotesk flex w-full items-center justify-center rounded-full border-2 border-zinc-950 bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-500 ease-out">
					{/* ${
          isRole
            ? "border-3 border-white bg-zinc-700 font-bold text-white shadow-md blur-[.55px]"
            : "scale-100 border-2 border-zinc-950 bg-white text-black shadow-none"
        } */}
					{text}
				</p>
			</Magnet>
		</button>
	);
};

export default MorphName;
