import type {Post} from '../types/post';

interface PostCardProps {
    post: Post;
    onOpen: () => void;
    onLike: () => void;
}

export function PostCard({post, onOpen, onLike}: PostCardProps) {
    return (
        <article className="card">
            <span className="tag">{post.category}</span>
            <h3><button onClick={onOpen}>{post.title}</button></h3>
            <p>{post.body}</p>
            <div className="card-meta">
                <span>익명의 해달</span>
                <button aria-label={`${post.title} 공감`} aria-pressed={post.liked} onClick={onLike}>{post.liked ? '♥' : '♡'} {post.likes}</button>
                <button onClick={onOpen}>댓글 {post.comments.length}</button>
            </div>
        </article>
    );
}
