import { useEffect } from "react";
import { AlertProps } from './types';

export default function Alert({ message, onClose, type }: AlertProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000); // Auto close after 3 seconds
        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div dir="rtl" className={`fixed top-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg flex items-center space-x-4 animate-slide-in`}>
            <button onClick={onClose} className="mx-4 font-bold">X</button>
            <span>{message}</span>
        </div>
    );
}
