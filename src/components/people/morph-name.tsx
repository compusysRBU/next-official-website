// "use client";
// import { useState } from "react";
// import Magnet from "../Magnet";

// const MorphName = ({ role, name }: { role: string; name: string }) => {
// 	const [text, setText] = useState(name);
// 	return (
// 		<button onMouseEnter={() => setText(role)} onMouseLeave={() => setText(name)} className="w-full">
// 			<Magnet
// 				padding={50}
// 				disabled={false}
// 				magnetStrength={10}
// 				className="flex w-full items-center justify-center"
// 			>
// 				<p className="font-grotesk flex w-full items-center justify-center rounded-full border-2 border-zinc-950 bg-white px-4 py-2 text-sm font-semibold">
// 					{text}
// 				</p>
// 			</Magnet>
// 		</button>
// 	);
// };

// export default MorphName;

"use client";
import { useRef, useState } from "react";
import Magnet from "../Magnet";

const MorphName = ({ role, name }: { role: string; name: string }) => {
	const [text, setText] = useState(name);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		// Clear any existing timeout
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		// Set a new timeout for the enter delay
		timerRef.current = setTimeout(() => {
			setText(role);
		}, 0); // 200ms delay on enter
	};

	const handleMouseLeave = () => {
		// Clear any existing timeout
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		// Set a new timeout for the leave delay
		timerRef.current = setTimeout(() => {
			setText(name);
		}, 600); // 300ms delay on leave
	};

	return (
		<button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full">
			<Magnet
				padding={50}
				disabled={false}
				magnetStrength={10}
				className="flex w-full items-center justify-center"
			>
				<p className="font-grotesk flex w-full items-center justify-center rounded-full border-2 border-zinc-950 bg-white px-4 py-2 text-sm font-semibold">
					{text}
				</p>
			</Magnet>
		</button>
	);
};

export default MorphName;
