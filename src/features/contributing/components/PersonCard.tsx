import {useModal} from '../../../shared';
import {TRACKS} from '../../home';
import type {Person} from '../types/person';
import {PersonDialog} from './PersonDialog';

const FACES = [':D', '^_^', ':3'];

interface PersonCardProps {
    person: Person;
    /** Position in the full roster, so the avatar stays the same while filtering. */
    index: number;
}

export function PersonCard({person, index}: PersonCardProps) {
    const modal = useModal();
    return (
        <article className="card">
            <div className="avatar" style={{color: TRACKS[index % TRACKS.length].color}}>{FACES[index % FACES.length]}</div>
            <h3>{person.name} <span className="tag">{person.role}</span></h3>
            <p>{person.bio}</p>
            <hr style={{border: 0, borderTop: '1px solid var(--line)'}} />
            <p>✦ 주요 기여 · {person.role} 및 동아리 활동</p>
            <button className="button small" onClick={() => modal.open(<PersonDialog person={person} />)}>프로필 보기 →</button>
        </article>
    );
}
