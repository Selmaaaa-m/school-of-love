import ListItem from "../listItem/listItem";

const Section: React.FC<SectionProps> = ({ title, items, dotted }) => {
    return (
        <div className="mt-10">
            <p className="font-bold text-2xl/[50px] text-white">{title}</p>
            <ul className="flex flex-col">
                {items.map((item, index) => (
                    <ListItem key={index} text={item.text} subText={item.subText} dotted={dotted} />
                ))}
            </ul>
        </div>
    );
};

export default Section;