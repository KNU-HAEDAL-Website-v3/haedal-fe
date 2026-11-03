import {koreaToday, SectionHeading} from '../../../shared';
import {getUpcomingEvents} from '../../calendar';

export function UpcomingSchedule() {
    const events = getUpcomingEvents(koreaToday(), 2);
    return (
        <section className="section upcoming-section">
            <SectionHeading title="다가오는 일정" description="다음 모험에서 만나요." link={{href: '#calendar', label: '전체 일정 보기'}} />
            {events.length ? events.map(event => (
                <a key={event.day} className="schedule-row" href="#calendar">
                    <span className="date">{event.month + 1}월 {event.day}일</span>
                    <span>{event.title}</span>
                    <span className="place">{event.time} · {event.place}</span>
                </a>
            )) : (
                <p className="muted">새로운 일정이 등록되면 이곳에서 만나요.</p>
            )}
        </section>
    );
}
