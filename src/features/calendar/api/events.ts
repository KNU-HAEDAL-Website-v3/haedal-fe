import type {DayParts} from '../../../shared';
import {EVENTS} from '../data/events';
import type {ClubEvent} from '../types/event';

// Query layer over the demo data; swap these for server calls when a backend exists.
export function getMonthEvents(year: number, month: number): ClubEvent[] {
    return EVENTS.filter(event => event.year === year && event.month === month);
}

export function getEvent(year: number, month: number, day: number): ClubEvent | undefined {
    return EVENTS.find(event => event.year === year && event.month === month && event.day === day);
}

export function getUpcomingEvents(today: DayParts, limit: number): ClubEvent[] {
    const start = new Date(today.year, today.month, today.day);
    return EVENTS.filter(event => new Date(event.year, event.month, event.day) >= start).slice(0, limit);
}
