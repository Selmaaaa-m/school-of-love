'use client' 
import { GetPage } from "@/api/getPage";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    values: GetPage | undefined;
}

export default function Questions({ values }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const questionsTitle = values?.data.keyValues.find(item => item.key === 'q-title');
    const questionsOne = values?.data.keyValues.find(item => item.key === 'q1');
    const questionsTwo = values?.data.keyValues.find(item => item.key === 'q2');

    const text = [
        questionsOne?.value || "",
        questionsTwo?.value || "",
    ];

    // useEffect(() => {
    //     const elements = ref.current?.querySelectorAll(".line p");

    //     if (elements) {
    //         const tl = gsap.timeline();

    //         tl.from(elements, {
    //             scrollTrigger: {
    //                 trigger: '.line',
    //                 start: 'top center',
    //                 end: 'bottom center',
    //                 markers: true,
    //             },
    //             y: 100,
    //             ease: "power4.out",
    //             // delay: 1,
    //             skewY: 7,
    //             duration: 1,
    //             stagger: {
    //                 amount: 0.3
    //             }
    //         });

    //         tl.addLabel('start')
    //         .to('.line p', {ease: "power4.out"} ,'start')
    //     }
    // }, [values]);

    return (
        <div ref={ref} className="w-full h-fit flex flex-col items-center gap-14 mt-40 px-[70px]" dir="rtl">
            <div className="text-[32px]/[56px]" dangerouslySetInnerHTML={{ __html: questionsTitle?.value || "" }} />
            <div className="flex flex-col md:flex-row h-fit w-full gap-20">
                {values ? text.map((value, index) => (
                    <div
                        key={index}
                        className="line font-normal text-lg text-justify"
                        dangerouslySetInnerHTML={{ __html: value || "" }}
                    />
                )) :
                    <div className='w-full flex justify-center animate-pulse g-red-100' dir="ltr">
                        loading ...
                    </div>
                }
            </div>
        </div>
    );
}
