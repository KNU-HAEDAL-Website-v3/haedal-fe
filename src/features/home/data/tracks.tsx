import {StarIcon} from '../../../shared';
import type {Track} from '../types/track';

export const TRACKS: Track[] = [
    {name: 'Python', tagline: '처음 만나는 코드의 세계', icon: 'Py', color: '#ffd98e'},
    {name: 'Web Frontend', tagline: '아이디어를 눈앞의 화면으로', icon: '</>', color: '#8ff0cf'},
    {name: 'Backend', tagline: '서비스를 움직이는 힘', icon: '{ }', color: '#b9a6ff'},
    {name: 'C / C++', tagline: '단단하게 쌓는 개발의 기본', icon: 'C++', color: '#8fb6ff'},
    {name: 'AI / Data', tagline: '데이터에서 발견하는 가능성', icon: <StarIcon />, color: '#ff9fca'},
    {name: 'Game Dev', tagline: '상상 속 세상을 플레이하다', icon: '▥', color: '#ffb48c'},
    {name: 'IoT / Hardware', tagline: '코드와 현실이 만나는 순간', icon: '▧', color: '#7fe0f0'}
];
