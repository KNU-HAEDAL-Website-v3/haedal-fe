import {createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode} from 'react';

const ToastContext = createContext<(message: string) => void>(() => {});

export function ToastProvider({children}: {children: ReactNode}) {
    const [message, setMessage] = useState('');
    const [visible, setVisible] = useState(false);
    const timer = useRef<number>(undefined);

    const toast = useCallback((text: string) => {
        setMessage(text);
        setVisible(true);
        clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setVisible(false), 3200);
    }, []);

    useEffect(() => () => clearTimeout(timer.current), []);

    return (
        <ToastContext.Provider value={toast}>
            {children}
            <div id="toast" role="status" style={{display: visible ? 'block' : 'none'}}>{message}</div>
        </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);
