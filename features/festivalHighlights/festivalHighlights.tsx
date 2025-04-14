'use client';
import FestivalInfoCard from '@/components/festivalInfoCard/festivalInfoCard';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InnerHTML from '@/components/innerHTML/innerHTML';
import { useQuery } from '@tanstack/react-query';
import { fetchHomeData } from '@/api/home/fetchHomeData';

gsap.registerPlugin(ScrollTrigger);

export default function FestivalHighlights() {
    const { data: pageData } = useQuery({
        queryKey: ["pageData"],
        queryFn: () => fetchHomeData(),
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const festivalTitle = pageData?.data.keyValues.find(
        (item) => item.key === 'festival-highlights-title'
    );
    // const openingVideo = values?.data.keyValues.find(
    //     (item) => item.key === 'opening-video'
    // );

    const highlightItems = pageData?.data.keyValues
        .filter((item) => item.key.startsWith('highlight-'))
        .map((item) => {
            if (item.key.endsWith('videoType')) {
                return { key: item.value, type: 'video' as const };
            } else if (item.key.endsWith('imageType')) {
                return { key: item.value, type: 'image' as const };
            }
            return null; // Exclude items that don't match the types
        })
        .filter((item): item is { key: string; type: 'video' | 'image' } => item !== null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const races = container.querySelector('.races');
            if (races) {
                const updateScroll = () => {
                    const racesWidth = races.clientWidth;
                    const amountToScroll = racesWidth - window.innerWidth + 100;

                    gsap.to(races, {
                        x: amountToScroll,
                        ease: 'none',
                    });

                    ScrollTrigger.create({
                        trigger: '.racesContainer',
                        start: 'top 20%',
                        end: `+=${amountToScroll}`,
                        pin: '.racesContainer',
                        animation: gsap.getTweensOf(races)[0],
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    });
                };
                updateScroll();
                window.addEventListener('resize', () => {
                    ScrollTrigger.killAll();
                    updateScroll();
                });
            }
        }
        return () => {
            ScrollTrigger.killAll();
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="racesContainer relative w-full h-fit overflow-hidden mt-[50px] md:mt-[280px]"
            dir="rtl"
        >
            <div className="races w-fit flex flex-row justify-center items-center pr-14">
                <InnerHTML style='text-4xl text-right leading-[63px] min-w-[429px]' details={festivalTitle?.value || ''} />
                <div className="w-fit flex flex-row gap-7 pl-15">
                    {
                        highlightItems?.map((item, index) => (

                            <FestivalInfoCard key={index} title={item.key} type={item.type} />
                        ))
                    }
                    {/* <FestivalInfoCard title='طلوع هشتم (افتتاحیه)' type={'video'} />
                    <FestivalInfoCard title='مدیا جشنواره (آثار و تولیدات )' type={'image'} />
                    <FestivalInfoCard title='دبیرخانه ملی (گزارش مصور از دبیرخانه هشتم)' type={'video'} />
                    <FestivalInfoCard title='داوران جشنواره (بخش ملی)' type={'image'} />
                    <FestivalInfoCard
                        title='یارنما (نمایش اقدامات استان ها در جشنواره اعم از تولیدات - اقدامات -فعالیت ها )همراه با مانیتورینگ امتیازبندی' type={'video'} />
                    <FestivalInfoCard
                        title='تقویم جشنواره (زمانبندی جذب آثار داوری ها و انتخاب)' type={'video'} />
                    <FestivalInfoCard title='ایستگاه هشتم (اختتامیه )' type={'video'} /> */}
                </div>
            </div>
        </div>
    );
}