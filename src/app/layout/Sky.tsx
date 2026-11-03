import {useRef} from 'react';
import {useParallaxSky} from '../../shared';

export function Sky() {
    const sky = useRef<HTMLDivElement>(null);
    useParallaxSky(sky);

    return (
        <div className="sky" aria-hidden="true" ref={sky}>
            <div className="sky-layer sky-photo" data-depth="0.08" data-tilt="10" />
            <div className="sky-layer sky-stars" data-depth="0.16" data-tilt="18" data-stars="far" />
            <div className="sky-layer sky-stars" data-depth="0.38" data-tilt="32" data-stars="mid" />
            <div className="sky-layer sky-stars" data-depth="0.72" data-tilt="54" data-stars="near" />
            <div className="sky-veil" />
        </div>
    );
}
