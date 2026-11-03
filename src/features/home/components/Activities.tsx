import {SectionHeading} from '../../../shared';
import {ACTIVITIES} from '../data/homeContent';

export function Activities() {
    return (
        <section className="section activities-section">
            <SectionHeading title="활동" />
            <div className="activities">
                {ACTIVITIES.map((activity, index) => (
                    <details key={activity.title} open={index === 0}>
                        <summary><span>{String(index + 1).padStart(2, '0')}</span>{activity.title}</summary>
                        <p>{activity.description}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
