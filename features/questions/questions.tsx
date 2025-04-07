'use client'
import { GetPage } from "@/api/getPage";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InnerHTML from "@/components/innerHTML/innerHTML";

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


    return (
        <div ref={ref} className="w-full h-fit flex flex-col items-center gap-14 mt-40 px-[30px] md:px-[70px]" dir="rtl">
            <InnerHTML style="text-[32px]/[56px]" details={questionsTitle?.value || ""} />
            <div className="flex flex-col md:flex-row h-fit w-full gap-20 md:gap-12 lg:gap-20">
                {values ? text.map((value, index) => (
                    <div key={index} className="flex-1">
                        <InnerHTML style="line font-normal whitespace-break-spaces !text-lg !text-justify" details={value || ""} />
                    </div>
                )) :
                    <div className='w-full flex justify-center animate-pulse g-red-100' dir="ltr">
                        loading ...
                    </div>
                }
            </div>
        </div>
    );
}