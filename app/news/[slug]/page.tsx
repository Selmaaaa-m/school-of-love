import { GetComments } from "@/api/getCommentList";
import { GetPost } from "@/api/getPost";
import NewsPage from "@/templates/news/newsPage";


export default async function News({
    params,
}: {
    params: { slug: string }
}) {


    const type = "POST"
    let newsData = undefined
    let commentData = undefined


    try {
        const response = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/client/web/getPost/${type}/${params.slug}`,
            {
                method: "GET",
                cache: "no-cache",
                next: {
                    revalidate: 0
                }
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        newsData = await response.json() as GetPost;

    } catch (err) {
        console.error(err)
    }

    try {
        const response = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/client/web/getCommentList/${type}/${params.slug}`,
            {
                method: "GET",
                cache: "no-cache",
                next: {
                    revalidate: 0
                }
            },
        );


        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        commentData = await response.json() as GetComments;
        

    } catch (err) {
        console.error(err)
    }


    return (
        <div className="w-full pt-[92px] pb-[85px] bg-gradient-to-b h-fit from-[#063532] to-black items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <NewsPage newsData={newsData} commentData={commentData} slug={params.slug} />
        </div>
    )
}