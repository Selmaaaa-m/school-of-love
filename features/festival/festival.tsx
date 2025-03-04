import React from 'react';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';
import { Props } from './types';

export default function Festival({values}:Props) {

    
    const festivalTitle = values?.data.keyValues.find(item => item.key === "festival-title");
    const festivalDetails = values?.data.keyValues.find(item => item.key === "festival-details");
    const videoObject = values?.data.keyValues.find(item => item.id === 4)
    
    const details = [
        {
            number: 346,
            label: "تعداد آثار"
        },
        {
            number: 250,
            label: "تعداد شرکت کننده"
        },
        {
            number: 45,
            label: "تعداد نفرات برگزیده"
        },
    ];


    return (
        <div className="w-full h-fit mt-[169px] flex flex-col items-center pr-[80px] pl-[80px]">
            {/* <h2 className="festival-details font-semibold text-[32px]/[56px] ">
                جشنواره گذشته (هفتمین دوره)
            </h2> */}
            <div className="festival-details font-normal text-[32px]/[56px]" dangerouslySetInnerHTML={{ __html: festivalTitle?.value || "" }} />

            <div className="w-full h-fit flex flex-row mt-[66px] gap-10 justify-between items-start" dir='rtl'>

                <div className=" festival-details w-fit flex flex-col gap-5 min-w-[300px]" dir="rtl">
                    {/* {details.map((value, index) => (
                        <div key={index} className="flex gap-2 items-end" dir="rtl">
                            <p className="font-semibold text-5xl text-customGreen">{value.number}</p>
                            <p className="font-normal text-2xl">{value.label}</p>
                        </div>
                    ))} */}
                    <div className="font-normal text-2xl/[70px] " dangerouslySetInnerHTML={{ __html: festivalDetails?.value || "" }} />

                </div>

                <VideoPlayer video={videoObject} />
            </div>
        </div>
    );
}