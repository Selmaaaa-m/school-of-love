import Logo from "@/components/logo/logo";
import Festival from "@/features/festival/festival";
import FestivalHighlights from "@/features/festivalHighlights/festivalHighlights";
import Footer from "@/features/footer/footer";
import MainEvents from "@/features/mainEvents/mainEvents";
import News from "@/features/news/news";
import Questions from "@/features/questions/questions";
import Supporters from "@/features/supporters/supporters";
import { Props } from "./types";
export default async function HomePage(data: Props) {
    const pageData = data.data

    // let resData = undefined;
    // let page: GetPost | undefined = undefined;
    // const url = "new"
    // const type = "POST"

    // try {
    //     const response = await fetch(
    //         process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/client/web/getPost/${type}/${url}`,
    //         {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     );

    //     console.log("--------------------------------");
        
    //     console.log("get post response: ", response);
        

    //     if (!response.ok) {
    //         page = undefined
    //         throw new Error("Network response was not ok");
    //     }
    //     resData = await response.json() as GetPost;

    //     console.log(resData);
        
    //     page = resData
    // } catch (err) {
    //     console.error(err)
    // }

    // console.log("post info: ", data);


    return (
        <>
            <Logo />
            <Questions values={pageData} />
            <Festival values={pageData} />
            <FestivalHighlights values={pageData} />
            <MainEvents values={pageData} />
            <Supporters values={pageData} />
            <News values={pageData} />
            <Footer />
        </>
    )
}