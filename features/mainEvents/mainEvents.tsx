"use client";
import { useState } from 'react';
import Tabs from "@/components/tabs/tabs";
import { Props, Tab } from './types';
import InnerHTML from '@/components/innerHTML/innerHTML';

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
    const tabsNotice = values?.data.keyValues.find(item => item.key === 'tabs-notice');


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
        <div className="w-full mt-[253px] flex flex-col justify-center items-center md:px-[88px] " dir="rtl">
            <InnerHTML style='text-[32px]/[56px] w-fit !text-center md:px-[88px] px-[50px]' details={eventsTitle?.value || ""} />
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} fade={fade} setFade={setFade} />

            <div className={`w-full mt-[127px] p-4 transition-opacity duration-300 flex flex-col justify-start md:px-[88px] px-[50px]
                 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                <InnerHTML style='text-right' details={tabs[activeTab].content || ""} />
            </div>
            <InnerHTML style='text-right mt-[60px] md:px-[88px] px-[50px] w-full' details={tabsNotice?.value || ''} />
        </div>
    );
}