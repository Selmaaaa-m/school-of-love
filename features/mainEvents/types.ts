export interface Tab {
    title: string;
    content: string;
}

import { GetPage } from "@/api/getPage";

export interface Props {
    values: GetPage | undefined
}