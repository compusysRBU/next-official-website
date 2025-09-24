"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Ham from "./ham";

// Hook to detect when route changes complete
function useRouteChange() {
	const pathname = usePathname();
	const [routeChanged, setRouteChanged] = useState(false);
	const prevPath = useRef(pathname);

	useEffect(() => {
		if (prevPath.current !== pathname) {
			setRouteChanged(true);
			prevPath.current = pathname;

			const timer = setTimeout(() => {
				setRouteChanged(false);
			}, 100);

			return () => clearTimeout(timer);
		}
	}, [pathname]);

	return routeChanged;
}

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [activeFadeItem, setActiveFadeItem] = useState<string | null>(null);
	const pathname = usePathname();
	const routeChanged = useRouteChange();

	const handleNavClick = (href: string) => {
		if (href === pathname) {
			setIsMenuOpen(false);
		}
		setActiveFadeItem(href); // trigger fade out
	};

	// Auto-close menu after route change
	useEffect(() => {
		if (routeChanged && isMenuOpen) {
			setIsMenuOpen(false);
		}
	}, [routeChanged, isMenuOpen]);

	// Detect mobile
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);
		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	// Prevent body scroll when menu is open
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	// Safety: close menu on pathname change
	useEffect(() => {
		if (isMenuOpen) {
			setIsMenuOpen(false);
		}
	}, [pathname]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		if (!isMenuOpen) {
			// menu just opened → reset faded items
			setActiveFadeItem(null);
		}
	};

	const navItems = [
		{ name: "HOME", href: "/" },
		{ name: "PEOPLE", href: "/people" },
		{ name: "EVENTS", href: "/events" },
		{ name: "CONTACT", href: "/contact" },
	];

	// Motion variants
	const overlayVariants = {
		desktop: {
			initial: { y: "-110%", rotate: -2 },
			animate: { y: 0, rotate: 0 },
			exit: { y: "-110%", rotate: -2 },
		},
		desktopSecond: {
			initial: { y: "110%", rotate: 2 },
			animate: { y: 0, rotate: 0 },
			exit: { y: "110%", rotate: 2 },
		},
		mobile: {
			initial: { x: "110%", rotate: 2 },
			animate: { x: 0, rotate: 0 },
			exit: { x: "110%", rotate: 2 },
		},
		mobileSecond: {
			initial: { x: "-110%", rotate: -2 },
			animate: { x: 0, rotate: 0 },
			exit: { x: "-110%", rotate: -2 },
		},
	};

	const transitionSettings = {
		type: "tween" as const,
		duration: 0.5,
		ease: "easeInOut" as const,
	};

	return (
		<>
			<header
				className={`bg-background relative w-full border-b-2 border-b-zinc-800 transition-opacity duration-300 ${
					isMenuOpen ? "pointer-events-none" : "opacity-100"
				}`}
				style={{ zIndex: 50 }}
			>
				<div className="container mx-auto px-4 md:px-8 lg:px-16">
					<nav className="relative flex items-center justify-between py-4">
						<div className="logo-container flex items-center gap-2">
							<Link href="/">
								<Image src="/cselogo.svg" alt="Logo" width={48} height={48} className="rounded-full" />
							</Link>
						</div>

						<div className="relative z-50">
							<Ham
								isOpen={isMenuOpen}
								onChange={(isOpen) => {
									setIsMenuOpen(isOpen);
									setActiveFadeItem(null);
								}}
							/>
						</div>
					</nav>
				</div>
			</header>

			{/* First animation layer */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="fixed inset-0 z-[100] rounded-b-2xl bg-zinc-800"
						initial={isMobile ? overlayVariants.mobileSecond.initial : overlayVariants.desktop.initial}
						animate={isMobile ? overlayVariants.mobileSecond.animate : overlayVariants.desktop.animate}
						exit={isMobile ? overlayVariants.mobileSecond.exit : overlayVariants.desktop.exit}
						style={{
							transformOrigin: isMobile ? "center left" : "center top",
							willChange: "transform",
						}}
						transition={transitionSettings}
					/>
				)}
			</AnimatePresence>

			{/* Overlay */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="fixed inset-0 z-[101]"
						style={{
							background: "#5356bf",
							transformOrigin: isMobile ? "center right" : "center bottom",
							willChange: "transform",
							clipPath:
								window.innerWidth >= 1200
									? "polygon(0% 0%, 35% 0%, 40% 15%, 55% 15%, 60% 0%, 100% 0%, 100% 100%, 0% 100%)"
									: window.innerWidth >= 600
										? "polygon(0% 0%, 35% 0%, 40% 10%, 55% 10%, 60% 0%, 100% 0%, 100% 100%, 0% 100%)"
										: "",
						}}
						initial={isMobile ? overlayVariants.mobile.initial : overlayVariants.desktopSecond.initial}
						animate={isMobile ? overlayVariants.mobile.animate : overlayVariants.desktopSecond.animate}
						exit={isMobile ? overlayVariants.mobile.exit : overlayVariants.desktopSecond.exit}
						transition={{
							...transitionSettings,
							duration: 0.7,
						}}
					>
						{/* Close Button */}
						<button
							onClick={toggleMenu}
							aria-label="Close menu"
							className="absolute top-6 right-8 z-[102] flex h-20 w-20 cursor-pointer items-center justify-center delay-200"
						>
							<span className="relative block h-16 w-16">
								<span className="absolute top-1/2 left-1/2 h-16 w-1 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zinc-50"></span>
								<span className="absolute top-1/2 left-1/2 h-16 w-1 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-zinc-50"></span>
							</span>
						</button>

						{/* Sections */}
						<div
							className={`absolute ${isMobile ? "top-0 left-0 flex h-full w-24 flex-col" : "top-0 left-0 flex h-full w-60"}`}
						>
							{isMobile ? (
								<>
									<div className="h-1/3 w-2/3 bg-[#8391d7]" />
									<div className="h-1/4 w-2/3 bg-[#e2dfd3]" />
									<div className="h-1/4 w-2/3 bg-[#d8a743]" />
									<div className="h-1/4 w-2/3 bg-[#b74e5d]" />
								</>
							) : (
								<>
									<div className="h-full w-1/4 bg-[#5356bf]" />
									<div className="h-full w-1/4 bg-[#e2dfd3]" />
									<div className="h-full w-1/4 bg-[#d8a743]" />
									<div className="h-full w-1/4 bg-[#b74e5d]" />
								</>
							)}
						</div>

						{/* Nav Items */}
						<div
							className={`font-mont flex h-full flex-col justify-center ${
								isMobile ? "pr-4 pl-32" : "pl-80"
							}`}
						>
							{navItems.map((item, index) => (
								<motion.div key={item.name} className="mb-4">
									<Link
										href={item.href}
										className={`block transition-all duration-300 ${
											pathname === item.href
												? "font-normal italic"
												: "font-bold hover:font-normal"
										} text-white`}
										style={{
											fontSize: isMobile
												? index === 1
													? "2.5rem"
													: "2rem"
												: index === 1
													? "4rem"
													: "3.5rem",
											lineHeight: "1.1",
											color: index === 1 ? "#f5f5dc" : "white",
										}}
										onClick={() => handleNavClick(item.href)}
									>
										<motion.span
											initial={{ opacity: 1 }}
											animate={{
												opacity: activeFadeItem ? 0 : 1,
											}}
											transition={{ duration: activeFadeItem === item.href ? 1 : 0.4 }}
											className="inline-block"
										>
											{item.name}
										</motion.span>
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
