'use client'
import Image from 'next/image';
import twitter from "./icons/twitter.svg"
import instagram from './icons/instagram.svg'
import telegram from './icons/telegram.svg'
import linkedIn from './icons/linkedIn.svg'
import faceBook from './icons/faceBook.svg'
import logo from '../../public/images/logo-footer.png'
import { useQuery } from '@tanstack/react-query';
import { fetchHomeData } from '@/api/home/fetchHomeData';
export default function Footer() {
    const { data: pageData } = useQuery({
        queryKey: ["pageData"],
        queryFn: () => fetchHomeData(),
    });

    const footerImg = pageData?.data.keyValues.find(item => item.key === 'footer-logo');
    console.log(footerImg?.filesValue.url);



    return (
        <div className='w-full flex flex-col justify-start mt-[177px] px-[37px]' dir='rtl'>
            <Image src={footerImg?.filesValue.url || logo} alt={'جشنواره فرهنگی هنری مدرسه عشق'} height={246} width={780} />
            <footer >
                <div className='w-full flex justify-center mt-[78px] gap-[10px]'>
                    <div className='w-[45px] h-[45px] bg-[#40FFC31A] rounded-full flex justify-center '>
                        <Image src={twitter} alt={''} />
                    </div>
                    <Image src={instagram} alt={''} />
                    <div className='w-[45px] h-[45px] bg-[#40FFC31A] rounded-full flex justify-center '>
                        <Image src={telegram} alt={''} />
                    </div>
                    <div className='w-[45px] h-[45px] bg-[#40FFC31A] rounded-full flex justify-center '>
                        <Image src={linkedIn} alt={''} />
                    </div>
                    <div className='w-[45px] h-[45px] bg-[#40FFC31A] rounded-full flex justify-center '>
                        <Image src={faceBook} alt={''} />
                    </div>
                </div>
            </footer>
        </div>
    )
}