 'use client'
 import React from 'react';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';
import InnerHTML from '@/components/innerHTML/innerHTML';
import { fetchHomeData } from '@/api/home/fetchHomeData';
import { useQuery } from '@tanstack/react-query';

export default function Festival() {

    const { data: pageData } = useQuery({
        queryKey: ["pageData"],
        queryFn: () => fetchHomeData(),
    });
    
    const festivalTitle = pageData?.data.keyValues.find(item => item.key === "festival-title");
    const festivalDetails = pageData?.data.keyValues.find(item => item.key === "festival-details");
    const videoUrl = pageData?.data.keyValues.find(item => item.key === 'video')?.filesValue.url;

    return (
        <div className="w-full h-fit mt-[169px] flex flex-col items-center md:px-[80px] px-[30px]" >
            <InnerHTML style='festival-details text-center font-normal text-[32px]/[56px]' details={festivalTitle?.value || ''} />
            <div className="w-full h-fit flex flex-col lg:flex-row mt-[66px] gap-10 justify-between items-center md:items-start" dir='rtl'>
                <div className=" festival-details flex flex-col gap-5 lg:min-w-[300px] min-w-[250px] h-fit overflow-hidden z-0 text-ellipsis whitespace-nowrap" dir="rtl">
                    <InnerHTML style='text-right' details={festivalDetails?.value || ''} />

                </div>

                <VideoPlayer video={videoUrl} />
            </div>
        </div>
    );

}