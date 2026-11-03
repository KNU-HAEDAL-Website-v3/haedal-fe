import {getMonthEvents} from '../api/events';

interface MonthAgendaProps {
    year: number;
    month: number;
    onSelect: (day: number) => void;
}

export function MonthAgenda({year, month, onSelect}: MonthAgendaProps) {
    const events = getMonthEvents(year, month);
    return (
        <section className="panel page-end" aria-labelledby="agenda-title">
            <div className="agenda-heading">
                <h2 id="agenda-title">이번 달의 모험</h2>
                <span className="tag">{events.length}개 일정</span>
            </div>
            <div>
                {events.length ? events.map(event => (
                    <button key={event.day} className="agenda-item" onClick={() => onSelect(event.day)}>
                        <span className="agenda-date">{month + 1}월 <strong>{event.day}일</strong></span>
                        <span><strong>{event.title}</strong><small>{event.time} · {event.place}</small></span>
                        <span className="agenda-action">일정 보기</span>
                    </button>
                )) : (
                    <p className="empty">이번 달에는 등록된 일정이 없어요. 다른 달을 살펴보세요.</p>
                )}
            </div>
        </section>
    );
}
