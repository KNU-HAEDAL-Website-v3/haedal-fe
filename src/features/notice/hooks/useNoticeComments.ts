import {useStoredState} from '../../../shared';

export function useNoticeComments(noticeId: number) {
    const [comments, setComments] = useStoredState<string[]>(`haedal-comments-${noticeId}`, []);
    return {
        comments,
        addComment: (comment: string) => setComments(current => [...current, comment])
    };
}
