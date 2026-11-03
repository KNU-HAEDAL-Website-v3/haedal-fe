export const POST_CATEGORIES = ['제안', '질문', '자유'] as const;

export type PostCategory = typeof POST_CATEGORIES[number];

export interface Post {
    id: number;
    category: PostCategory;
    title: string;
    body: string;
    likes: number;
    liked: boolean;
    comments: string[];
}

export type NewPost = Pick<Post, 'category' | 'title' | 'body'>;
