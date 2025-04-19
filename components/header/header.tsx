import Image from "next/image";
import logo from '../../public/images/header-logo.png'
import Link from "next/link";

export default function Header() {

    return (
        <div className="fixed w-full top-6 left-1/2 -translate-x-1/2 max-w-[671px] h-[80px] bg-[#FFFFFFE5] rounded-[30px] flex justify-between items-center pr-[26px] pl-[10px] z-50" dir="rtl">
            <div className="flex gap-[10px] items-center">
                <Image src={logo} alt={"مدرسه عشق"} />
                <span className="text-black font-normal text-base">
                    فرصت ارسال آثار از 1 بهمن تا 25 اردیبهشت
                </span>
            </div>
            <Link href="https://festival8.madreseheshgh.ir/login" className="w-full max-w-[161px] bg-customYellow h-[50px] rounded-full flex justify-center items-center">
                <span className="font-normal text-sm text-black">
                    شرکت در جشنواره
                </span>
            </Link>
        </div>
    )
}