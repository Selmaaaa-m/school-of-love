import InnerHTML from "../innerHTML/innerHTML";
import { TabsProps } from "./types";


const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab, setFade }) => {
    const handleTabClick = (index: number) => {
        setFade(true);
        setTimeout(() => {
            setActiveTab(index);
            setFade(false);
        }, 200); // Match the duration of the transition
    };

    return (
        <div className="w-full md:w-fit max-w-4xl md:px-0 px-[10px] overflow-scroll scrollbar-hide mt-[63px] flex flex-col justify-start items-start">
            <div className="w-fit flex gap-[10px] md:gap-[30px] order-b-2 order-gray-300">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`h-[60px] min-w-[205px] w-fit rounded-[30px] px-[23px] cursor-pointer flex items-center justify-center font-bold text-base/[28px] text-[#FFFFFF] border transition-colors duration-200
                            ${activeTab === index ?
                                'bg-customGreen border-customGreen text-[#FFFFFF]'
                                : 'border border-[#27674B]'
                            }`}
                        onClick={() => handleTabClick(index)}
                    >
                        <InnerHTML style="w-fit h-fit text-center !cursor-pointer" details={tab.title || "" } />

                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;