"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export type DraggableStickerProps = {
    /** Path to the sticker image. */
    imageSrc: string;
    /** Alt text for the sticker image. */
    alt: string;
    /** Extra classes to position the sticker initially (e.g. "top-4 right-4"). */
    initialClassName?: string;
    /** Size classes for the image (default is a medium square sticker). */
    sizeClassName?: string;
};

export default function DraggableSticker({
    imageSrc,
    alt,
    initialClassName,
    sizeClassName,
}: DraggableStickerProps) {
    const stickerRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);

    const dragStateRef = useRef<{
        isDragging: boolean;
        pointerId: number | null;
        parentRect: DOMRect | null;
        selfRect: DOMRect | null;
        offsetX: number;
        offsetY: number;
    }>({
        isDragging: false,
        pointerId: null,
        parentRect: null,
        selfRect: null,
        offsetX: 0,
        offsetY: 0,
    });

    const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
        const state = dragStateRef.current;
        if (!state.isDragging || !state.parentRect || !state.selfRect) return;

        const target = stickerRef.current;
        if (!target) return;

        const { parentRect, selfRect, offsetX, offsetY } = state;
        let left = event.clientX - parentRect.left - offsetX;
        let top = event.clientY - parentRect.top - offsetY;

        const maxLeft = parentRect.width - selfRect.width;
        const maxTop = parentRect.height - selfRect.height;

        left = Math.min(Math.max(0, left), maxLeft);
        top = Math.min(Math.max(0, top), maxTop);

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.right = "auto";
        target.style.bottom = "auto";
    };

    const endDragging = () => {
        const state = dragStateRef.current;
        if (!state.isDragging) return;

        state.isDragging = false;
        if (state.pointerId != null && stickerRef.current) {
            try {
                stickerRef.current.releasePointerCapture(state.pointerId);
            } catch {
                // ignore if capture was not set
            }
        }
        state.pointerId = null;

    };

    const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
        const target = stickerRef.current;
        const parent = target?.parentElement;
        if (!target || !parent) return;

        const parentRect = parent.getBoundingClientRect();
        const selfRect = target.getBoundingClientRect();

        dragStateRef.current.isDragging = true;
        dragStateRef.current.pointerId = event.pointerId;
        dragStateRef.current.parentRect = parentRect;
        dragStateRef.current.selfRect = selfRect;
        dragStateRef.current.offsetX = event.clientX - selfRect.left;
        dragStateRef.current.offsetY = event.clientY - selfRect.top;

        try {
            // keep receiving events even if pointer leaves the element
            target.setPointerCapture(event.pointerId);
        } catch {
            // capture can fail in some environments; dragging still works via window listeners
        }

        // prevent text selection / image drag ghost
        event.preventDefault();
    };

    // const handleMouseEnter = () => {
    //     if (!innerRef.current) return;
    //     gsap.to(innerRef.current, {
    //         scale: 1.08,
    //         duration: 0.35,
    //         ease: "elastic.out(1, 0.5)",
    //     });
    // };

    const handleMouseLeave = () => {
        if (!innerRef.current) return;
        gsap.to(innerRef.current, {
            scale: 1,
            duration: 0.45,
            ease: "elastic.out(1, 0.5)",
        });
    };

    return (
        <div
            ref={stickerRef}
            className={cn(
                "absolute z-30 select-none touch-none cursor-grab pointer-events-auto",
                // Start near a corner of the card; caller can override.
                "top-3 right-3",
                initialClassName,
            )}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDragging}
            onPointerCancel={endDragging}
            // onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={innerRef}
                className="origin-center"
            >
                <img
                    src={imageSrc}
                    alt={alt}
                    className={cn(
                        "pointer-events-none drop-shadow-md",
                        "w-16 h-16  md:w-20 md:h-20",
                        sizeClassName,
                    )}
                />
            </div>
        </div>
    );
}
