import Image from 'next/image';
import angle from './icons/angle.svg'
import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({ text, subText, dotted }) => {
    return (
        <li className="flex flex-row gap-x-[18px] items-center">
            {dotted ? <div className='w-[6px] h-[6px] bg-white rounded-full '></div> :
                <Image src={angle} alt="" />
            }
            <p className="font-bold text-xl/[50px] text-white">
                {text}
                {subText && <span className="font-light text-xl/[50px] text-white"> {subText}</span>}
            </p>
        </li>
    );
};

export default ListItem;