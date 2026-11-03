import type {ReactNode} from 'react';

interface PageHeadProps {
    eyebrow: string;
    title: string;
    description: string;
    children?: ReactNode;
}

export function PageHead({eyebrow, title, description, children}: PageHeadProps) {
    return (
        <div className="page-head">
            <span className="eyebrow pixel">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
        </div>
    );
}
