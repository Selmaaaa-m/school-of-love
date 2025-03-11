import React from 'react';

interface InnerHTMLProps {
    details: string;
    style?: string;
}

export default function InnerHTML({ details, style }: InnerHTMLProps) {
    return (
        <div dir='rtl' className={`ql-editor p-0 ${style ? style : ''} `} dangerouslySetInnerHTML={{ __html: details || "" }} />
    );
}