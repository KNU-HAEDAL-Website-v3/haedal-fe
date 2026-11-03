import {PageHead} from '../../../shared';
import {NewsGrid} from '../components/NewsGrid';

export function NewsPage() {
    return (
        <>
            <PageHead eyebrow="SAVE POINT" title="해달의 빛나는 순간들" description="함께 배우고, 도전하고, 웃었던 우리의 기록." />
            <NewsGrid className="page-end" />
        </>
    );
}
