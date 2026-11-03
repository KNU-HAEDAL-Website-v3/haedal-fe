import {Activities} from '../components/Activities';
import {Hero} from '../components/Hero';
import {IntroStats} from '../components/IntroStats';
import {JoinBanner} from '../components/JoinBanner';
import {NewsPreview} from '../components/NewsPreview';
import {QuickLinks} from '../components/QuickLinks';
import {TrackGrid} from '../components/TrackGrid';
import {UpcomingSchedule} from '../components/UpcomingSchedule';
import {WeeklySchedule} from '../components/WeeklySchedule';

export function HomePage() {
    return (
        <>
            <Hero />
            <QuickLinks />
            <IntroStats />
            <TrackGrid />
            <WeeklySchedule />
            <Activities />
            <NewsPreview />
            <UpcomingSchedule />
            <JoinBanner />
        </>
    );
}
