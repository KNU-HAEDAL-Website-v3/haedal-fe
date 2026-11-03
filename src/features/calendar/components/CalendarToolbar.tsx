import {ArrowIcon} from '../../../shared';

interface CalendarToolbarProps {
    year: number;
    month: number;
    onPrevious: () => void;
    onNext: () => void;
    onToday: () => void;
}

export function CalendarToolbar({year, month, onPrevious, onNext, onToday}: CalendarToolbarProps) {
    return (
        <div className="calendar-top">
            <button className="small" aria-label="이전 달" onClick={onPrevious}>←</button>
            <h2 aria-live="polite">{year}년 {month + 1}월</h2>
            <button className="small" aria-label="다음 달" onClick={onNext}><ArrowIcon /></button>
            <button className="small" onClick={onToday}>오늘</button>
        </div>
    );
}
