"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ElementTag = "div" | "section" | "main" | "article";

interface ScrollRevealProps {
    as?: ElementTag;
    className?: string;
    children: ReactNode;
    delay?: number;
}

export default function ScrollReveal({
    as = "div",
    className,
    children,
    delay = 0,
}: ScrollRevealProps) {
    const MotionTag = {
        div: motion.div,
        section: motion.section,
        main: motion.main,
        article: motion.article,
    }[as];

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                bounce: 0.35,
                delay,
            }}
        >
            {children}
        </MotionTag>
    );
}
