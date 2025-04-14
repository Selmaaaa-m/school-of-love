import Image from "next/image";
import clock from "./icons/clock.svg";
import { Props } from "./types";
import { Play, Images } from "lucide-react";
import InnerHTML from "../innerHTML/innerHTML";

export default function FestivalInfoCard({ title, type }: Props) {

    return (
        <div className="panel w-[339px] h-[412px] bg-[#0075604D] rounded-[20px] border-[3px] border-[#003229] pt-[75px] flex flex-col justify-start items-center gap-4 cursor-pointer">
            {type === "image" ? (
                <Images size={64} strokeWidth={1.5} />
            ) : type === "video" ? (
                <Play
                    size={64}
                    strokeWidth={1.5}
                />
            ) : (
                <Image src={clock} alt="" />
            )}
            <InnerHTML
                style="font-normal text-2xl/[45px] text-center"
                details={title}
            />
        </div>
    );
}