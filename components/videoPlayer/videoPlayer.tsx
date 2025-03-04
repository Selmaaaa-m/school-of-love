"use client";

import React, { useRef, useEffect } from 'react';
import styles from './videoPlayer.module.css';
import { Props } from './types';

export default function VideoPlayer({ video }: Props) {
    const videoRef = useRef<HTMLDivElement | null>(null);
    const fileUrl = video?.filesValue?.find(item => item.url)?.url;

    useEffect(() => {
        let gsap, ScrollTrigger;

        if (typeof window !== "undefined") {
            (async () => {
                // Dynamically import GSAP and ScrollTrigger
                const mod = await import("gsap/dist/gsap");
                gsap = mod.gsap;
                ScrollTrigger = (await import("gsap/dist/ScrollTrigger")).ScrollTrigger;

                gsap.registerPlugin(ScrollTrigger);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: videoRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    }
                });

                tl.addLabel('start')
                    .to(videoRef.current, { scale: 1.5, zIndex: 10 })
                    .to('.festival-details', { opacity: 0 }, 'start')
                    .addLabel('translate')
                    .to(videoRef.current, { y: 150 })
                    .addLabel('end');
            })();
        }
    }, []);

    return (
        <div
            ref={videoRef}
            className={`video-container mb-[150px] g-green-900 ${styles.videoContainer}`}
        >
            <video
                controls
                width="80%"
                height="80%"
                className='video rounded-xl bg-transparent'
            >
                <source src={fileUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
