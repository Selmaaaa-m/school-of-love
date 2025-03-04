type Data = {
    id: number;
    title: string;
    url: string;
    createdAt: string; // Date-time as string
    updatedAt: string; // Date-time as string
    htmlCode: string;
};

export type GetPost = {
    data: Data;
};  