import {ArrowIcon} from '../../../shared';
import {useMembershipDialogs} from '../hooks/useMembershipDialogs';

export function JoinBanner() {
    const {openApply} = useMembershipDialogs();
    return (
        <section className="join">
            <div><h2>함께 시작해요.</h2></div>
            <button className="button mint" onClick={openApply}>함께 시작하기 <ArrowIcon /></button>
        </section>
    );
}
