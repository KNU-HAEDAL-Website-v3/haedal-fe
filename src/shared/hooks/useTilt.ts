import {useEffect} from 'react';

const TILT_TARGETS = '.track, .news-card, .quick-links a, .stat, .card, .activities details, a.schedule-row, .join, .day';

function resetTilt(block: HTMLElement) {
    block.style.setProperty('--rx', '0deg');
    block.style.setProperty('--ry', '0deg');
}

// Blocks lean toward the cursor and carry a light that follows it.
export function useTilt() {
    useEffect(() => {
        const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let active: HTMLElement | null = null;

        function onPointerMove(event: PointerEvent) {
            const block = event.pointerType === 'mouse' ? (event.target as Element).closest?.<HTMLElement>(TILT_TARGETS) ?? null : null;
            if (active && active !== block) resetTilt(active);
            active = block;
            if (!block) return;
            const box = block.getBoundingClientRect();
            const x = (event.clientX - box.left) / box.width;
            const y = (event.clientY - box.top) / box.height;
            block.style.setProperty('--mx', `${x * 100}%`);
            block.style.setProperty('--my', `${y * 100}%`);
            if (motion.matches) return;
            // Wide rows tilt less so their far edge does not swing.
            const strength = Math.min(1, 320 / box.width) * 5;
            block.style.setProperty('--ry', `${(x - .5) * strength}deg`);
            block.style.setProperty('--rx', `${(.5 - y) * strength}deg`);
        }

        function onPointerLeave() {
            if (active) resetTilt(active);
        }

        document.addEventListener('pointermove', onPointerMove, {passive: true});
        document.addEventListener('pointerleave', onPointerLeave);
        return () => {
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerleave', onPointerLeave);
        };
    }, []);
}
