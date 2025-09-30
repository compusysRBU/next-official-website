import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Chewy, Geist, Geist_Mono, Montserrat, Space_Grotesk, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const mont = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

const chewy = Chewy({
	variable: "--font-chewy",
	weight: "400",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

const sugar = localFont({
	src: "./fonts/SugarPeachy.otf",
	variable: "--font-sugar",
});

export const metadata: Metadata = {
	title: "Compusys",
	description: "Official Committee of Computer Science and Engineering RBU",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${spaceGrotesk.variable} ${sugar.variable} ${chewy.variable} ${mont.variable} antialiased`}
			>
				<LenisProvider>
					<div className="min-h-screen w-full">
						<div className="sticky top-0 z-50 w-full">
							<Navbar />
						</div>
						<div className="container mx-auto ">
							<main>{children}</main>
						</div>
					</div>
				</LenisProvider>
			</body>
		</html>
	);
}
