import {useEffect, type RefObject} from 'react';

type StarTile = {size: number; count: number; px: number; colors: string[]; sparkle?: boolean};

const STAR_TILES: Record<string, StarTile> = {
    far: {size: 360, count: 90, px: 1, colors: ['#c9d3ff', '#8fa3e8', '#ffffff']},
    mid: {size: 520, count: 34, px: 2, colors: ['#e4e9ff', '#a9b9ff', '#ffe7b0']},
    near: {size: 760, count: 10, px: 2, colors: ['#ffffff', '#ffd98e'], sparkle: true}
};

// Seeded random keeps the star field identical on every visit.
function seeded(seed: number) {
    return () => (seed = (seed * 16807) % 2147483647) / 2147483647;
}

function paintStars(name: string) {
    const tile = STAR_TILES[name];
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = tile.size;
    const ctx = canvas.getContext('2d')!;
    const rand = seeded(name.length * 7919 + tile.size);
    for (let i = 0; i < tile.count; i++) {
        const x = Math.floor(rand() * (tile.size - 8)) + 4;
        const y = Math.floor(rand() * (tile.size - 8)) + 4;
        ctx.globalAlpha = .35 + rand() * .65;
        ctx.fillStyle = tile.colors[Math.floor(rand() * tile.colors.length)];
        ctx.fillRect(x, y, tile.px, tile.px);
        if (tile.sparkle) {
            // Four-point pixel sparkle: a plus with a bright core.
            ctx.globalAlpha *= .55;
            ctx.fillRect(x - tile.px * 2, y, tile.px * 2, tile.px);
            ctx.fillRect(x + tile.px, y, tile.px * 2, tile.px);
            ctx.fillRect(x, y - tile.px * 2, tile.px, tile.px * 2);
            ctx.fillRect(x, y + tile.px, tile.px, tile.px * 2);
        }
    }
    return canvas.toDataURL();
}

// Depth layers: photo drifts slowly, pixel stars travel faster the closer they are.
export function useParallaxSky(skyRef: RefObject<HTMLElement | null>) {
    useEffect(() => {
        const sky = skyRef.current;
        if (!sky) return;
        const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const layers = [...sky.querySelectorAll<HTMLElement>('.sky-layer')];

        for (const layer of layers) {
            const name = layer.dataset.stars;
            if (!name) continue;
            const size = STAR_TILES[name].size;
            layer.style.backgroundImage = `url(${paintStars(name)})`;
            layer.style.backgroundSize = `${size}px ${size}px`;
            layer.style.inset = `-${size}px`;
            layer.dataset.tile = String(size);
        }

        const pointer = {x: 0, y: 0, tx: 0, ty: 0};
        let frame = 0;

        function render() {
            frame = 0;
            const still = motion.matches;
            pointer.x += (pointer.tx - pointer.x) * .08;
            pointer.y += (pointer.ty - pointer.y) * .08;
            const scroll = window.scrollY;
            const travel = Math.max(1, document.documentElement.scrollHeight - innerHeight);
            for (const layer of layers) {
                const depth = still ? 0 : Number(layer.dataset.depth);
                const tilt = still ? 0 : Number(layer.dataset.tilt);
                const tile = Number(layer.dataset.tile ?? 0);
                // Stars loop inside one tile; the photo moves by page progress so it never runs out.
                const y = tile ? -((scroll * depth) % tile) : -(scroll / travel) * innerHeight * depth * 2.4;
                layer.style.transform = `translate3d(${pointer.x * tilt}px, ${y + pointer.y * tilt}px, 0)`;
            }
            const hero = document.querySelector<HTMLElement>('.hero-copy');
            if (hero) {
                const lift = still ? 0 : Math.min(scroll, innerHeight);
                hero.style.transform = `translate3d(0, ${lift * .32}px, 0)`;
                hero.style.opacity = still ? '' : String(Math.max(0, 1 - lift / (innerHeight * .75)));
            }
            if (Math.abs(pointer.tx - pointer.x) > .001 || Math.abs(pointer.ty - pointer.y) > .001) request();
        }

        function request() {
            if (!frame) frame = requestAnimationFrame(render);
        }

        function onPointerMove(event: PointerEvent) {
            if (event.pointerType !== 'mouse') return;
            pointer.tx = event.clientX / innerWidth - .5;
            pointer.ty = event.clientY / innerHeight - .5;
            request();
        }

        window.addEventListener('scroll', request, {passive: true});
        window.addEventListener('resize', request);
        window.addEventListener('pointermove', onPointerMove, {passive: true});
        motion.addEventListener('change', request);
        request();
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', request);
            window.removeEventListener('resize', request);
            window.removeEventListener('pointermove', onPointerMove);
            motion.removeEventListener('change', request);
        };
    }, [skyRef]);
}
