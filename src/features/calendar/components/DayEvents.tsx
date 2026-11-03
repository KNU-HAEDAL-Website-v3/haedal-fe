import {getEvent} from '../api/events';

interface DayEventsProps {
    year: number;
    month: number;
    day: number;
}

export function DayEvents({year, month, day}: DayEventsProps) {
    const event = getEvent(year, month, day);
    return (
        <section className="panel">
            <h2 style={{fontSize: 20}}>선택한 날짜의 일정</h2>
            <p className="muted">{year}년 {month + 1}월 {day}일</p>
            <div aria-live="polite">
                {event ? (
                    <div className="schedule-row">
                        <span className="date">{event.time}</span>
                        <strong>{event.title}</strong>
                        <span>{event.place}</span>
                    </div>
                ) : (
                    <p className="empty">등록된 일정이 없습니다. 잠시 쉬어가는 날이에요. ☾</p>
                )}
            </div>
        </section>
    );
}
