"use client";

import { useState } from "react";
import NewsItem from "../newsItem/newsItem";
import { NewsListProps } from "./types";

// test
import pic3 from "@/public/images/news/pic3.png";


const NewsList: React.FC<NewsListProps> = ({ allNewsItems }) => {
    const [visibleNewsCount, setVisibleNewsCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleNewsCount((prevCount) => prevCount + 3);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className=" w-full flex flex-row flex-wrap gap-5 justify-center items-start" dir="rtl">
                {allNewsItems?.data.slice(0, visibleNewsCount).map((item) => (
                    <NewsItem key={item.id} imageSrc={pic3} text={item.title} url={item.url} />
                ))}
            </div>

            {allNewsItems?.data && visibleNewsCount < allNewsItems.data.length && (
                <button
                    onClick={handleLoadMore}
                    className="mt-5 px-4 py-2 bg-customGreen text-white rounded"
                >
                    بارگذاری بیشتر
                </button>
            )}
        </div>
    );
};

export default NewsList;