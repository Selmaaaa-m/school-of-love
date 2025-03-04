import Logo from "@/components/logo/logo";
import Festival from "@/features/festival/festival";
import FestivalHighlights from "@/features/festivalHighlights/festivalHighlights";
import Footer from "@/features/footer/footer";
import MainEvents from "@/features/mainEvents/mainEvents";
import News from "@/features/news/news";
import Questions from "@/features/questions/questions";
import Supporters from "@/features/supporters/supporters";

import { GetPage } from "@/api/getPage"

export interface Props {
    data: GetPage | undefined;
}

export default function HomePage({ data }: Props) {
    if (!data) {
        return <div>Loading...</div>;
    }
    const pageData = data;

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
    );
}
