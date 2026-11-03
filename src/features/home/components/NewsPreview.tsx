import {SectionHeading} from '../../../shared';
import {NewsGrid} from '../../highlights';

export function NewsPreview() {
    return (
        <section className="section">
            <SectionHeading title="소식" description="우리의 이야기가 차곡차곡 쌓이는 곳." link={{href: '#news', label: '모든 소식 보기'}} />
            <NewsGrid />
        </section>
    );
}
