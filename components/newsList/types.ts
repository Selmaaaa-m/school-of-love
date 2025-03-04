import { StaticImageData } from "next/image";

export interface NewsListProps {
    allNewsItems: Array<{ id: string; imageSrc: StaticImageData; text: string }>;
}