import {Fragment, useEffect, useRef} from 'react';
import {ModalProvider, ToastProvider, useHashRoute, useRevealMotion, useTilt} from '../shared';
import {Footer} from './layout/Footer';
import {Header} from './layout/Header';
import {Sky} from './layout/Sky';
import {resolveRoute} from './router/routes';
import '../shared/styles/base.css';
import '../shared/styles/style.css';

function Shell() {
    const path = useHashRoute();
    const main = useRef<HTMLElement>(null);
    const route = resolveRoute(path);
    useRevealMotion(main);
    useTilt();

    useEffect(() => {
        document.title = `해달 · ${route.title}`;
        if (route.scrollTarget) {
            const target = route.scrollTarget;
            requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
        } else {
            window.scrollTo(0, 0);
        }
    }, [path, route.title, route.scrollTarget]);

    return (
        <>
            <Sky />
            <a className="skip-link" href="#app">본문으로 바로가기</a>
            <Header section={route.section} />
            <main id="app" tabIndex={-1} ref={main}>
                {/* Keyed by path so each visit starts with fresh filters and form state. */}
                <Fragment key={path}>{route.element}</Fragment>
            </main>
            <Footer />
        </>
    );
}

export default function App() {
    return (
        <ToastProvider>
            <ModalProvider>
                <Shell />
            </ModalProvider>
        </ToastProvider>
    );
}
