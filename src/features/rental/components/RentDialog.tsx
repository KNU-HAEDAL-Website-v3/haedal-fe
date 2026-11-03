import type {FormEvent} from 'react';
import type {RentalItem} from '../types/rental';

interface RentDialogProps {
    item: RentalItem;
    onSubmit: (name: string) => void;
}

export function RentDialog({item, onSubmit}: RentDialogProps) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const name = String(new FormData(event.currentTarget).get('name')).trim();
        if (name) onSubmit(name);
    }

    return (
        <>
            <h2>{item.name} 대여</h2>
            <p>시연용 대여 기록으로 실제 물품은 예약되지 않습니다.</p>
            <form onSubmit={handleSubmit}>
                <label>이름<input name="name" required maxLength={20} /></label>
                <p>사용 후에는 대여 장부에서 반납해 주세요.</p>
                <button className="button mint">대여 기록 저장</button>
            </form>
        </>
    );
}
