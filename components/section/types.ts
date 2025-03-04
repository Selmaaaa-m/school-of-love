export interface SectionProps {
    title: string;
    items: { text: string; subText?: string }[];
    dotted?: boolean;
}