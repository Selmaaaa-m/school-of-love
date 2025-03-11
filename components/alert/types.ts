export interface AlertProps {
    message: string;
    onClose: () => void;
    type: 'success' | 'error'
}