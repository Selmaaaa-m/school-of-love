interface Tab {
    title: string;
    content: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    fade: boolean;
    setFade: (fade: boolean) => void;
}