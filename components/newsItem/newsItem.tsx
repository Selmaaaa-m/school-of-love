import Image from "next/image";
import Link from "next/link";
import arrow from './icons/arrow.svg';
import { NewsItemProps } from "./types";

const NewsItem: React.FC<NewsItemProps> = ({ id, imageSrc, text }) => {
    return (
        <Link href={`/news/${id}`} passHref>
            <div className="w-[385px] mt-[83px] transform hover:translate-y-[-5px] transition-transform duration-300">
                <Image src={imageSrc} alt={text} width={385} height={216} />
                <p className="font-medium text-2xl text-right mt-5" dir="rtl">
                    {text}
                </p>
                <div className="flex gap-[10px] mt-3 cursor-pointer" dir="rtl">
                    <span className="font-medium text-base/[20px] text-customGreen text-right">
                        مطالعه بیشتر
                    </span>
                    <Image src={arrow} alt={"بیشتر"} />
                </div>
            </div>
        </Link>
    );
};

export default NewsItem;