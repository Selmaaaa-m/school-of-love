interface Tab {
    title: string;
    content: JSX.Element;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: number;
    setActiveTab: (index: number) => void;
    fade: boolean;
    setFade: (fade: boolean) => void;
}