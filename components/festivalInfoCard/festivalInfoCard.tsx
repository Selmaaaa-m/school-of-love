import Image from "next/image";
import clock from "./icons/clock.svg"

export default function FestivalInfoCard() {

    return (
        <div className="w-[339px] h-[412px] bg-[#0075604D] rounded-[20px] border-[3px] border-[#003229] pt-[75px] flex flex-col justify-start items-center gap-4">
            <Image src={clock} alt={""} />
            <p className="font-normal text-2xl/[56px]">زمان</p>
        </div>
    )
}