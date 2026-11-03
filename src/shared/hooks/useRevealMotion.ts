import {useEffect, type RefObject} from 'react';

const SECTIONS = '.quick-start, .section, .join, .page-head, .panel, .detail';
const GROUPS = '.track-grid, .quick-links, .news-grid, .stats, .cards';

// Observe each route's content; never hide content when JavaScript is unavailable.
export function useRevealMotion(rootRef: RefObject<HTMLElement | null>) {
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;
        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const revealObserver = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        }, {threshold: 0.08});

        function reveal(element: Element) {
            element.classList.add('reveal');
            if (motionPreference.matches) element.classList.add('is-visible');
            else revealObserver.observe(element);
        }

        function prepareMotion() {
            revealObserver.disconnect();
            root!.querySelectorAll(SECTIONS).forEach(reveal);
            root!.querySelectorAll(GROUPS).forEach(group => {
                [...group.children].forEach((item, index) => {
                    (item as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`);
                    reveal(item);
                });
            });
        }

        // Routes, searches and filters replace markup; new content joins the same motion system.
        let motionFrame = 0;
        const mutationObserver = new MutationObserver(() => {
            cancelAnimationFrame(motionFrame);
            motionFrame = requestAnimationFrame(prepareMotion);
        });
        mutationObserver.observe(root, {childList: true, subtree: true});

        // Keyboard navigation must reveal a focused control immediately.
        function onFocusIn(event: FocusEvent) {
            let node = event.target as HTMLElement | null;
            while (node && node !== root) {
                if (node.classList.contains('reveal')) node.classList.add('is-visible');
                node = node.parentElement;
            }
        }

        motionPreference.addEventListener('change', prepareMotion);
        root.addEventListener('focusin', onFocusIn);
        prepareMotion();
        return () => {
            cancelAnimationFrame(motionFrame);
            mutationObserver.disconnect();
            revealObserver.disconnect();
            motionPreference.removeEventListener('change', prepareMotion);
            root.removeEventListener('focusin', onFocusIn);
        };
    }, [rootRef]);
}
