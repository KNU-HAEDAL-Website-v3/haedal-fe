import {useState} from 'react';
import {PageHead} from '../../../shared';
import {CalendarToolbar} from '../components/CalendarToolbar';
import {DayEvents} from '../components/DayEvents';
import {MonthAgenda} from '../components/MonthAgenda';
import {MonthGrid} from '../components/MonthGrid';
import {useCalendar} from '../hooks/useCalendar';

export function CalendarPage() {
    const calendar = useCalendar();
    const {year, month, selectedDay} = calendar;
    const [focusRequest, setFocusRequest] = useState(0);
    function selectAndFocus(day: number) {
        calendar.selectDay(day);
        setFocusRequest(count => count + 1);
    }

    return (
        <>
            <PageHead eyebrow="QUEST CALENDAR" title="해달 일정" description="함께할 소중한 시간을 확인하세요.">
                <p className="demo-note">시연용 일정입니다. 실제 활동 일정은 운영진에게 확인해 주세요. 시간은 한국 기준입니다.</p>
            </PageHead>
            <section className="panel">
                <CalendarToolbar year={year} month={month} onPrevious={calendar.previousMonth} onNext={calendar.nextMonth} onToday={calendar.goToToday} />
                <p className="calendar-help">날짜를 선택하면 시간과 장소를 볼 수 있어요. 키보드 방향키로도 이동할 수 있어요.</p>
                <MonthGrid
                    year={year}
                    month={month}
                    selectedDay={selectedDay}
                    focusRequest={focusRequest}
                    onSelect={selectAndFocus}
                />
            </section>
            <DayEvents year={year} month={month} day={selectedDay} />
            <MonthAgenda year={year} month={month} onSelect={selectAndFocus} />
        </>
    );
}
