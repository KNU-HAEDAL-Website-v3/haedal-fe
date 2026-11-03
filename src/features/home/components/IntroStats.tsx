import {SectionHeading} from '../../../shared';
import {STATS} from '../data/homeContent';

export function IntroStats() {
    return (
        <section className="section intro-section">
            <SectionHeading title="해달" />
            <div className="stats">
                {STATS.map(stat => (
                    <div key={stat.label} className="stat">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
