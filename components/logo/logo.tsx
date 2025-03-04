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
        <div className="relative w-full flex items-center justify-center px-6 lg:px-[70px]" onMouseMove={handleMouseMove}>
            <div className="absolute top-[20%] sm:top-[20%] left-20 sm:left-[20%]" style={getTransformStyle(-0.05, -0.05)}>
                <LogoDetails text={textOptions[0]} backgroundColor="gold" />
            </div>
            <div className="absolute top-28 sm:top-[40%] right-20 sm:right-[27%]" style={getTransformStyle(0.05, -0.05)}>
                <LogoDetails text={textOptions[1]} backgroundColor="yellow" />
            </div>
            <Image
                className="h-full object-contain"
                src={logo}
                alt="مدرسه عشق"
                width={500}
                height={425}
            />
            <div className="absolute bottom-24 sm:bottom-[30%] left-24 sm:left-[30%]" style={getTransformStyle(-0.05, 0.05)}>
                <LogoDetails text={textOptions[2]} backgroundColor="yellow" />
            </div>
            <div className="absolute bottom-8 sm:bottom-[10%] right-16 sm:right-[23%]" style={getTransformStyle(0.05, 0.05)}>
                <LogoDetails text={textOptions[3]} backgroundColor="gold" />
            </div>

            {/* Dots container using Tailwind CSS */}
            <div
                className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                    pointerEvents: "none",
                    transform: `translate(-50%, -50%)`,
                }}
            >
                {/* Dot 1 */}
                <div
                    className="absolute w-[10px] h-[10px] top-[10%] left-[10%] bg-yellow-400 rounded-full shadow-[0_0_10px_yellow,0_0_20px_yellow,0_0_30px_yellow] animate-pulse"
                    style={getTransformStyle(-0.05, -0.05)}
                ></div>

                {/* Dot 2 */}
                <div
                    className="absolute w-[10px] h-[10px] top-[50%] left-[50%] bg-yellow-400 rounded-full shadow-[0_0_10px_yellow,0_0_20px_yellow,0_0_30px_yellow] animate-pulse"
                    style={getTransformStyle(0.05, 0.05)}
                ></div>

                {/* Dot 2.5 */}
                <div
                    className="absolute w-[10px] h-[10px] top-[80%] left-[20%] bg-yellow-400 rounded-full shadow-[0_0_10px_yellow,0_0_20px_yellow,0_0_30px_yellow] animate-pulse"
                    style={getTransformStyle(0.05, -0.05)}
                ></div>

                {/* Dot 3 */}
                <div
                    className="absolute w-[10px] h-[10px] top-[20%] right-[20%] bg-yellow-400 rounded-full shadow-[0_0_10px_yellow,0_0_20px_yellow,0_0_30px_yellow] animate-pulse"
                    style={getTransformStyle(-0.05, 0.05)}
                ></div>

                {/* Dot 4 */}
                <div
                    className="absolute w-[10px] h-[10px] top-[80%] right-[10%] bg-yellow-400 rounded-full shadow-[0_0_10px_yellow,0_0_20px_yellow,0_0_30px_yellow] animate-pulse"
                    style={getTransformStyle(0.05, 0.05)}
                ></div>
            </div>
        </div>
    );
}
