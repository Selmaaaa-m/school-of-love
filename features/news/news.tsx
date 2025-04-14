'use client'
import NewsList from "@/components/newsList/newsList";
import { Props } from "./types";
import InnerHTML from "@/components/innerHTML/innerHTML";
import { useQuery } from "@tanstack/react-query";
import { fetchHomeData } from "@/api/home/fetchHomeData";

export default function News({ newsList }: Props) {
    const { data: pageData } = useQuery({
        queryKey: ["pageData"],
        queryFn: () => fetchHomeData(),
    });

    const newsTitle = pageData?.data.keyValues.find(item => item.key === 'news-title');

    return (
        <div className="w-full px-[34px] flex flex-col items-center gap-[83px]">
            <InnerHTML style="text-4xl/[63px]" details={newsTitle?.value || ""} />
            <NewsList allNewsItems={newsList || undefined} />
        </div>
    );
}