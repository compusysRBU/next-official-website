"use client";
import { useRef, useState, useEffect } from "react";
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
      className={`w-full ${isRole ? "cursor-pointer scale-105" : "cursor-default"}`}
    >
      <Magnet
        padding={50}
        disabled={false}
        magnetStrength={10}
        triggerId={id}
        className="flex w-full items-center justify-center"
      >
        <p
          className={`font-grotesk flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-500 ease-out
            ${
              isRole
                ? "bg-zinc-700 text-white border-white border-3 font-bold shadow-md blur-[.55px]"
                : "bg-white text-black border-2 border-zinc-950 scale-100 shadow-none"
            }
          `}
        >
          {text}
        </p>
      </Magnet>
    </button>
  );
};

export default MorphName;
