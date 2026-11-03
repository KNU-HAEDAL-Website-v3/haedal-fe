import type {Person} from '../types/person';

export function PersonDialog({person}: {person: Person}) {
    return (
        <>
            <span className="eyebrow pixel">PARTY MEMBER</span>
            <h2>{person.name} <span className="tag">{person.role}</span></h2>
            <p>{person.bio}</p>
            <p>주요 기여: {person.role} · 프로젝트 협업 · 동아리 활동 지원</p>
            <p>첨부 디자인의 기여자 예시 프로필입니다.</p>
        </>
    );
}
