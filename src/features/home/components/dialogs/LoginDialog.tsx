import {ArrowIcon, useModal} from '../../../../shared';

export function LoginDialog() {
    const modal = useModal();
    return (
        <>
            <span className="eyebrow pixel">PLAYER LOGIN</span>
            <h2>반가워요, 플레이어!</h2>
            <p>현재는 프런트엔드 시연 버전입니다. 로그인 서비스는 연결되어 있지 않으며, 게시글과 대여 기록은 이 브라우저에만 저장됩니다.</p>
            <button className="button mint" onClick={modal.close}>게스트로 둘러보기 <ArrowIcon /></button>
        </>
    );
}
