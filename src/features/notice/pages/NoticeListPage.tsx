import {useState} from 'react';
import {PageHead} from '../../../shared';
import {NoticeTable} from '../components/NoticeTable';
import {NOTICES} from '../data/notices';

const TYPES = ['전체', '고정 공지'] as const;

export function NoticeListPage() {
    const [type, setType] = useState<typeof TYPES[number]>('전체');
    const [query, setQuery] = useState('');
    const notices = NOTICES.filter(notice => notice.title.includes(query) && (type === '전체' || notice.pinned));

    return (
        <>
            <PageHead eyebrow="NOTICE BOARD" title="해달의 공지사항" description="새로운 퀘스트와 중요한 소식을 놓치지 마세요." />
            <div className="toolbar">
                <select aria-label="공지 분류" value={type} onChange={event => setType(event.target.value as typeof type)}>
                    {TYPES.map(option => <option key={option}>{option}</option>)}
                </select>
                <input aria-label="공지 검색" placeholder="제목으로 소식을 찾아보세요..." value={query} onChange={event => setQuery(event.target.value)} />
            </div>
            <NoticeTable notices={notices} total={NOTICES.length} />
        </>
    );
}
