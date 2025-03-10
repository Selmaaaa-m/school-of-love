import Topic from "@/components/topic/topic";
import CommentSection from "@/features/commentSection/commentSection";
import Footer from "@/features/footer/footer";
import { convertToJalali } from "@/utils/dateUtils";

import { GetPost } from "@/api/getPost";
import { GetComments } from "@/api/getCommentList";

export interface Data {
    newsData: GetPost | undefined
    commentData: GetComments | undefined
}

export default function NewsPage({ newsData, commentData }: Data) {

    const date = newsData?.data.createdAt ? convertToJalali(newsData.data.createdAt) : '';
    const commentCount = commentData?.data.comment.length || 0;
    const detail = "معاون فرهنگی هنری سازمان بسیج مستضعفین گفت: امروز دشمن در حال جنگیدن با ما از طریق رسانه‌ها و فضای مجازی است؛ جنگی که به‌طور مستقیم بر افکار و اندیشه‌های مردم تأثیر می‌گذارد و روایتگری ابزاری قدرتمند برای مقابله با این جنگ نرم است.";

    return (
        <>
            <div className="px-[142px] flex flex-col items-center justify-start">
                <Topic title={newsData?.data.title || ''} date={date} commentCount={commentCount} detail={detail} />

                <div>

                    <div
                        dir="rtl"
                        className="text-base/[30px]  text-justify mt-[40px]"
                        dangerouslySetInnerHTML={{ __html: newsData?.data?.htmlCode || "" }}
                    />
                </div>

                <CommentSection commentData={commentData} />
            </div>
            <Footer />
        </>
    );
}