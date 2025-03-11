import { GetComments } from "@/api/getCommentList";

export interface Props {
    commentData: GetComments | undefined;
    postId: number | undefined;
}