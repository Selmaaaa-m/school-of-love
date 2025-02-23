import React from 'react';
import VideoPlayer from '../../components/videoPlayer/videoPlayer';

export default function Festival() {
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
        <div className="w-full h-fit mt-[169px] flex flex-col items-center">
            <h2 className="font-semibold text-[32px]/[56px] ">
                جشنواره گذشته (هفتمین دوره)
            </h2>
            <div className="flex flex-row mt-[66px] gap-10 justify-center items-center" dir='rtl'>

                <div className="w-fit flex flex-col gap-5" dir="rtl">
                    {details.map((value, index) => (
                        <div key={index} className="flex gap-2 items-end" dir="rtl">
                            <p className="font-semibold text-5xl text-customGreen">{value.number}</p>
                            <p className="font-normal text-2xl">{value.label}</p>
                        </div>
                    ))}
                </div>

                <VideoPlayer />
            </div>
        </div>
    );
}