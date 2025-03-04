"use client";
import { useState } from 'react';
import Tabs from "@/components/tabs/tabs";
import tabs from './tabsData';
import { Props } from './types';

export default function MainEvents({ values }: Props) {
    const [activeTab, setActiveTab] = useState(0);
    const [fade, setFade] = useState(false);

    const eventsTitle = values?.data.keyValues.find(item => item.key === 'main-events-title');
    const tab1Title = values?.data.keyValues.find(item => item.key === 'main-events-tab1-title');
    const tab1Detail = values?.data.keyValues.find(item => item.key === 'main-events-tab1-details');
    const tab2Title = values?.data.keyValues.find(item => item.key === 'main-events-tab2');
    const tab2Detail = values?.data.keyValues.find(item => item.key === 'main-events-tab2-details');
    const tab3Title = values?.data.keyValues.find(item => item.key === 'main-events-tab3');
    const tab3Detail = values?.data.keyValues.find(item => item.key === 'main-events-tab3-details');


    const tabs: Tab[] = [

        {
            title: tab1Title?.value || ""
            , content: tab1Detail?.value || ''
        },
        {
            title: tab2Title?.value || ""
            , content: tab2Detail?.value || ''
        },
        {
            title: tab3Title?.value || ""
            , content: tab3Detail?.value || ''
        }
    ]


    return (
        <div className="w-full mt-[253px] flex flex-col items-center px-[88px]" dir="rtl">
            {/* <p className="font-extrabold text-4xl/[54px] w-[436px] text-center">
                این
                <span className="text-customGreen"> جشنواره </span>
                سه بخش اصلی را شامل می شود
            </p> */}
            <div className="text-[32px]/[56px]" dangerouslySetInnerHTML={{ __html: eventsTitle?.value || "" }} />


            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} fade={fade} setFade={setFade} />

            <div className={`w-full mt-[127px] p-4 transition-opacity duration-300 flex flex-col justify-start ${fade ? 'opacity-0' : 'opacity-100'}`}>
                {/* {tabs[activeTab].content} */}
                <div className="" dangerouslySetInnerHTML={{ __html: tabs[activeTab].content || "" }} />
            </div>
        </div>
    );
}