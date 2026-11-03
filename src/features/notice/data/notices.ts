import type {Notice} from '../types/notice';

const ROWS: [title: string, date: string, views: number][] = [
    ['2학기 부트캠프 안내', '2026.10.01', 523],
    ['동아리방 이용 안내', '2026.09.28', 412],
    ['프로젝트 발표회 안내', '2026.10.15', 320],
    ['웹 개발 스터디 모집', '2026.10.12', 287],
    ['동아리방 정리 일정', '2026.10.08', 198],
    ['세미나 참가 안내', '2026.10.05', 311],
    ['물품 대여 이용 안내', '2026.09.25', 176],
    ['홈페이지 점검 안내', '2026.09.20', 243],
    ['정기 모임 안내', '2026.09.15', 267],
    ['신규 부원 안내', '2026.09.10', 305]
];

export const NOTICES: Notice[] = ROWS.map(([title, date, views], id) => ({id, title, date, views, pinned: id < 2}));

/** The bootcamp notice that apply and track dialogs link to. */
export const BOOTCAMP_NOTICE_ID = 0;
