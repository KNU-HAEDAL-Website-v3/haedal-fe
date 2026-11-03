import {NEWS} from '../data/news';
import {NewsCard} from './NewsCard';

export function NewsGrid({className = ''}: {className?: string}) {
    return (
        <div className={`news-grid ${className}`.trim()}>
            {NEWS.map(news => <NewsCard key={news.title} news={news} />)}
        </div>
    );
}
