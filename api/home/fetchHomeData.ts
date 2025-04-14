import { GetPage } from "../types/getPage";

const url = "home";
const type = "PAGE";

export const fetchHomeData = async (): Promise<GetPage> => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/client/web/getPage/${type}/${url}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch page data");
    }

    const data: GetPage = await response.json();
    console.table(data)
    return data;
};
