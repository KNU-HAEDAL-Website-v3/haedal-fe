import {ArrowIcon, StarIcon} from '../../shared';
import {useMembershipDialogs} from '../../features/home';

export function Footer() {
    const {openApply, openFaq} = useMembershipDialogs();
    return (
        <footer>
            <div className="footer-top">
                <div>
                    <a href="#home" className="brand"><StarIcon /> 해달</a>
                    <p>함께 배우고, 만들고, 성장하는<br />경북대학교 IT대학 학술동아리</p>
                </div>
                <div><h4>커뮤니티</h4><a href="#board">옹달샘</a><a href="#calendar">일정</a><a href="#notice">공지사항</a></div>
                <div><h4>해달 탐험하기</h4><a href="#home">동아리 소개</a><a href="#news">활동 하이라이트</a><a href="#contributors">함께 만든 사람들</a></div>
                <div>
                    <h4>플레이어 지원</h4><a href="#rental">물품 대여</a>
                    <button onClick={openFaq}>자주 묻는 질문</button>
                    <button onClick={openApply}>지원하기 <ArrowIcon /></button>
                </div>
            </div>
            <div className="footer-bottom"><span>© 2026 HAEDAL. Made with pixels &amp; love.</span></div>
        </footer>
    );
}
