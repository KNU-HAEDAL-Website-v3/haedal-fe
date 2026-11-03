import {createContext, useCallback, useContext, useMemo, useRef, useState, type MouseEvent, type ReactNode} from 'react';

interface ModalApi {
    open: (content: ReactNode) => void;
    close: () => void;
}

const ModalContext = createContext<ModalApi>({open: () => {}, close: () => {}});

export function ModalProvider({children}: {children: ReactNode}) {
    const dialog = useRef<HTMLDialogElement>(null);
    const [content, setContent] = useState<ReactNode>(null);

    const open = useCallback((next: ReactNode) => {
        setContent(next);
        if (!dialog.current?.open) dialog.current?.showModal();
    }, []);
    const close = useCallback(() => dialog.current?.close(), []);
    const api = useMemo(() => ({open, close}), [open, close]);

    function handleClick(event: MouseEvent<HTMLDialogElement>) {
        const target = event.target as HTMLElement;
        // In-page links navigate away from the dialog's context.
        if (target.closest('a[href^="#"]')) return close();
        if (target !== dialog.current) return;
        const box = target.getBoundingClientRect();
        const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
        if (outside) close();
    }

    return (
        <ModalContext.Provider value={api}>
            {children}
            <dialog id="modal" ref={dialog} onClick={handleClick} onClose={() => setContent(null)}>
                <button className="close" aria-label="닫기" onClick={close}>×</button>
                <div id="modal-content">{content}</div>
            </dialog>
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);
