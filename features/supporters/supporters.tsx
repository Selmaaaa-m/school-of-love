'use client'
import { fetchHomeData } from "@/api/home/fetchHomeData";
import InnerHTML from "@/components/innerHTML/innerHTML";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Supporters() {
    const { data: pageData } = useQuery({
        queryKey: ["pageData"],
        queryFn: () => fetchHomeData(),
    });
    
    const supportersTitle = pageData?.data.keyValues.find(item => item.key === 'supporters-title');
    const supporter1 = pageData?.data.keyValues.find(item => item.key === 'supporter-1');
    const supporter2 = pageData?.data.keyValues.find(item => item.key === 'supporter-2');


    return (
        <div className="w-full mt-[267px] text-center" dir="rtl">
            <InnerHTML style="text-center text-4xl/[63px]" details={supportersTitle?.value || ""} />
            <div className="h-[336px] flex gap-5 items-center justify-center">
                <Image src={supporter1?.filesValue.url || ''} className="size-full object-none bg-white rounded-lg w-[150px] h-[150px] scale-100 hover:scale-105" width={100} height={100} alt={""} />
                <Image src={supporter2?.filesValue.url || ''} className="size-full object-none bg-white rounded-lg w-[150px] h-[150px] scale-100 hover:scale-105" width={100} height={100} alt={""} />
            </div>
        </div>
    );
}
