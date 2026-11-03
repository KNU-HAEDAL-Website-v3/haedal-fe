import type {NewsItem} from '../types/news';

export function NewsDialog({news}: {news: NewsItem}) {
    return (
        <>
            <span className="eyebrow pixel">ADVENTURE LOG</span>
            <h2>{news.title}</h2>
            <div className="news-image">{news.image}</div>
            <p>함께 배우고 만들어가는 해달의 순간들. 서로의 아이디어를 나누고 새로운 도전을 응원하며 한 걸음 더 성장했습니다.</p>
            <p>첨부된 디자인을 바탕으로 구성한 예시 활동 기록입니다.</p>
        </>
    );
}
