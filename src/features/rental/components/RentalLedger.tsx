import {SectionHeading} from '../../../shared';
import {RENTAL_ITEMS} from '../data/items';
import type {RentalRecord} from '../types/rental';

interface RentalLedgerProps {
    rentals: RentalRecord[];
    onReturn: (index: number) => void;
}

export function RentalLedger({rentals, onReturn}: RentalLedgerProps) {
    const active = rentals.filter(rental => !rental.returned).length;
    return (
        <section className="panel">
            <SectionHeading title="대여 장부" description="이 브라우저에 저장되는 시연용 대여 기록입니다." aside={<span className="tag">대여 중 {active}</span>} />
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr><th>이름</th><th>빌린 물품</th><th>대여일</th><th>상태</th></tr>
                    </thead>
                    <tbody>
                        {rentals.length ? rentals.map((rental, index) => (
                            <tr key={index}>
                                <td>{rental.name}</td>
                                <td>{RENTAL_ITEMS[rental.item]?.name}</td>
                                <td>{rental.date}</td>
                                <td>{rental.returned ? '반납 완료' : <button className="small" onClick={() => onReturn(index)}>반납하기</button>}</td>
                            </tr>
                        )) : (
                            <tr><td colSpan={4} className="empty">아래 물품 목록에서 첫 대여를 시작해 보세요.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
