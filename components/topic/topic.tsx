import Image from "next/image";
import calender from './icons/calender.svg';
import comment from './icons/comment.svg';
import { TopicProps } from "./types";

const Topic: React.FC<TopicProps> = ({ title, date, commentCount }) => {
    return (
        <div className="w-full text-center pt-[65px] flex flex-col justify-start items-center gap-5">

            <h1 className="font-bold text-4xl">
                {title}
            </h1>
            <div className="w-fit flex gap-[30px]" dir="rtl">
                <div className="bg-[#40FFC380] rounded-[30px] w-fit h-[30px] flex justify-between px-[9px] gap-[5px]">
                    <Image src={calender} alt={"دسته بندی"} />
                    <span className="font-light text-base/[30px]">
                        دسته بندی
                    </span>
                </div>
                <div className="w-fit flex justify-between gap-[5px]">
                    <Image src={calender} alt={"تاریخ"} />
                    <span className="font-light text-base/[30px]">
                        {date}
                    </span>
                </div>
                <div className="w-fit flex justify-between gap-[5px]">
                    <Image src={comment} alt={"تعداد نظرات"} />
                    <span className="font-light text-base/[30px]">
                        {commentCount}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Topic;