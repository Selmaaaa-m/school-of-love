import HomePage from "@/pages/home/homePage";
import { GetPage } from "@/api/getPage"

export default async function Home() {

    const url = "home";
    const type = "PAGE"
    let data = undefined

    // let page: GetPage | undefined = undefined;



    try {
        console.log(process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/client/web/getPage/${type}/${url}`)
        const response = await fetch(
            process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/client/web/getPage/${type}/${url}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-cache",
            }
        );


        if (!response.ok) {
            // page = undefined
            throw new Error("Network response was not ok");
        }
        data = await response.json() as GetPage;

        // page = data
    } catch (err) {
        console.error(err)
    }

    return (
        <div className="w-full pt-[92px] pb-[85px] bg-gradient-to-b h-fit from-[#063532] to-black items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <HomePage data={data} />
        </div>
    );
}