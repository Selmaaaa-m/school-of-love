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

    const pageData = data;

    return (
        <>
            <Logo />
            <Questions values={pageData || undefined} />
            <Festival values={pageData || undefined} />
            <FestivalHighlights values={pageData || undefined} />
            <MainEvents values={pageData || undefined} />
            <Supporters values={pageData || undefined} />
            <News values={pageData || undefined} />
            <Footer />
        </>
    );
}
