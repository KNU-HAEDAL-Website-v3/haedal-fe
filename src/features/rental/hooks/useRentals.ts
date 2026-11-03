import {koreaDateLabel, useStoredState} from '../../../shared';
import type {RentalRecord} from '../types/rental';

const STORAGE_KEY = 'haedal-try3-rentals';

// Demo ledger kept in this browser; no item is actually reserved.
export function useRentals() {
    const [rentals, setRentals] = useStoredState<RentalRecord[]>(STORAGE_KEY, []);

    return {
        rentals,
        isRented: (item: number) => rentals.some(rental => rental.item === item && !rental.returned),
        rent: (item: number, name: string) => setRentals(current => [...current, {item, name, date: koreaDateLabel(), returned: false}]),
        returnRental: (index: number) => setRentals(current => current.map((rental, i) => (i === index ? {...rental, returned: true} : rental)))
    };
}
