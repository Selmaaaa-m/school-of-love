import FestivalInfoCard from "@/components/festivalInfoCard/festivalInfoCard";
import { Props } from './types';


export default function FestivalHighlights({ values }: Props) {

    const festivalTitle = values?.data.keyValues.find(item => item.key === 'festival-highlights-title');


    return (
        <div className="container w-full pr-[60px] overflow-scroll scrollbar-hide scroll-smooth min-w-full mt-[246px] b-purple-800 flex items-center justify-start gap-11" dir="rtl">

            <div className=" text-4xl/[63px] min-w-[429px]" dangerouslySetInnerHTML={{ __html: festivalTitle?.value || "" }} />

            <div className="w-fit flex flex-row gap-7 pl-[60px]">
                <FestivalInfoCard />
                <FestivalInfoCard />
                <FestivalInfoCard />
                <FestivalInfoCard />
            </div>
        </div>
    );
}