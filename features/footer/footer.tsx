
import logo from '@/public/images/footer-logo.png';
import Image from 'next/image';
import twitter from "./icons/twitter.svg"
import instagram from './icons/instagram.svg'
import telegram from './icons/telegram.svg'
import linkedIn from './icons/linkedIn.svg'
import faceBook from './icons/faceBook.svg'
export default function Footer() {

    return (
        <div className='w-full flex flex-col justify-start mt-[177px] px-[37px]' dir='rtl'>
            <Image src={logo} alt={'جشنواره فرهنگی هنری مدرسه عشق'} width={780} />
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