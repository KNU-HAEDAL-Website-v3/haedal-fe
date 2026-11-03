import type {RentalItem} from '../types/rental';

interface ItemCardProps {
    item: RentalItem;
    available: boolean;
    onRent: () => void;
}

export function ItemCard({item, available, onRent}: ItemCardProps) {
    return (
        <article className="card">
            <div className="item-icon">{item.icon}</div>
            <p>{item.category}</p>
            <h3>{item.name}</h3>
            <p className="tag">{available ? '대여 가능' : '대여 중'}</p>
            <p>함께 공부하고 만드는 데 필요한 해달의 공용 아이템입니다.</p>
            <button className="button small" disabled={!available} onClick={onRent}>{available ? '대여 신청 →' : '다음 모험을 위해 사용 중'}</button>
        </article>
    );
}
