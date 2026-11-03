import {QUICK_LINKS} from '../data/homeContent';

export function QuickLinks() {
    return (
        <section id="explore" className="quick-start" aria-labelledby="quick-title">
            <div className="quick-heading"><h2 id="quick-title">바로가기</h2></div>
            <div className="quick-links">
                {QUICK_LINKS.map((link, index) => (
                    <a key={link.href} href={link.href}>
                        <span className="quick-number pixel">{String(index + 1).padStart(2, '0')}</span>
                        <strong>{link.label}</strong>
                    </a>
                ))}
            </div>
        </section>
    );
}
