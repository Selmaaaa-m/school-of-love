type User = {
    firstName: string;
    lastName: string;
};

type Reply = {
    id: number;
    body: string;
    user: User;
    email: string | null;
    name: string | null;
    parentId: number | null;
    createdAt: string; // Date-time as string
    updatedAt: string; // Date-time as string
};

type Comment = {
    id: number;
    body: string;
    firstname: string;
    lastname: string;
    email: string | null;
    name: string | null;
    parentId: number | null;
    createdAt: string; // Date-time as string
    updatedAt: string; // Date-time as string
    user: User;
    replies: Reply[];
};

type Data = {
    comment: Comment[];
};

export type GetComments = {
    data: Data;
};
