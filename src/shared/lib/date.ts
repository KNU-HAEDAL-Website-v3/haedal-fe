export interface DayParts {
    year: number;
    /** 0-based, like Date#getMonth. */
    month: number;
    day: number;
}

// The club runs on Korean time regardless of the visitor's timezone.
export function koreaToday(): DayParts {
    const parts = new Intl.DateTimeFormat('en-CA', {timeZone: 'Asia/Seoul', year: 'numeric', month: 'numeric', day: 'numeric'}).formatToParts(new Date());
    const value = (type: string) => Number(parts.find(part => part.type === type)!.value);
    return {year: value('year'), month: value('month') - 1, day: value('day')};
}

export function koreaDateLabel(): string {
    return new Date().toLocaleDateString('ko-KR', {timeZone: 'Asia/Seoul'});
}
