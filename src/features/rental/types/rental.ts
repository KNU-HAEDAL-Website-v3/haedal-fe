import type {ReactNode} from 'react';

export const ITEM_CATEGORIES = ['도서', '물품'] as const;

export type ItemCategory = typeof ITEM_CATEGORIES[number];

export interface RentalItem {
    name: string;
    category: ItemCategory;
    icon: ReactNode;
    /** False when the item is out of service regardless of rental records. */
    rentable: boolean;
}

export interface RentalRecord {
    /** Index into RENTAL_ITEMS; kept as an index so existing saved records still load. */
    item: number;
    name: string;
    date: string;
    returned: boolean;
}
