import {ArrowIcon} from '../../../shared';
import type {RentalItem} from '../types/rental';

export const RENTAL_ITEMS: RentalItem[] = [
    {name: '자바 프로그래밍 입문', category: '도서', icon: 'JAVA', rentable: true},
    {name: '기계식 키보드', category: '물품', icon: '▥', rentable: true},
    {name: '노트북 거치대', category: '물품', icon: '⌁', rentable: false},
    {name: '무선 마우스', category: '물품', icon: '▰', rentable: true},
    {name: '태블릿', category: '물품', icon: '▣', rentable: false},
    {name: '자료구조와 알고리즘', category: '도서', icon: <>A<ArrowIcon />B</>, rentable: true}
];
