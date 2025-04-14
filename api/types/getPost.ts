type Data = {
    id: number;
    title: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    htmlCode: string;
};

export type GetPost = {
    data: Data;
};