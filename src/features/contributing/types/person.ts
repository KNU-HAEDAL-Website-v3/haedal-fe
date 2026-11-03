export const ROLES = ['운영', '개발', '디자인', '문서', '기획', '홍보'] as const;

export type Role = typeof ROLES[number];

export interface Person {
    name: string;
    role: Role;
    bio: string;
}
