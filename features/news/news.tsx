import NewsList from "@/components/newsList/newsList";
import { Props } from "./types";
import InnerHTML from "@/components/innerHTML/innerHTML";

export default function News({ values, newsList }: Props) {

    const newsTitle = values?.data.keyValues.find(item => item.key === 'news-title');

    return (
        <div className="w-full px-[34px] flex flex-col items-center gap-[83px]">
            <InnerHTML style="text-4xl/[63px]" details={newsTitle?.value || ""} />
            <NewsList allNewsItems={newsList || undefined} />
        </div>
    );
}