import {ArrowIcon} from '../../../shared';
import {useMembershipDialogs} from '../hooks/useMembershipDialogs';

export function Hero() {
    const {openApply} = useMembershipDialogs();
    return (
        <section className="hero">
            <div className="hero-copy">
                <h1>호기심 하나로,<br />시작하는 <em>우리.</em></h1>
                <div className="hero-actions">
                    <button className="button mint" onClick={openApply}>해달과 함께하기 <span aria-hidden="true"><ArrowIcon /></span></button>
                </div>
            </div>
        </section>
    );
}
