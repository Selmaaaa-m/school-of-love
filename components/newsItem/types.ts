import { StaticImageData } from "next/image";

export interface NewsItemProps {
    imageSrc: StaticImageData;
    text: string;
    url: string;
}