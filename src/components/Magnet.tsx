"use client";

import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	/** Extra active area beyond the trigger element's bounds (px). Tune to your liking. */
	padding?: number;
	disabled?: boolean;
	/** Higher = smaller movement */
	magnetStrength?: number;
	activeTransition?: string;
	inactiveTransition?: string;
	wrapperClassName?: string;
	innerClassName?: string;
	triggerId?: string; // id of the card (parent) to use as center + bounds
}

const Magnet: React.FC<MagnetProps> = ({
	children,
	padding = 150,
	disabled = false,
	magnetStrength = 20,
	activeTransition = "transform 0.2s cubic-bezier(.2,.9,.3,1)",
	inactiveTransition = "transform 0.5s cubic-bezier(.2,.9,.3,1)",
	wrapperClassName = "",
	innerClassName = "",
	triggerId,
	...props
}) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

	const magnetRef = useRef<HTMLDivElement | null>(null);
	const triggerRef = useRef<HTMLElement | null>(null);
	const rafRef = useRef<number | null>(null);

	// Keep triggerRef up-to-date when triggerId changes (or on mount)
	useEffect(() => {
		triggerRef.current = triggerId ? (document.getElementById(triggerId) as HTMLElement | null) : null;
	}, [triggerId]);

	useEffect(() => {
		if (disabled) {
			setIsActive(false);
			setPosition({ x: 0, y: 0 });
			return;
		}

		const handleMouseMove = (e: MouseEvent) => {
			// throttle updates with rAF
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = requestAnimationFrame(() => {
				// prefer the trigger element's rect; fallback to magnet wrapper rect
				const triggerEl = triggerRef.current ?? magnetRef.current;
				if (!triggerEl || !magnetRef.current) return;

				const trigRect = triggerEl.getBoundingClientRect();

				// true center of the trigger element (card)
				const centerX = trigRect.left + trigRect.width / 2;
				const centerY = trigRect.top + trigRect.height / 2;

				// distance from pointer to the trigger center
				const distX = Math.abs(e.clientX - centerX);
				const distY = Math.abs(e.clientY - centerY);

				const thresholdX = trigRect.width / 2 + padding;
				const thresholdY = trigRect.height / 2 + padding;

				if (distX <= thresholdX && distY <= thresholdY) {
					setIsActive(true);
					// amount to move (direction preserved). Tweak magnetStrength to control magnitude.
					const offsetX = (e.clientX - centerX) / magnetStrength;
					const offsetY = (e.clientY - centerY) / magnetStrength;
					setPosition({ x: offsetX, y: offsetY });
				} else {
					setIsActive(false);
					setPosition({ x: 0, y: 0 });
				}
			});
		};

		const handleLeave = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			setIsActive(false);
			setPosition({ x: 0, y: 0 });
		};

		// update triggerRef on scroll/resize because bounding rect changes
		const updateTriggerRef = () => {
			triggerRef.current = triggerId ? (document.getElementById(triggerId) as HTMLElement | null) : null;
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleLeave);
		window.addEventListener("resize", updateTriggerRef);
		window.addEventListener("scroll", updateTriggerRef, true); // capture scrolls in ancestors

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleLeave);
			window.removeEventListener("resize", updateTriggerRef);
			window.removeEventListener("scroll", updateTriggerRef, true);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [padding, disabled, magnetStrength, triggerId]);

	const transitionStyle = isActive ? activeTransition : inactiveTransition;

	return (
		<div
			ref={magnetRef}
			className={wrapperClassName}
			style={{ position: "relative", display: "inline-block" }}
			{...props}
		>
			<div
				className={innerClassName}
				style={{
					transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
					transition: transitionStyle,
					willChange: "transform",
					transformOrigin: "center center",
					pointerEvents: "auto",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Magnet;
