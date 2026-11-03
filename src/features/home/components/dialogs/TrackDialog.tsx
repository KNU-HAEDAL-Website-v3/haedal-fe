import {BOOTCAMP_NOTICE_ID} from '../../../notice';
import type {Track} from '../../types/track';

export function TrackDialog({track}: {track: Track}) {
    return (
        <>
            <span className="eyebrow pixel">CHOOSE YOUR CLASS</span>
            <h2>{track.name}</h2>
            <p>{track.tagline}. 기초 개념부터 작은 프로젝트까지 동료들과 함께 배웁니다.</p>
            <p>입문 → 기초 실습 → 팀 프로젝트 → 결과 공유</p>
            <p>상세 운영 일정은 부트캠프 공지를 확인하세요.</p>
            <a href={`#notice/${BOOTCAMP_NOTICE_ID}`} className="button mint">모집 안내 보기 →</a>
        </>
    );
}
