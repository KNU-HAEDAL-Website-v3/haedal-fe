import {useEffect, useRef, type KeyboardEvent} from 'react';
import {koreaToday} from '../../../shared';
import {getEvent} from '../api/events';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const ARROW_OFFSETS: Record<string, number> = {ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7};

interface MonthGridProps {
    year: number;
    month: number;
    selectedDay: number;
    /** Increments whenever the selected day should take keyboard focus. */
    focusRequest: number;
    /** May receive days outside the month when navigating with arrow keys. */
    onSelect: (day: number) => void;
}

export function MonthGrid({year, month, selectedDay, focusRequest, onSelect}: MonthGridProps) {
    const grid = useRef<HTMLDivElement>(null);
    const today = koreaToday();
    const offset = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const cellCount = Math.ceil((offset + days) / 7) * 7;

    useEffect(() => {
        if (focusRequest) grid.current?.querySelector<HTMLButtonElement>(`[data-day="${selectedDay}"]`)?.focus();
    }, [focusRequest, year, month, selectedDay]);

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        const step = ARROW_OFFSETS[event.key];
        const button = (event.target as HTMLElement).closest<HTMLElement>('[data-day]');
        if (!step || !button) return;
        event.preventDefault();
        onSelect(Number(button.dataset.day) + step);
    }

    return (
        <div ref={grid} className="calendar-grid" role="group" aria-label="날짜 선택" onKeyDown={handleKeyDown}>
            {WEEKDAYS.map(weekday => <div key={weekday}>{weekday}</div>)}
            {Array.from({length: cellCount}, (_, index) => {
                const day = index - offset + 1;
                if (day < 1 || day > days) return <button key={index} disabled className="outside" aria-hidden="true">·</button>;
                const event = getEvent(year, month, day);
                const isToday = year === today.year && month === today.month && day === today.day;
                const isSelected = selectedDay === day;
                return (
                    <button
                        key={index}
                        data-day={day}
                        className={[isSelected && 'selected', isToday && 'today'].filter(Boolean).join(' ')}
                        aria-pressed={isSelected}
                        aria-current={isToday ? 'date' : undefined}
                        aria-label={`${year}년 ${month + 1}월 ${day}일${event ? ' ' + event.title : ''}`}
                        onClick={() => onSelect(day)}
                    >
                        {day}
                        {event && <small>▪ {event.title}</small>}
                    </button>
                );
            })}
        </div>
    );
}
