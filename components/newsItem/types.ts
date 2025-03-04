import { StaticImageData } from "next/image";

export interface NewsItemProps {
    id: string;
    imageSrc: StaticImageData;
    text: string;
}