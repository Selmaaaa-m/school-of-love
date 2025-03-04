export type GetPage = {
    data: Data
}

type FilesValue = {
    url: string;
    key: string;
};

export type KeyValues = {
    id: number;
    key: string;
    value: string;
    name: string;
    description: string;
    createdAt: string; // Date-time as string
    updatedAt: string; // Date-time as string
    type: string;
    filesValue: FilesValue[];
};

type Data = {
    id: number;
    title: string;
    url: string;
    createdAt: string; // Date-time as string
    updatedAt: string; // Date-time as string
    keyValues: KeyValues[];
};

