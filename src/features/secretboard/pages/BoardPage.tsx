import {useState} from 'react';
import {ArrowIcon, PageHead, Tabs, useModal, useToast} from '../../../shared';
import {PostCard} from '../components/PostCard';
import {PostDetailDialog} from '../components/PostDetailDialog';
import {PostFormDialog} from '../components/PostFormDialog';
import {usePosts} from '../hooks/usePosts';
import {POST_CATEGORIES, type NewPost, type Post} from '../types/post';

const CATEGORY_TABS = ['전체', ...POST_CATEGORIES] as const;
const SORTS = ['최신순', '공감순'] as const;
const PAGE_SIZE = 6;

export function BoardPage() {
    const {posts, addPost, toggleLike, addComment} = usePosts();
    const modal = useModal();
    const toast = useToast();
    const [category, setCategory] = useState<typeof CATEGORY_TABS[number]>('전체');
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState<typeof SORTS[number]>('최신순');
    const [limit, setLimit] = useState(PAGE_SIZE);

    const list = posts.filter(post => (category === '전체' || post.category === category) && (post.title + post.body).includes(query));
    if (sort === '공감순') list.sort((a, b) => b.likes - a.likes);

    function changeCategory(next: typeof category) {
        setCategory(next);
        setLimit(PAGE_SIZE);
    }

    function openWriteForm() {
        modal.open(<PostFormDialog onSubmit={(post: NewPost) => {
            addPost(post);
            modal.close();
            toast('새로운 이야기를 남겼어요.');
        }} />);
    }

    function openPost(post: Post) {
        modal.open(<PostDetailDialog post={post} onComment={comment => {
            addComment(post.id, comment);
            modal.close();
            toast('댓글을 남겼어요.');
        }} />);
    }

    return (
        <>
            <PageHead eyebrow="COMMUNITY CAMPFIRE" title="옹달샘" description="별빛 아래, 자유롭게 나누는 우리들의 이야기." />
            <div className="toolbar">
                <input placeholder="어떤 이야기를 찾고 있나요?" aria-label="게시글 검색" value={query} onChange={event => setQuery(event.target.value)} />
                <select aria-label="게시글 정렬" value={sort} onChange={event => setSort(event.target.value as typeof sort)}>
                    {SORTS.map(option => <option key={option}>{option}</option>)}
                </select>
                <button className="button mint" onClick={openWriteForm}>+ 이야기 쓰기</button>
            </div>
            <Tabs options={CATEGORY_TABS} value={category} onChange={changeCategory} />
            <div className="cards">
                {list.length
                    ? list.slice(0, limit).map(post => <PostCard key={post.id} post={post} onOpen={() => openPost(post)} onLike={() => toggleLike(post.id)} />)
                    : <p className="empty">아직 이야기가 없어요. 첫 이야기를 남겨보세요.</p>}
            </div>
            <div className="pagination page-end">
                <button hidden={limit >= list.length} onClick={() => setLimit(current => current + PAGE_SIZE)}>이야기 더 불러오기 <ArrowIcon /></button>
            </div>
        </>
    );
}
