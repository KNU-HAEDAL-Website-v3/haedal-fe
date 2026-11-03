import {useState} from 'react';
import {PageHead} from '../../../shared';
import {PersonCard} from '../components/PersonCard';
import {PEOPLE} from '../data/people';
import {ROLES} from '../types/person';

const ALL_ROLES = '전체 역할';

export function ContributorsPage() {
    const [query, setQuery] = useState('');
    const [role, setRole] = useState(ALL_ROLES);
    const people = PEOPLE
        .map((person, index) => ({person, index}))
        .filter(({person}) => `${person.name} ${person.role} ${person.bio}`.includes(query) && (role === ALL_ROLES || person.role === role));

    return (
        <>
            <PageHead eyebrow="THE PARTY MEMBERS" title="함께 만든 사람들" description="작은 기여가 모여, 해달이라는 세계가 만들어집니다." />
            <div className="toolbar">
                <input placeholder="이름 또는 소개로 검색하세요." aria-label="기여자 검색" value={query} onChange={event => setQuery(event.target.value)} />
                <select aria-label="기여 분야" value={role} onChange={event => setRole(event.target.value)}>
                    {[ALL_ROLES, ...ROLES].map(option => <option key={option}>{option}</option>)}
                </select>
            </div>
            <div className="cards page-end">
                {people.length
                    ? people.map(({person, index}) => <PersonCard key={person.name} person={person} index={index} />)
                    : <p className="empty">검색 결과가 없습니다.</p>}
            </div>
        </>
    );
}
