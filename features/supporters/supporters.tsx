import InnerHTML from "@/components/innerHTML/innerHTML";
import { Props } from "./types";

export default function Supporters({ values }: Props) {
    const supportersTitle = values?.data.keyValues.find(item => item.key === 'supporters-title');

    return (
        <div className="w-full mt-[267px] text-center" dir="rtl">
            <InnerHTML style="text-center text-4xl/[63px]" details={supportersTitle?.value || ""} />
            <div className="h-[336px]">
            </div>
        </div>
    );
}
