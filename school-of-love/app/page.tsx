import Logo from "@/components/logo/logo";
import Festival from "@/features/festival/festival";
import Questions from "@/features/questions/questions";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full pt-[92px] px-[70px] pb-[85px] bg-gradient-to-b h-[5000px] from-[#063532] to-black items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">

            <Logo />
            <Questions />
            <Festival />

        </div>
    );
}
