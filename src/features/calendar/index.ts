export {CalendarPage} from './pages/CalendarPage';
export {getUpcomingEvents} from './api/events';
export type {ClubEvent} from './types/event';

export const calendarFeature = {
    route: 'calendar',
    title: '일정'
} as const;
