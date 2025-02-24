"use client";

import { StaticImageData } from "next/image";
import { useState } from "react";
import NewsItem from "../newsItem/newsItem";
import { NewsListProps } from "./types";

const NewsList: React.FC<NewsListProps> = ({ allNewsItems }) => {
    const [visibleNewsCount, setVisibleNewsCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleNewsCount((prevCount) => prevCount + 3);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className=" w-full flex flex-row flex-wrap gap-5 justify-center items-start" dir="rtl">
                {allNewsItems.slice(0, visibleNewsCount).map((item) => (
                    <NewsItem key={item.id} id={item.id} imageSrc={item.imageSrc} text={item.text} />
                ))}
            </div>

            {visibleNewsCount < allNewsItems.length && (
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