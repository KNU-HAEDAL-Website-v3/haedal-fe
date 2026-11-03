import type {FormEvent} from 'react';
import {useNoticeComments} from '../hooks/useNoticeComments';

export function NoticeComments({noticeId}: {noticeId: number}) {
    const {comments, addComment} = useNoticeComments(noticeId);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const comment = String(new FormData(form).get('comment')).trim();
        if (!comment) return;
        addComment(comment);
        form.reset();
    }

    return (
        <>
            <h3>댓글 <span>{comments.length}</span></h3>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" aria-label="댓글" placeholder="따뜻한 한마디를 남겨주세요." required maxLength={500} />
                <button className="button mint small" type="submit">댓글 등록</button>
            </form>
            <div>
                {comments.map((comment, index) => (
                    <div key={index} className="comment"><span className="tag">익명</span><p>{comment}</p></div>
                ))}
            </div>
        </>
    );
}
