"use client";

import React, { useRef, useEffect } from 'react';
import { Props } from './types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoPlayer({ video }: Props) {
    const videoRef = useRef<HTMLDivElement | null>(null);
    const fileUrl = video?.filesValue?.find(item => item.url)?.url;

    useEffect(() => {
        if (typeof window !== "undefined") {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: 'top 20%',
                    end: 'bottom center',
                    scrub: 1,
                }
            });

            tl.addLabel('translate')
                .to(videoRef.current, { y: 150, translateX: '-50%', left: '50%' })
                .to('.festival-details', { opacity: 0 }, 'translate')
                .addLabel('start')
                .to(videoRef.current, { scale: 1.1, zIndex: 10 })
                .to(videoRef.current, { translateY: '50%', top: '50%' })
                .addLabel('end')
        }
    }, []);

    return (
        <div
            ref={videoRef}
            className={`video-container l-20 g-purple-300 flex justify-center items-center relative w-full h-full z-10 mb-[150px] h-[56.25% `}
        >
            <video
                controls
                width="100%"
                height="100%"
                className="video rounded-xl bg-transparent"
            >
                <source src={fileUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
