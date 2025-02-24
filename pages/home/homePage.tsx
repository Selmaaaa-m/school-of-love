import Logo from "@/components/logo/logo";
import Festival from "@/features/festival/festival";
import FestivalHighlights from "@/features/festivalHighlights/festivalHighlights";
import Footer from "@/features/footer/footer";
import MainEvents from "@/features/mainEvents/mainEvents";
import News from "@/features/news/news";
import Questions from "@/features/questions/questions";
import Supporters from "@/features/supporters/supporters";

export default function HomePage() {

    return (
        <>
            <Logo />
            <Questions />
            <Festival />
            <FestivalHighlights />
            <MainEvents />
            <Supporters />
            <News />
            <Footer />
        </>
    )
}