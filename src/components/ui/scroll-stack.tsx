// "use client";

// import React, { ReactNode } from "react";

// export interface ScrollStackItemProps {
// 	itemClassName?: string;
// 	children: ReactNode;
// }

// export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = "" }) => (
// 	<div className={`scroll-stack-card border-2 border-zinc-800 bg-white text-zinc-800 ${itemClassName}`.trim()}>
// 		{children}
// 	</div>
// );

// interface ScrollStackProps {
// 	className?: string;
// 	children: ReactNode;
// 	cardHeight?: string;
// 	topOffset?: string;
// }

// const ScrollStack: React.FC<ScrollStackProps> = ({
// 	children,
// 	className = "",
// 	cardHeight = "60vh",
// 	topOffset = "0",
// }) => {
// 	return (
// 		<div className={`scroll-stack-container ${className}`.trim()}>
// 			{React.Children.map(children, (child, index) => (
// 				<div
// 					key={index}
// 					className="scroll-stack-page"
// 					style={{
// 						height: cardHeight,
// 						top: topOffset,
// 					}}
// 				>
// 					{child}
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default ScrollStack;

"use client";

import React, { ReactNode, useEffect, useState } from "react";

export interface ScrollStackItemProps {
	itemClassName?: string;
	children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = "" }) => (
	<div className={`scroll-stack-card border-2 border-zinc-800 bg-white text-zinc-800 ${itemClassName}`.trim()}>
		{children}
	</div>
);

interface ScrollStackProps {
	className?: string;
	children: ReactNode;
	cardHeight?: string;
	mobileCardHeight?: string;
	tabletCardHeight?: string;
	topOffset?: string;
	mobileTopOffset?: string;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
	children,
	className = "",
	cardHeight = "60vh",
	mobileCardHeight = "40vh", // New prop for mobile height
	tabletCardHeight = "50vh", // New prop for tablet height
	topOffset = "0",
	mobileTopOffset = "0", // New prop for mobile offset
}) => {
	const [currentHeight, setCurrentHeight] = useState(cardHeight);
	const [currentTopOffset, setCurrentTopOffset] = useState(topOffset);

	useEffect(() => {
		// Set initial values based on screen size
		handleResize();

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, [cardHeight, mobileCardHeight, tabletCardHeight, topOffset, mobileTopOffset]);

	const handleResize = () => {
		const width = window.innerWidth;

		if (width < 640) {
			// Mobile
			setCurrentHeight(mobileCardHeight);
			setCurrentTopOffset(mobileTopOffset);
		} else if (width < 1024) {
			// Tablet
			setCurrentHeight(tabletCardHeight);
			setCurrentTopOffset(topOffset);
		} else {
			// Desktop
			setCurrentHeight(cardHeight);
			setCurrentTopOffset(topOffset);
		}
	};

	return (
		<div className={`scroll-stack-container ${className}`.trim()}>
			{React.Children.map(children, (child, index) => (
				<div
					key={index}
					className="scroll-stack-page"
					style={{
						height: currentHeight,
						top: currentTopOffset,
					}}
				>
					{child}
				</div>
			))}
		</div>
	);
};

export default ScrollStack;
