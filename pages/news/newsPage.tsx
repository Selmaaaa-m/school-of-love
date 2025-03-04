import Topic from "@/components/topic/topic";
import Image from "next/image";
import newsPic from "@/public/images/news/newsPic.png";
import { paragraphs } from "./paragraphs";
import CommentSection from "@/features/commentSection/commentSection";
import Footer from "@/features/footer/footer";
import { Data } from "./types";

export default function NewsPage(data: Data) {
    // console.log("data from news: ", data);
    
    const date = "۱۴۰۲/۰۴/۱۰";
    const commentCount = 12;
    const title = "روایتگری ابزار قدرتمند مقابله با جنگ نرم دشمن است";
    const detail = "معاون فرهنگی هنری سازمان بسیج مستضعفین گفت: امروز دشمن در حال جنگیدن با ما از طریق رسانه‌ها و فضای مجازی است؛ جنگی که به‌طور مستقیم بر افکار و اندیشه‌های مردم تأثیر می‌گذارد و روایتگری ابزاری قدرتمند برای مقابله با این جنگ نرم است.";

    return (
        <>
            <div className="px-[142px] flex flex-col items-center justify-start">
                <Topic title={title} date={date} commentCount={commentCount} detail={detail} />
                <Image
                    className=" mt-[30px] mb-[69px] "
                    src={newsPic}
                    alt={"تصویر خبر"}
                    width={996}
                    height={720}
                    placeholder="blur"
                    blurDataURL="/path/to/placeholder-image.jpg"
                />

                <div>
                    {paragraphs.map((paragraph, index) => (
                        <div key={index} className="mt-[45px]" dir="rtl">
                            <span className="font-bold text-base/[30px] text-right" dir="rtl">
                                {paragraph.topic}
                            </span>
                            <p className="font-normal text-base/[30px] text-justify" dir="rtl">
                                {paragraph.content}
                            </p>
                        </div>
                    ))}
                </div>

                <CommentSection />
            </div>
            <Footer />
        </>
    );
}