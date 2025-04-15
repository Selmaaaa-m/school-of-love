export type GetPage = {
    data: Data
}

type FilesValue = {
    file_name: string;
    url: string;
    key: string;
    mimeType: string;
};

export type KeyValues = {
    id: number;
    key: string;
    value: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    type: string;
    filesValue: FilesValue;
};

type Data = {
    id: number;
    title: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    keyValues: KeyValues[];
};