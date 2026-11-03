import type {ReactNode} from 'react';
import {ArrowIcon} from './PixelIcon';

interface SectionHeadingProps {
    title: string;
    description?: string;
    link?: {href: string; label: string};
    aside?: ReactNode;
}

export function SectionHeading({title, description, link, aside}: SectionHeadingProps) {
    return (
        <div className="section-heading">
            <div>
                <h2>{title}</h2>
                {description && <p>{description}</p>}
            </div>
            {link && <a href={link.href}>{link.label} <ArrowIcon /></a>}
            {aside}
        </div>
    );
}
