import pic1 from "@/public/images/news/pic1.png";
import pic2 from "@/public/images/news/pic2.png";
import pic3 from "@/public/images/news/pic3.png";
import NewsList from "@/components/newsList/newsList";
import { Props } from "./types";

export default function News({values}: Props) {
    const allNewsItems = [
        {
            id: "1",
            imageSrc: pic1,
            text: "روایتگری ابزار قدرتمند مقابله با جنگ نرم دشمن است."
        },
        {
            id: "2",
            imageSrc: pic2,
            text: "خبر دوم"
        },
        {
            id: "3",
            imageSrc: pic3,
            text: "خبر سوم"
        },
        {
            id: "4",
            imageSrc: pic1,
            text: "خبر چهارم"
        },
        {
            id: "5",
            imageSrc: pic2,
            text: "خبر پنجم"
        },
        {
            id: "6",
            imageSrc: pic3,
            text: "خبر ششم"
        }
    ];

    return (
        <div className="w-full px-[42px] flex flex-col items-center">
            <p className="font-semibold text-4xl/[63px]">
                اخبار
                <span className="text-customGreen"> جشنواره </span>
            </p>

            <NewsList allNewsItems={allNewsItems} />
        </div>
    );
}