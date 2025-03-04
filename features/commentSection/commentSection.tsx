'use client';
import { useState, useRef, useEffect } from "react";
import Comment from "@/components/comment/comment";
import Alert from "@/components/alert/alert";

export default function CommentSection() {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [postId, setPostId] = useState(0);  // Set the postId accordingly
    const [parentId, setParentId] = useState(0);  // Set the parentId accordingly
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
            return;
        }

        if (!emailRegex.test(email)) {
            setAlertMessage("لطفا ایمیل معتبر وارد کنید.");
            return;
        }

        try {
            const response = await fetch('/api/v1/client/web/createComment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    body: comment,
                    postId: postId,
                    parentId: parentId,
                    name: name,
                    email: email,
                }),
            });

            if (response.ok) {
                // Handle successful form submission
                console.log("Comment submitted:", { comment, name, email });
                // Clear the form
                setComment("");
                setName("");
                setEmail("");
                setAlertMessage(""); // Clear any previous alert message
            } else {
                // Handle error response
                setAlertMessage("مشکلی در ارسال دیدگاه به وجود آمده است.");
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            setAlertMessage("مشکلی در ارسال دیدگاه به وجود آمده است.");
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

                <div className="w-full mt-[30px] flex flex-row gap-10">
                    <input
                        type="text"
                        className="bg-transparent text-right flex-grow pb-[14px] caret-customGreen outline-none border-b border-[#797979] focus:border-customGreen"
                        placeholder="نام و نام خانوادگی..."
                        dir="rtl"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={100}
                    />
                    <input
                        type="email"
                        className="bg-transparent text-right flex-grow pb-[14px] caret-customGreen outline-none border-b border-[#797979] focus:border-customGreen"
                        placeholder="ایمیل"
                        dir="ltr"
                        value={email}
                        onInput={handleEmailInput} // Use onInput to filter invalid characters
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
                <Comment
                    name="امین آزاد"
                    date="۱۴۰۳/۱۱/۳۰"
                    content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                />
                <Comment
                    name="امین آزاد"
                    date="۱۴۰۳/۱۱/۳۰"
                    content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                />
            </div>

            {alertMessage && <Alert message={alertMessage} onClose={() => setAlertMessage("")} />}
        </div>
    );
}
