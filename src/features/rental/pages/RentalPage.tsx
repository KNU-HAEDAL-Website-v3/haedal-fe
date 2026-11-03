import {useState} from 'react';
import {PageHead, Tabs, useModal, useToast} from '../../../shared';
import {ItemCard} from '../components/ItemCard';
import {RentalLedger} from '../components/RentalLedger';
import {RentDialog} from '../components/RentDialog';
import {RENTAL_ITEMS} from '../data/items';
import {useRentals} from '../hooks/useRentals';
import {ITEM_CATEGORIES} from '../types/rental';

const CATEGORY_TABS = ['전체', ...ITEM_CATEGORIES] as const;

export function RentalPage() {
    const {rentals, isRented, rent, returnRental} = useRentals();
    const modal = useModal();
    const toast = useToast();
    const [category, setCategory] = useState<typeof CATEGORY_TABS[number]>('전체');
    const [query, setQuery] = useState('');
    const [onlyAvailable, setOnlyAvailable] = useState(false);

    const items = RENTAL_ITEMS
        .map((item, index) => ({item, index, available: item.rentable && !isRented(index)}))
        .filter(({item, available}) => (category === '전체' || item.category === category) && item.name.includes(query) && (!onlyAvailable || available));

    function openRentForm(index: number) {
        modal.open(<RentDialog item={RENTAL_ITEMS[index]} onSubmit={name => {
            rent(index, name);
            modal.close();
            toast('대여 기록을 저장했어요.');
        }} />);
    }

    function handleReturn(index: number) {
        returnRental(index);
        toast('반납이 완료되었어요.');
    }

    return (
        <>
            <PageHead eyebrow="SHARED INVENTORY" title="물품 대여" description="필요한 아이템을 찾고, 다음 퀘스트를 준비하세요." />
            <RentalLedger rentals={rentals} onReturn={handleReturn} />
            <h2>물품 목록</h2>
            <div className="toolbar">
                <input placeholder="물품명 또는 도서명 검색" aria-label="물품 검색" value={query} onChange={event => setQuery(event.target.value)} />
                <label><input type="checkbox" checked={onlyAvailable} onChange={event => setOnlyAvailable(event.target.checked)} /> 대여 가능한 물품만</label>
            </div>
            <Tabs options={CATEGORY_TABS} value={category} onChange={setCategory} />
            <div className="cards page-end">
                {items.length
                    ? items.map(({item, index, available}) => <ItemCard key={item.name} item={item} available={available} onRent={() => openRentForm(index)} />)
                    : <p className="empty">조건에 맞는 물품이 없습니다.</p>}
            </div>
        </>
    );
}
