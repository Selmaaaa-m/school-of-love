import { LogoDetailsProps } from "./types";

const backgroundColorClasses: { [key: string]: string } = {
    gold: "bg-customGold",
    yellow: "bg-customYellow"
};

export default function LogoDetails({ text, backgroundColor }: LogoDetailsProps) {

    const bgClass = backgroundColorClasses[backgroundColor] || "bg-customYellow"; // Default to gray if color not found

    return (
        <div className={`w-fit h-[50px
        ] rounded-full ${bgClass} p-[10px] px-5 `}>
            <p className="font-normal text-2xl" dir="rtl">
                {text}
            </p>
        </div>
    );
}