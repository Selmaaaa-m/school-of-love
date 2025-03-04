"use client";
import { useState } from 'react';
import Tabs from "@/components/tabs/tabs";
import tabs from './tabsData';
import { Props } from './types';

export default function MainEvents({values} : Props) {
    const [activeTab, setActiveTab] = useState(0);
    const [fade, setFade] = useState(false);

    return (
        <div className="w-full mt-[253px] flex flex-col items-center px-[88px]" dir="rtl">
            <p className="font-extrabold text-4xl/[54px] w-[436px] text-center">
                این
                <span className="text-customGreen"> جشنواره </span>
                سه بخش اصلی را شامل می شود
            </p>

            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} fade={fade} setFade={setFade} />

            <div className={`w-full mt-[127px] p-4 transition-opacity duration-300 flex flex-col justify-start ${fade ? 'opacity-0' : 'opacity-100'}`}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
}