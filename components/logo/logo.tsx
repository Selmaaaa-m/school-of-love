"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import LogoDetails from "./logoDetails/logoDetails";

export default function Logo() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    const getTransformStyle = (xOffset: number, yOffset: number) => ({
        transform: `translate(${mousePosition.x * xOffset}px, ${mousePosition.y * yOffset}px)`,
    });

    const textOptions = [
        "میزبانی استان سمنان",
        "هشتمین دوره",
        "۱۲ داور",
        "۱۵ تا ۲۵ فروردین"
    ];

    return (
        <div className="relative w-fit px-[70px]" onMouseMove={handleMouseMove}>
            <div className="absolute top-24 left-[-110px]" style={getTransformStyle(-0.05, -0.05)}>
                <LogoDetails text={textOptions[0]} backgroundColor="gold" />
            </div>
            <div className="absolute top-[180px] right-[-20px]" style={getTransformStyle(0.05, -0.05)}>
                <LogoDetails text={textOptions[1]} backgroundColor="yellow" />
            </div>
            <Image
                className="h-full object-contain"
                src={logo}
                alt="مدرسه عشق"
                width={500}
                height={425}
            />
            <div className="absolute bottom-32 left-[30px]" style={getTransformStyle(-0.05, 0.05)}>
                <LogoDetails text={textOptions[2]} backgroundColor="yellow" />
            </div>
            <div className="absolute bottom-14 right-[-80px]" style={getTransformStyle(0.05, 0.05)}>
                <LogoDetails text={textOptions[3]} backgroundColor="gold" />
            </div>
        </div>
    );
}
