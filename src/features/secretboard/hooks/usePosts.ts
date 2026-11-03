import {useStoredState} from '../../../shared';
import {SEED_POSTS} from '../data/seedPosts';
import type {NewPost, Post} from '../types/post';

const STORAGE_KEY = 'haedal-try3-posts';

// Posts live in this browser only; there is no board server yet.
export function usePosts() {
    const [posts, setPosts] = useStoredState<Post[]>(STORAGE_KEY, SEED_POSTS);

    function updatePost(id: number, change: (post: Post) => Post) {
        setPosts(current => current.map(post => (post.id === id ? change(post) : post)));
    }

    return {
        posts,
        addPost: (post: NewPost) => setPosts(current => [{...post, id: Date.now(), likes: 0, liked: false, comments: []}, ...current]),
        toggleLike: (id: number) => updatePost(id, post => ({...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1)})),
        addComment: (id: number, comment: string) => updatePost(id, post => ({...post, comments: [...post.comments, comment]}))
    };
}
