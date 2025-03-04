interface Tab {
    title: string;
    content: string;
}

export interface TabsProps {
    tabs: Tab[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    fade: boolean;
    setFade: (fade: boolean) => void;
}