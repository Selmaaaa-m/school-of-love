import NewsList from "@/components/newsList/newsList";
import { Props } from "./types";

export default function News({ values, newsList }: Props) {

    const newsTitle = values?.data.keyValues.find(item => item.key === 'news-title');

    return (
        <div className="w-full px-[42px] flex flex-col items-center">
            <div className="text-4xl/[63px]  " dangerouslySetInnerHTML={{ __html: newsTitle?.value || "" }} />

            <NewsList allNewsItems={newsList || undefined} />
        </div>
    );
}