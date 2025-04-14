"use client";

import { useState, MouseEvent, useLayoutEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/new-logo.png";
import LogoDetails from "./logoDetails/logoDetails";
import pattern from '@/public/images/logoPattern.png'

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
        "1 بهمن تا 25 اردیبهشت"
    ];

    useLayoutEffect(() => {
        const canvas = document.getElementById("miCanvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d");
        const container = canvas.parentElement;
        if (!context || !container) return;

        canvas.width = container.clientWidth;
        canvas.height = window.innerHeight;

        const mouseCoords = {
            x: 0,
            y: 0,
        };

        window.addEventListener("mousemove", (e) => {
            if (mouseCoords.x !== undefined && mouseCoords.y !== undefined) {
                if (mouseCoords.x < e.x) {
                    puntos.forEach(punto => {
                        punto.x -= -0.6;
                    });
                }

                if (mouseCoords.x > e.x) {
                    puntos.forEach(punto => {
                        punto.x += -0.6;
                    });
                }

                if (mouseCoords.y < e.y) {
                    puntos.forEach(punto => {
                        punto.y -= -0.6;
                    });
                }

                if (mouseCoords.y > e.y) {
                    puntos.forEach(punto => {
                        punto.y += -0.6;
                    });
                }
            }

            mouseCoords.x = e.x;
            mouseCoords.y = e.y;
        });

        class Punto {
            x: number;
            y: number;
            size: number;
            floatX: number;
            floatY: number;
            color: string | undefined;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3;
                this.floatX = Math.random() * 0.3 - 0.1;
                this.floatY = Math.random() * 0.3 - 0.1;
                this.color = randomColor();
            }

            draw() {
                if (!context) return;
                context.beginPath();
                context.fillStyle = this.color || "black";
                context.arc(this.x, this.y, this.size, 0, 360);
                context.fill();
            }

            update() {
                if (this.x > canvas.width) this.x = -10;
                if (this.x < -20) this.x = canvas.width;
                if (this.y > canvas.height) this.y = -10;
                if (this.y < -20) this.y = canvas.height;

                this.x += this.floatX;
                this.y += this.floatY;
                this.draw();
            }
        }

        const puntos: Punto[] = [];
        for (let i = 0; i < 150; i++) puntos[i] = new Punto();

        function move() {
            if (context) {
                context.clearRect(0, 0, canvas.width, canvas.height);
            }

            puntos.forEach((punto) => {
                punto.update();
            });

            requestAnimationFrame(move);
        }

        move();

        function randomColor() {
            const random = Math.random() * 3;
            if (random > 2) return "rgb(206, 206, 206)";
            if (random < 2 && random > 1) return "gray";
            if (random < 1) return "#7db424";
        }
    }, []);

    return (
        <div className="relative w-full flex items-center justify-center px-6 pt-[92px] lg:px-[70px] z-30" onMouseMove={handleMouseMove}>
            <Image
                className=" opacity-80 absolute w-full top-0 h-[120%] object-cover gradient-mask-b-70"
                height={603}
                src={pattern}
                alt={""}
            />
            <canvas id="miCanvas" className="absolute w-full h-fit bg-transparent top-0 left-0 overflow-x-hidden z-10"></canvas>
            <div className=" hidden md:block absolute md:top-[20%] md:left-[5%] lg:left-[20%] z-30" style={getTransformStyle(-0.05, -0.05)}>
                <LogoDetails text={textOptions[0]} backgroundColor="gold" />
            </div>
            <div className=" hidden md:block absolute md:top-[40%] md:right-[10%] lg:right-[27%] z-30" style={getTransformStyle(0.05, -0.05)}>
                <LogoDetails text={textOptions[1]} backgroundColor="yellow" />
            </div>
            <Image
                className="h-full object-contain z-20"
                src={logo}
                alt="مدرسه عشق"
                width={500}
                height={425}
            />
            <div className=" hidden md:block absolute md:bottom-[30%] md:left-[15%] lg:left-[30%] z-30" style={getTransformStyle(-0.05, 0.05)}>
                <LogoDetails text={textOptions[2]} backgroundColor="yellow" />
            </div>
            <div className=" hidden md:block absolute md:bottom-[10%] md:right-[5%] lg:right-[20%] z-30" style={getTransformStyle(0.05, 0.05)}>
                <LogoDetails text={textOptions[3]} backgroundColor="gold" />
            </div>
        </div>
    );
}
