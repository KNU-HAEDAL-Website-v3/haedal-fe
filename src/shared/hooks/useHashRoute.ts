import {useEffect, useState} from 'react';

const SKIP_TARGET = 'app';

function currentPath() {
    return location.hash.slice(1) || 'home';
}

// Hash routing keeps the site deployable as static files. The skip link (#app) only moves focus.
export function useHashRoute() {
    const [path, setPath] = useState(() => (currentPath() === SKIP_TARGET ? 'home' : currentPath()));

    useEffect(() => {
        function onHashChange() {
            const next = currentPath();
            if (next === SKIP_TARGET) document.getElementById(SKIP_TARGET)?.focus();
            else setPath(next);
        }
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return path;
}
