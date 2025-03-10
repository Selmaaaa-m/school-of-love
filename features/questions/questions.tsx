import { GetPage } from "@/api/getPage";

export interface Props {
    values: GetPage | undefined;
}

export default function Questions({ values }: Props) {

    const questionsTitle = values?.data.keyValues.find(item => item.key === 'q-title');
    const questionsOne = values?.data.keyValues.find(item => item.key === 'q1');
    const questionsTwo = values?.data.keyValues.find(item => item.key === 'q2');

    const text = [
        questionsOne?.value || "",
        questionsTwo?.value || "",
    ];

    return (
        <div className="w-full h-fit flex flex-col items-center gap-14 mt-40 px-[70px]" dir="rtl">
            <div className="text-[32px]/[56px]" dangerouslySetInnerHTML={{ __html: questionsTitle?.value || "" }} />
            <div className="flex h-fit w-full gap-20">
                {values ? text.map((value, index) => (
                    <div
                        key={index}
                        className="font-normal text-lg text-justify"
                        dangerouslySetInnerHTML={{ __html: value || "" }}
                    />
                )) :
                    <div className='w-full flex justify-center animate-pulse g-red-100' dir="ltr">
                        loading ...
                    </div>
                }
            </div>
        </div>
    );
}
