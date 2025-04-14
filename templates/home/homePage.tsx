import Logo from "@/components/logo/logo";
import Festival from "@/features/festival/festival";
import FestivalHighlights from "@/features/festivalHighlights/festivalHighlights";
import Footer from "@/features/footer/footer";
import MainEvents from "@/features/mainEvents/mainEvents";
import News from "@/features/news/news";
import Questions from "@/features/questions/questions";
import Supporters from "@/features/supporters/supporters";
import { GetPage } from "@/api/types/getPage"
import { GetPostList } from "@/api/types/getPostList";

export interface Props {
    data: GetPage | undefined;
}

export default async function HomePage() {

    let postListData = undefined

    try {
        const response = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/client/web/getPostList`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-cache",
            }
        );


        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        postListData = await response.json() as GetPostList;


    } catch (err) {
        console.error(err)
    }

    return (
        <>
            <Logo />
            <Questions />
            <Festival />
            <FestivalHighlights />
            <MainEvents />
            <Supporters />
            <News newsList={postListData || undefined} />
            <Footer />
        </>
    );
}
