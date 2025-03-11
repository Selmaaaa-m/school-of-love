type Data = {
    id: number;
    title: string;
    url: string;
    createdAt: string; // Date-time as string
    updatedAt: string; // Date-time as string
    htmlCode: string;
    files: {url : string}[]

};

export type GetPostList = {
    data: Data[];
};
