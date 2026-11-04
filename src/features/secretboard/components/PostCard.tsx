import type {Post} from '../types/post';

interface PostCardProps {
    post: Post;
    onOpen: () => void;
    onLike: () => void;
}

export function PostCard({post, onOpen, onLike}: PostCardProps) {
    // Title and comment buttons have no handler of their own: their clicks bubble up to the card.
    return (
        <article className="card" style={{cursor: 'pointer'}} onClick={onOpen}>
            <span className="tag">{post.category}</span>
            <h3><button>{post.title}</button></h3>
            <p>{post.body}</p>
            <div className="card-meta">
                <span>익명의 해달</span>
                <button
                    aria-label={`${post.title} 공감`}
                    aria-pressed={post.liked}
                    onClick={event => {
                        event.stopPropagation();
                        onLike();
                    }}
                >
                    {post.liked ? '♥' : '♡'} {post.likes}
                </button>
                <button>댓글 {post.comments.length}</button>
            </div>
        </article>
    );
}
