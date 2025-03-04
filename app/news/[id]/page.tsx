import { GetPost } from "@/api/getPost";
import NewsPage from "@/pages/news/newsPage";


export default async function News() {

    const url = "news"
    const type = "POST"
    let data = undefined
    // let page: GetPost | undefined

    try {
        const response = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/client/web/getPost/${type}/${url}`,
            {
                method: "GET",
            }
        );
        

        if (!response.ok) {
            // page = undefined
            throw new Error("Network response was not ok");
        }
        data = await response.json() as GetPost;
        // page = data
        
    } catch (err) {
        console.error(err)
    }

    return (
        <div className="w-full pt-[92px] pb-[85px] bg-gradient-to-b h-fit from-[#063532] to-black items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <NewsPage data={data} />
        </div>
    )
}