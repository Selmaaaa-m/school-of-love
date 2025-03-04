

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab, fade, setFade }) => {
    const handleTabClick = (index: number) => {
        setFade(true);
        setTimeout(() => {
            setActiveTab(index);
            setFade(false);
        }, 200); // Match the duration of the transition
    };

    return (
        <div className="w-fit max-w-4xl mt-[63px] flex flex-col justify-start items-start">
            <div className="w-fit flex gap-[30px] order-b-2 order-gray-300">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`h-[60px] min-w-[205px] rounded-[30px] px-[23px] font-bold text-base/[28px] text-[#FFFFFF] border transition-colors duration-200
                            ${activeTab === index ?
                                'bg-customGreen border-customGreen text-[#FFFFFF]'
                                : 'border border-[#27674B]'
                            }`}
                        onClick={() => handleTabClick(index)}
                    >
                        <div className="" dangerouslySetInnerHTML={{ __html: tab.title || "" }} />

                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;