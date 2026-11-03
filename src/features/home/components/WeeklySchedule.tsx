import {SectionHeading} from '../../../shared';
import {WEEKLY_SCHEDULE} from '../data/homeContent';

export function WeeklySchedule() {
    return (
        <section className="section weekly-section">
            <SectionHeading title="주간 일정" />
            <div className="week">
                {WEEKLY_SCHEDULE.map(({day, lessons, time}) => (
                    <div key={day} className="day">
                        <span>{day}</span>
                        {lessons.map(lesson => (
                            <div key={lesson} className="lesson"><small>{time}</small>{lesson}</div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
