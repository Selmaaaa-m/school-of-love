import Topic from "@/components/topic/topic";
import CommentSection from "@/features/commentSection/commentSection";
import Footer from "@/features/footer/footer";
import { convertToJalali } from "@/utils/dateUtils";

import { GetPost } from "@/api/types/getPost";
import { GetComments } from "@/api/types/getCommentList";
import InnerHTML from "@/components/innerHTML/innerHTML";

export interface Data {
    newsData: GetPost | undefined
    commentData: GetComments | undefined
    slug: string
}

export default function NewsPage({ newsData, commentData, slug }: Data) {

    const date = newsData?.data.createdAt ? convertToJalali(newsData.data.createdAt) : '';
    const commentCount = commentData?.data.comment.length || 0;
    const detail = "معاون فرهنگی هنری سازمان بسیج مستضعفین گفت: امروز دشمن در حال جنگیدن با ما از طریق رسانه‌ها و فضای مجازی است؛ جنگی که به‌طور مستقیم بر افکار و اندیشه‌های مردم تأثیر می‌گذارد و روایتگری ابزاری قدرتمند برای مقابله با این جنگ نرم است.";

    return (
        <>
            <div className=" w-full px-[30px] md:px-[80px] lg:px-[142px] flex flex-col items-center !text-white justify-start">
                <Topic title={newsData?.data.title || ''} date={date} commentCount={commentCount} detail={detail} />
                <div>
                    <InnerHTML style="text-base/[30px] whitespace-break-spaces !text-justify mt-[40px] !text-white " details={newsData?.data?.htmlCode || ""} />
                </div>

                <CommentSection postId={newsData?.data.id} slug={slug} />
            </div>
            <Footer/>
        </>
    );
}