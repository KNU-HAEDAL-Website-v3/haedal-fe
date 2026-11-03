import type {Post} from '../types/post';

const SEED: Pick<Post, 'category' | 'title' | 'body' | 'likes'>[] = [
    {category: '제안', title: '동아리 굿즈 만들면 어떨까요?', body: '해달만의 굿즈가 있으면 더 소속감도 생기고 좋을 것 같아요! 여러분의 의견이 궁금합니다.', likes: 24},
    {category: '자유', title: '백엔드 스터디 같이 해요', body: '스프링 기반으로 백엔드 스터디를 열려고 하는데 관심 있는 분들 계신가요?', likes: 17},
    {category: '질문', title: '동아리방 이용시간이 궁금해요', body: '평일 저녁에도 이용할 수 있나요? 시험 기간에는 시간이 어떻게 되나요?', likes: 5},
    {category: '자유', title: '부트캠프 후기', body: '이번 여름에 다녀온 부트캠프 후기를 공유합니다. 함께 만들어서 더 즐거웠어요!', likes: 28},
    {category: '질문', title: '노트북 추천 부탁드려요!', body: '개발용으로 노트북을 새로 구매하려고 하는데 어떤 모델이 좋을까요?', likes: 7},
    {category: '제안', title: '프로젝트 팀원을 구해요', body: '2학기 교내 공모전 준비하는 팀입니다. 함께 도전할 분들을 찾습니다!', likes: 19},
    {category: '자유', title: '이번 MT 어땠나요?', body: '이번 MT 정말 재미있었어요! 다들 고생하셨습니다. 다음에도 이런 자리 있으면 좋겠네요.', likes: 32},
    {category: '질문', title: '깃허브 협업 방식이 궁금해요', body: '팀 프로젝트를 처음 해보는데 브랜치 전략과 PR 방식에 대한 조언 부탁드립니다.', likes: 6},
    {category: '자유', title: '점심 같이 드실 분!', body: '오늘 학교에 계신 분 중에 같이 점심 드실 분 있나요?', likes: 14},
    {category: '제안', title: '동아리 홈페이지 개선 아이디어', body: '일정 캘린더와 스터디 매칭 기능이 있으면 좋겠어요.', likes: 21},
    {category: '질문', title: '전공 공부 자료 공유할 수 있을까요?', body: '추천하는 강의나 책이 있다면 공유 부탁드립니다.', likes: 9},
    {category: '자유', title: '방학에 뭐 하시나요?', body: '저는 개인 프로젝트랑 자격증 공부를 하려고 합니다.', likes: 11}
];

export const SEED_POSTS: Post[] = SEED.map((post, id) => ({...post, id, liked: false, comments: []}));
