

export default function Comment({ name, date, content }: CommentProps) {
    return (
        <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-row gap-[15px]">
                <span className="font-bold text-xl/[35px]">{name}</span>
                <span className="font-normal text-[13px]/[30px]">{date}</span>
            </div>
            <p className="font-normal text-sm/[24px] text-justify">
                {content}
            </p>
        </div>
    );
}
