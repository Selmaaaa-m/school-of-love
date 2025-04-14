'use client'
import { GetPage } from "@/api/types/getPage";
import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InnerHTML from "@/components/innerHTML/innerHTML";
import { useQuery } from "@tanstack/react-query";
import { fetchHomeData } from "@/api/home/fetchHomeData";

gsap.registerPlugin(ScrollTrigger);

export interface Props {
    values: GetPage | undefined;
}

export default function Questions() {
    const { data: pageData } = useQuery({
        queryKey: ["pageData"],
        queryFn: () => fetchHomeData(),
    });

    const ref = useRef<HTMLDivElement>(null);
    const questionsTitle = pageData?.data.keyValues.find(item => item.key === 'q-title');
    const questionsTwo = pageData?.data.keyValues.find(item => item.key === 'q1');

    const text = [
        questionsTwo?.value || "",
    ];


    return (
        <div ref={ref} className="w-full h-fit flex flex-col items-center gap-14 mt-40 px-[30px] md:px-[70px]" dir="rtl">
            <div className="flex flex-col md:flex-row h-fit w-full gap-20 md:gap-12 lg:gap-20">
                <InnerHTML style="text-[32px]/[56px] text-center" details={questionsTitle?.value || ""} />
                {pageData ? text.map((value, index) => (
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