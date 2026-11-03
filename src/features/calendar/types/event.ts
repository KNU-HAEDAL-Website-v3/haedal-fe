export interface ClubEvent {
    year: number;
    /** 0-based, like Date#getMonth. */
    month: number;
    day: number;
    title: string;
    time: string;
    place: string;
}
