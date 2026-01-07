import Link from "next/link";
import Image from "next/image";
const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className=" border-t-2 border-zinc-800 rounded-t-3xl text-zinc-900">
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

                    <div className="space-y-3 pt-5">
                        <h4 className="font-grotesk text-base font-semibold tracking-[0.18em] text-gray-800 uppercase">
                            Stay Connected
                        </h4>
                        <p className="font-mono-two text-xs text-zinc-700">
                            Follow our official channels for announcements, event updates, and
                            behind-the-scenes from the CSE department.
                        </p>
                        <div className="relative flex flex-wrap items-center gap-3 text-xs text-zinc-800">
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
                </div>
            </div>
            <div className="border-t border-zinc-800  ">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-zinc-700 sm:flex-row sm:px-6">
                    <p className="font-mono-two">
                        {currentYear} Compusys, CSE Department, RBU. All rights reserved.
                    </p>
                    <p className="font-mono-two text-[0.7rem] text-muted-foreground">
                        Built with care by the student committee.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
