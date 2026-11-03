export interface Notice {
    id: number;
    title: string;
    date: string;
    views: number;
    /** Pinned notices are listed with a tag instead of a number. */
    pinned: boolean;
}
