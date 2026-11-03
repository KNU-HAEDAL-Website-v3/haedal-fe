import {useState} from 'react';
import {koreaToday} from '../../../shared';

interface CalendarState {
    year: number;
    month: number;
    selectedDay: number;
}

function todayState(): CalendarState {
    const today = koreaToday();
    return {year: today.year, month: today.month, selectedDay: today.day};
}

export function useCalendar() {
    const [state, setState] = useState(todayState);

    function shiftMonth(step: number) {
        setState(({year, month}) => {
            const next = new Date(year, month + step, 1);
            return {year: next.getFullYear(), month: next.getMonth(), selectedDay: 1};
        });
    }

    // Days outside the month (0, 32, ...) roll into the neighboring month, which keyboard navigation relies on.
    function selectDay(day: number) {
        setState(({year, month}) => {
            const next = new Date(year, month, day);
            return {year: next.getFullYear(), month: next.getMonth(), selectedDay: next.getDate()};
        });
    }

    return {
        ...state,
        previousMonth: () => shiftMonth(-1),
        nextMonth: () => shiftMonth(1),
        goToToday: () => setState(todayState()),
        selectDay
    };
}
