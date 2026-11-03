import type {FormEvent} from 'react';
import {ArrowIcon} from '../../../shared';
import {POST_CATEGORIES, type NewPost, type PostCategory} from '../types/post';

const CATEGORY_OPTIONS: PostCategory[] = ['자유', '질문', '제안'];

export function PostFormDialog({onSubmit}: {onSubmit: (post: NewPost) => void}) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const title = String(form.get('title')).trim();
        const body = String(form.get('body')).trim();
        const category = form.get('category') as PostCategory;
        if (!title || !body || !POST_CATEGORIES.includes(category)) return;
        onSubmit({category, title, body});
    }

    return (
        <>
            <h2>옹달샘에 이야기 남기기</h2>
            <p>게시글은 이 브라우저에만 저장됩니다.</p>
            <form onSubmit={handleSubmit}>
                <label>분류<select name="category">
                    {CATEGORY_OPTIONS.map(category => <option key={category}>{category}</option>)}
                </select></label>
                <label>제목<input name="title" maxLength={80} required /></label>
                <label>내용<textarea name="body" maxLength={1500} required /></label>
                <button className="button mint">이야기 등록 <ArrowIcon /></button>
            </form>
        </>
    );
}
