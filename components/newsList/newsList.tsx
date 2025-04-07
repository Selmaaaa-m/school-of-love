"use client";

import { useState } from "react";
import NewsItem from "../newsItem/newsItem";
import { NewsListProps } from "./types";

const NewsList: React.FC<NewsListProps> = ({ allNewsItems }) => {
    const [visibleNewsCount, setVisibleNewsCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleNewsCount((prevCount) => prevCount + 3);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full inline-flex flex-row flex-wrap gap-[20px] justify-center items-start" dir="rtl">


                {allNewsItems?.data[0] && (
                    <NewsItem
                        key={allNewsItems?.data[0].id}
                        imageSrc={allNewsItems?.data[0].files && allNewsItems?.data[0].files.length > 0 ? allNewsItems?.data[0].files[0].url : ''}
                        text={allNewsItems?.data[0].title}
                        url={allNewsItems?.data[0].url}
                        style={"w-full sm:w-[600px] md:w-[700px] lg:w-[803px] h-[584px] flex-shrink-1"}
                    />
                )}
                <div className="g-red-400 h-fit flex flex-wrap items-center justify-center xl:flex-col flex-row gap-x-[25px] ">
                    {allNewsItems?.data[1] && (
                        <NewsItem
                            key={allNewsItems?.data[1].id}
                            imageSrc={allNewsItems?.data[1].files && allNewsItems?.data[1].files.length > 0 ? allNewsItems?.data[1].files[0].url : ''}
                            text={allNewsItems?.data[1].title}
                            url={allNewsItems?.data[1].url}
                            style={"w-[385px] h-[280px]"}
                        />
                    )}
                    {allNewsItems?.data[2] && (
                        <NewsItem
                            key={allNewsItems?.data[2].id}
                            imageSrc={allNewsItems?.data[2].files && allNewsItems?.data[2].files.length > 0 ? allNewsItems?.data[2].files[0].url : ''}
                            text={allNewsItems?.data[2].title}
                            url={allNewsItems?.data[2].url}
                            style={"w-[385px] h-[280px]"}
                        />
                    )}

                </div>
            <div className="w-full lg:max-w-[1190px] xl:max-w-[1206px] inline-flex flex-row flex-wrap gap-[25px] justify-center xl:justify-end items-start" dir="rtl">
                
                {allNewsItems?.data.slice(3, visibleNewsCount).map((item) => (
                    <NewsItem
                        key={item.id}
                        imageSrc={item.files && item.files.length > 0 ? item.files[0].url : ''}
                        text={item.title}
                        url={item.url}
                        style={

                            "w-[385px] h-[280px]"
                        }
                    />
                ))}
                </div>
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