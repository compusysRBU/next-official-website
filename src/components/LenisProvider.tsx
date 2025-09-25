"use client";
import Lenis from "@studio-freight/lenis";
import { ReactNode, useEffect } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 2, // scroll duration
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing
			smoothWheel: true,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
