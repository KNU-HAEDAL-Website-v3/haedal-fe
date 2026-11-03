import {ArrowIcon} from '../../../../shared';
import {BOOTCAMP_NOTICE_ID} from '../../../notice';

export function ApplyDialog() {
    return (
        <>
            <span className="eyebrow pixel">JOIN OUR UNIVERSE</span>
            <h2>당신의 모험을 기다려요.</h2>
            <p>개발 경험보다 배우고 싶은 마음이 중요해요. 경북대학교 IT대학 학술동아리 해달에서 함께 성장해요.</p>
            <p>현재는 디자인 시연 페이지로 실제 지원서는 접수하지 않습니다. 모집 일정과 지원 방법은 동아리 운영진에게 확인해 주세요.</p>
            <a href={`#notice/${BOOTCAMP_NOTICE_ID}`} className="button mint">부트캠프 안내 보기 <ArrowIcon /></a>
        </>
    );
}
