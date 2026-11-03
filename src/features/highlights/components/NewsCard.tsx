import {ArrowIcon, useModal} from '../../../shared';
import type {NewsItem} from '../types/news';
import {NewsDialog} from './NewsDialog';

export function NewsCard({news}: {news: NewsItem}) {
    const modal = useModal();
    return (
        <button className="news-card" onClick={() => modal.open(<NewsDialog news={news} />)}>
            <div className="news-image">{news.image}</div>
            <div className="news-body">
                <h3>{news.title} <ArrowIcon /></h3>
                <small>{news.date} · 해달의 기록</small>
            </div>
        </button>
    );
}
