import type {ReactNode} from 'react';
import {CalendarPage, calendarFeature} from '../../features/calendar';
import {ContributorsPage, contributingFeature} from '../../features/contributing';
import {NewsPage, highlightsFeature} from '../../features/highlights';
import {HomePage, homeFeature} from '../../features/home';
import {NoticeDetailPage, NoticeListPage, noticeFeature} from '../../features/notice';
import {RentalPage, rentalFeature} from '../../features/rental';
import {BoardPage, secretboardFeature} from '../../features/secretboard';

interface Route {
    title: string;
    render: (param?: string) => ReactNode;
}

const ROUTES: Record<string, Route> = {
    [homeFeature.route]: {title: homeFeature.title, render: () => <HomePage />},
    [noticeFeature.route]: {
        title: noticeFeature.title,
        render: id => (id === undefined ? <NoticeListPage /> : <NoticeDetailPage id={Number(id)} />)
    },
    [secretboardFeature.route]: {title: secretboardFeature.title, render: () => <BoardPage />},
    [calendarFeature.route]: {title: calendarFeature.title, render: () => <CalendarPage />},
    [contributingFeature.route]: {title: contributingFeature.title, render: () => <ContributorsPage />},
    [rentalFeature.route]: {title: rentalFeature.title, render: () => <RentalPage />},
    [highlightsFeature.route]: {title: highlightsFeature.title, render: () => <NewsPage />}
};

/** Home sections reachable by hash; they render the home page and scroll to the section. */
const HOME_ANCHORS: Record<string, string> = {tracks: '교육 트랙', explore: homeFeature.title};

export const NAV_LINKS = [
    {route: secretboardFeature.route, label: '옹달샘'},
    {route: calendarFeature.route, label: '일정'},
    {route: highlightsFeature.route, label: '소식'},
    {route: noticeFeature.route, label: '공지'},
    {route: contributingFeature.route, label: '기여'},
    {route: rentalFeature.route, label: 'rendal'},
    {href: 'https://ondal.knu-haedal-dev.com', label: 'ondal'}
];

export interface ResolvedRoute {
    section: string;
    title: string;
    element: ReactNode;
    scrollTarget?: string;
}

export function resolveRoute(path: string): ResolvedRoute {
    const [section, param] = path.split('/');
    if (section in HOME_ANCHORS) {
        return {section, title: HOME_ANCHORS[section], element: ROUTES.home.render(), scrollTarget: section};
    }
    const route = ROUTES[section];
    if (!route) return {section: homeFeature.route, title: homeFeature.title, element: ROUTES.home.render()};
    return {section, title: route.title, element: route.render(param)};
}
