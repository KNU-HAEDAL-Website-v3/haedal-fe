import {BOOTCAMP_NOTICE_ID} from '../data/notices';
import type {Notice} from '../types/notice';

export function NoticeTable({notices, total}: {notices: Notice[]; total: number}) {
    return (
        <div className="table-wrap page-end">
            <table>
                <thead>
                    <tr><th>번호</th><th>제목</th><th>작성일</th><th>조회</th></tr>
                </thead>
                <tbody>
                    {notices.length ? notices.map(notice => (
                        <tr key={notice.id}>
                            <td>{notice.pinned ? <span className="tag">공지</span> : total - notice.id}</td>
                            <td><a href={`#notice/${notice.id}`}>{notice.title} {notice.id === BOOTCAMP_NOTICE_ID ? '✦' : ''}</a></td>
                            <td>{notice.date}</td>
                            <td>{notice.views}</td>
                        </tr>
                    )) : (
                        <tr><td colSpan={4} className="empty">검색 결과가 없습니다.</td></tr>
                    )}
                </tbody>
            </table>
            <p className="muted">전체 {notices.length}개</p>
        </div>
    );
}
