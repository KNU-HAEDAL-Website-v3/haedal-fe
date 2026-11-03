import {useEffect, useRef, useState} from 'react';
import {ArrowIcon, StarIcon} from '../../shared';
import {useMembershipDialogs} from '../../features/home';
import {NAV_LINKS} from '../router/routes';

export function Header({section}: {section: string}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);
    const {openApply, openLogin} = useMembershipDialogs();

    useEffect(() => setMenuOpen(false), [section]);

    useEffect(() => {
        if (!menuOpen) return;
        function onKeyDown(event: KeyboardEvent) {
            if (event.key !== 'Escape') return;
            setMenuOpen(false);
            menuButton.current?.focus();
        }
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [menuOpen]);

    return (
        <header>
            <a className="brand" href="#home"><span className="brand-icon"><StarIcon /></span> 해달<span className="brand-en">HAEDAL</span></a>
            <button
                ref={menuButton}
                className="menu"
                aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
                aria-controls="main-nav"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(open => !open)}
            >
                <span className="menu-lines" aria-hidden="true" />
            </button>
            <nav id="main-nav" aria-label="주 메뉴" className={menuOpen ? 'open' : undefined}>
                {NAV_LINKS.map(link => {
                    const href = link.href ?? `#${link.route}`;
                    const active = link.route !== undefined && link.route === section;
                    return <a key={href} href={href} className={active ? 'active' : undefined} aria-current={active ? 'page' : undefined}>{link.label}</a>;
                })}
            </nav>
            <button className="small" onClick={openLogin}>로그인</button>
            <button className="button mint small" onClick={openApply}>함께하기 <ArrowIcon /></button>
        </header>
    );
}
