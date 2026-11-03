import {useEffect} from 'react';
import {NoticeComments} from '../components/NoticeComments';
import {BOOTCAMP_NOTICE_ID, NOTICES} from '../data/notices';

export function NoticeDetailPage({id}: {id: number}) {
    const notice = NOTICES[id];

    useEffect(() => {
        if (!notice) location.hash = 'notice';
    }, [notice]);

    if (!notice) return null;
    const isBootcamp = notice.id === BOOTCAMP_NOTICE_ID;

    return (
        <article className="detail">
            <a className="muted" href="#notice">홈 / 공지사항 / 상세</a>
            <p><span className="tag">해달 공지</span></p>
            <h1>{notice.title}</h1>
            <p className="muted">관리자 · {notice.date} · 조회 {notice.views}</p>
            <div className="panel">
                <p>{isBootcamp ? '새 학기 부트캠프 참가자를 모집합니다.' : '해달 부원 여러분께 안내드립니다.'}</p>
                <p>{isBootcamp
                    ? 'Python부터 웹 개발, AI까지! 관심 있는 트랙을 선택하고 동료와 함께 새로운 배움을 시작해 보세요. 처음 코딩을 접하는 분도 참여할 수 있습니다.'
                    : `${notice.title}에 관한 안내입니다. 함께 사용하는 공간과 활동이 원활하게 운영될 수 있도록 많은 관심과 참여 부탁드립니다.`}</p>
                <div className="news-image">{isBootcamp ? 'START!' : 'HAEDAL'}</div>
                <p>이 페이지는 첨부 디자인을 바탕으로 만든 시연용 안내입니다. 실제 모집 일정과 운영 세부 사항은 동아리 운영진에게 확인해 주세요.</p>
            </div>
            <a className="button small" href="#notice">← 목록으로</a>
            <NoticeComments key={notice.id} noticeId={notice.id} />
        </article>
    );
}
