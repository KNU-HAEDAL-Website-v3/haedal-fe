import type {FormEvent} from 'react';
import type {Post} from '../types/post';

interface PostDetailDialogProps {
    post: Post;
    onComment: (comment: string) => void;
}

export function PostDetailDialog({post, onComment}: PostDetailDialogProps) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const comment = String(new FormData(event.currentTarget).get('comment')).trim();
        if (comment) onComment(comment);
    }

    return (
        <>
            <span className="tag">{post.category}</span>
            <h2>{post.title}</h2>
            <p style={{whiteSpace: 'pre-wrap'}}>{post.body}</p>
            <h3>댓글 {post.comments.length}</h3>
            {post.comments.map((comment, index) => <p key={index} className="comment">익명 · {comment}</p>)}
            <form onSubmit={handleSubmit}>
                <label>댓글<input name="comment" required maxLength={300} placeholder="따뜻한 한마디" /></label>
                <button className="button mint">댓글 남기기</button>
            </form>
        </>
    );
}
