import Image from "next/image";
import Link from "next/link";
import arrow from './icons/arrow.svg';
import { NewsItemProps } from "./types";

const NewsItem: React.FC<NewsItemProps> = ({ imageSrc, text, url, style }) => {
    return (
        <Link href={`/news/${url}`}>
            <div className={`relative ${style}  mt-[25px] transform hover:translate-y-[-5px] transition-transform duration-300`}>
                {/* Image */}
                <Image
                    src={imageSrc}
                    alt={text}
                    width={200}
                    height={280}
                    className={`object-cover rounded-[15px] ${style}`}
                />

                {/* Overlay */}
                <div className="absolute pr-5 pl-4 py-[18px] inset-0 bg-[#27674B80] rounded-[15px] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end">
                    <p className="text-white font-medium text-2xl text-right">
                        {text}
                    </p>
                    <div className="flex gap-[10px] mt-3 cursor-pointer" dir="rtl">
                    <span className="font-medium text-base/[20px] text-white text-right">
                        مطالعه بیشتر
                    </span>
                    <Image src={arrow} alt={"بیشتر"} />
                </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsItem;