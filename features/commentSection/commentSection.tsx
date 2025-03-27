'use client';
import { useState, useRef, useEffect } from "react";
import Comment from "@/components/comment/comment";
import Alert from "@/components/alert/alert";
import { Props } from "./types";
import { convertToJalali } from "@/utils/dateUtils";

export default function CommentSection({ commentData, postId }: Props) {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState<"success" | "error">("error");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const filteredValue = value.replace(/[^a-zA-Z0-9._%+-@]/g, ''); // Only allow valid characters
        setEmail(filteredValue);
    };    

    const handleSubmit = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!comment || !name || !email) {
            setAlertMessage("لطفا همه فیلد ها را پر کنید.");
            setAlertType("error");
            return;
        }

        if (!emailRegex.test(email)) {
            setAlertMessage("لطفا ایمیل معتبر وارد کنید.");
            setAlertType("error");
            return;
        }

        try {
            const response = await fetch( process.env.NEXT_PUBLIC_BASE_URL + '/api/v1/client/comment/createComment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    body: comment,
                    id: postId,
                    parentId: 0,
                    name: name,
                    email: email,
                    type: 'POST'
                }),
            });
            
            if (response.ok) {
                console.log("Comment submitted:", { comment, name, email });
                setAlertMessage('دیدگاه شما با موفقیت ثبت شد');
                setAlertType("success");
                setComment("");
                setName("");
                setEmail("");
            } else {
                setAlertMessage("مشکلی در ارسال دیدگاه به وجود آمده است.");
                setAlertType("error");
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            setAlertMessage("مشکلی در ارسال دیدگاه به وجود آمده است.");
            setAlertType("error");
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [comment]);

    return (
        <div className="w-full g-red-900 flex flex-col justify-start items-center mt-[77px]" dir="rtl">
            <span className="font-medium text-2xl/[42px]">دیدگاه</span>

            <div className="w-full mt-[69px]">
                <textarea
                    ref={textareaRef}
                    className="w-full scrollbar-hide bg-transparent text-right pb-[14px] caret-customGreen outline-none border-b border-[#797979] focus:border-customGreen resize-none"
                    placeholder=" دیدگاه خود را بنویسید ..."
                    dir="rtl"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    maxLength={3000}
                    rows={1}
                />

                <div className="w-full mt-[30px] flex flex-col md:flex-row gap-10">
                    <input
                        type="text"
                        className="bg-transparent text-right f
                        flex-grow pb-[14px] caret-customGreen outline-none border-b border-[#797979] focus:border-customGreen"
                        placeholder="نام و نام خانوادگی..."
                        alt="name"
                        dir="rtl"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={100}
                    />
                    <input
                        type="email"
                        className="bg-transparent text-right flex-grow pb-[14px] caret-customGreen outline-none border-b border-[#797979] focus:border-customGreen"
                        placeholder="ایمیل"
                        alt="email"
                        dir="ltr"
                        value={email}
                        onInput={handleEmailInput}
                        maxLength={100}
                    />
                    <button
                        className="w-[156px] h-[40px] bg-customGreen rounded-full flex-shrink-0"
                        onClick={handleSubmit}
                    >
                        ثبت دیدگاه
                    </button>
                </div>
            </div>

            {/* comments */}
            <div className="w-full mt-[140px] flex flex-col gap-10">
                {
                    commentData && commentData.data.comment.map(item => (
                        <Comment
                            name={item.name || item.firstname + ' ' + item.lastname}
                            date={convertToJalali(item.createdAt)}
                            content={item.body} />

                    ))
                }
            </div>

            {alertMessage && <Alert message={alertMessage} onClose={() => setAlertMessage("")} type={alertType} />}
        </div>
    );
}
