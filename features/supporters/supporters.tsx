"use client"

import { Props } from "./types";

export default function Supporters({ values }: Props) {
    const supportersTitle = values?.data.keyValues.find(item => item.key === 'supporters-title');

    
    return (
        <div className="w-full mt-[267px] text-center" dir="rtl">
            <div className="text-4xl/[63px]  " dangerouslySetInnerHTML={{ __html: supportersTitle?.value || "" }} />
                {/* حامیان
                <span className="text-customGreen"> جشنواره </span> */}
            
            <div className="h-[336px]">
            </div>
        </div>
    );
}
