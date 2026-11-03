import {useEffect, useRef, useState} from 'react';
import {readStorage, writeStorage} from '../lib/storage';
import {useToast} from '../components/Toast';

// State mirrored to localStorage; when storage is unavailable it keeps working in memory.
export function useStoredState<T>(key: string, fallback: T | (() => T)) {
    const toast = useToast();
    const [value, setValue] = useState<T>(() => readStorage(key, typeof fallback === 'function' ? (fallback as () => T)() : fallback));
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (!writeStorage(key, value)) toast('저장 공간을 사용할 수 없어 현재 화면에만 반영됩니다.');
    }, [key, value, toast]);

    return [value, setValue] as const;
}
