import { LogoDetailsProps } from "./types";

export default function LogoDetails({ text, backgroundColor }: LogoDetailsProps) {
    return (
        <div className={`w-fit rounded-full bg-[${backgroundColor}] p-[10px] px-5 `}>
            <p className="font-normal text-2xl" dir="rtl">
                {text}
            </p>
        </div>
    );
}