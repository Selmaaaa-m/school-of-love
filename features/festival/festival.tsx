import React from 'react';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';
import { Props } from './types';

export default function Festival({ values }: Props) {


    const festivalTitle = values?.data.keyValues.find(item => item.key === "festival-title");
    const festivalDetails = values?.data.keyValues.find(item => item.key === "festival-details");
    const videoObject = values?.data.keyValues.find(item => item.id === 4)

    return (
        <div className="w-full h-fit mt-[169px] flex flex-col items-center pr-[80px] pl-[80px]" >
            <div className="festival-details font-normal text-[32px]/[56px]" dangerouslySetInnerHTML={{ __html: festivalTitle?.value || "" }} />

            <div className="w-full h-fit flex flex-row mt-[66px] gap-10 justify-between items-start" dir='rtl'>

                <div className=" festival-details flex flex-col gap-5 lg:min-w-[300px] min-w-[250px] h-fit overflow-hidden z-0 text-ellipsis whitespace-nowrap" dir="rtl">

                    <div className="font-normal text-2xl/[70px]" dangerouslySetInnerHTML={{ __html: festivalDetails?.value || "" }} />

                </div>

                <VideoPlayer video={videoObject} />
            </div>
        </div>
    );

}