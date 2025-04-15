import { GetPostList } from "@/api/getPostList";
import { GetPage } from "@/api/getPage";

export interface Props {
    newsList: GetPostList | undefined
    values: GetPage | undefined
}
