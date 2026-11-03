export const QUICK_LINKS = [
    {href: '#calendar', label: '일정 확인'},
    {href: '#notice', label: '공지 살펴보기'},
    {href: '#board', label: '이야기 나누기'},
    {href: '#rental', label: '물품 빌리기'}
];

export const STATS = [
    {value: '130+', label: '부원'},
    {value: '7', label: '교육 트랙'},
    {value: '6', label: '활동'}
];

const CLASS_TIME = '19:00 · 21:00';

export const WEEKLY_SCHEDULE = [
    {day: '월요일', lessons: ['Python']},
    {day: '화요일', lessons: ['Web Frontend', 'Game Dev']},
    {day: '수요일', lessons: ['Backend']},
    {day: '목요일', lessons: ['C / C++', 'IoT / Hardware']},
    {day: '금요일', lessons: ['AI / Data']}
].map(entry => ({...entry, time: CLASS_TIME}));

export const ACTIVITIES = [
    {title: '소모임', description: '같은 관심사를 가진 친구들과 모여 자유롭게 배우고, 나누고, 함께 성장해요.'},
    {title: '트랙', description: '7가지 교육 트랙에서 기초부터 프로젝트까지 차근차근 배워요.'},
    {title: 'MT', description: '잠시 코드를 내려놓고, 새로운 친구들과 즐거운 추억을 만들어요.'},
    {title: '개강총회와 종강총회', description: '한 학기의 시작과 끝을 함께 나누며 다음 모험을 준비해요.'},
    {title: '해커톤 & 아이디어톤', description: '반짝이는 아이디어를 실제로 구현하며 팀워크를 배워요.'},
    {title: '프로젝트', description: '나만의 아이디어를 동료와 함께 세상에 선보여요.'}
];
