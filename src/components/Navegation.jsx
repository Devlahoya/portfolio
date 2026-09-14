import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES } from "../i18n/translations";

const NAV_LINKS = [
  { labelKey: 'nav.research', id: 'research' },
  { labelKey: 'nav.about', id: 'about' },
  { labelKey: 'nav.experience', id: 'experience' },
  { labelKey: 'nav.projects', id: 'projects' },
  { labelKey: 'nav.certificates', id: 'certificates' },
  { labelKey: 'nav.faq', id: 'faq' },
];

export function Navegation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [active, setActive] = useState('home');
  const langRef = useRef(null);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view for the active nav indicator.
  useEffect(() => {
    const ids = ['home', ...NAV_LINKS.map((l) => l.id), 'contact'];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onClick = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false); };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (id) => (e) => {
    e?.preventDefault?.();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <Nav $scrolled={scrolled ? 1 : 0}>
      <Bar>
        <Logo onClick={scrollTo('home')} />

        <Menu $open={open}>
          {NAV_LINKS.map(({ labelKey, id }) => (
            <MenuItem key={id} href={`#${id}`} onClick={scrollTo(id)} $active={active === id ? 1 : 0}>
              {t(labelKey)}
            </MenuItem>
          ))}
          <MobileOnly>
            <HireBtn href="#contact" onClick={scrollTo('contact')}>{t('nav.hire')}</HireBtn>
          </MobileOnly>
        </Menu>

        <Right>
          <LangSelector ref={langRef}>
            <LangBtn onClick={() => setLangOpen((v) => !v)} aria-label="Select language" aria-expanded={langOpen}>
              <span>{currentLang?.flag}</span>
              <span>{currentLang?.label}</span>
              <Chevron $open={langOpen}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9" /></svg>
              </Chevron>
            </LangBtn>
            {langOpen && (
              <LangDropdown>
                {LANGUAGES.map((l) => (
                  <LangOption key={l.code} $active={l.code === lang ? 1 : 0} onClick={() => { setLang(l.code); setLangOpen(false); }}>
                    <span>{l.flag}</span><span>{l.full}</span>
                  </LangOption>
                ))}
              </LangDropdown>
            )}
          </LangSelector>

          <DesktopOnly>
            <HireBtn href="#contact" onClick={scrollTo('contact')}>{t('nav.hire')}</HireBtn>
          </DesktopOnly>

          <Hamburger $open={open} onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
            <span /><span /><span />
          </Hamburger>
        </Right>
      </Bar>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
  background: ${({ $scrolled: scrolled }) => (scrolled ? "rgba(7,7,13,0.72)" : "transparent")};
  backdrop-filter: ${({ $scrolled: scrolled }) => (scrolled ? "blur(18px) saturate(140%)" : "none")};
  -webkit-backdrop-filter: ${({ $scrolled: scrolled }) => (scrolled ? "blur(18px) saturate(140%)" : "none")};
  border-bottom: 1px solid ${({ $scrolled: scrolled }) => (scrolled ? "rgba(255,255,255,0.06)" : "transparent")};
  transition: background 0.3s ease, border-color 0.3s ease;
`;

const Bar = styled.div`
  width: min(92%, var(--container)); margin: 0 auto; height: 72px;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
`;

const Menu = styled.ul`
  display: flex; align-items: center; gap: 0.15rem; list-style: none;
  @media (max-width: 64em) {
    position: fixed; inset: 72px 0 0 0; z-index: 100;
    flex-direction: column; justify-content: center; gap: 1.25rem;
    background: rgba(7,7,13,0.96); backdrop-filter: blur(20px);
    transform: ${({ $open: open }) => (open ? "translateY(0)" : "translateY(-110%)")};
    opacity: ${({ $open: open }) => (open ? 1 : 0)};
    transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease;
    pointer-events: ${({ $open: open }) => (open ? "auto" : "none")};
  }
`;

const MenuItem = styled.a`
  position: relative; display: block;
  padding: 0.45rem 0.8rem; border-radius: 8px;
  font-size: 0.86rem; font-weight: 500;
  color: ${({ $active: active }) => (active ? "var(--text)" : "var(--text-2)")};
  transition: color 0.2s ease, background 0.2s ease;
  &::after {
    content: ''; position: absolute; left: 0.8rem; right: 0.8rem; bottom: 4px; height: 2px; border-radius: 2px;
    background: var(--gradient); transform: scaleX(${({ $active: active }) => (active ? 1 : 0)}); transform-origin: left;
    transition: transform 0.25s ease;
  }
  &:hover { color: var(--text); }
  &:hover::after { transform: scaleX(1); }
  @media (max-width: 64em) { font-size: 1.35rem; padding: 0.5rem 1.5rem; &::after { display: none; } }
`;

const Right = styled.div`display: flex; align-items: center; gap: 0.6rem;`;
const DesktopOnly = styled.div`@media (max-width: 64em) { display: none; }`;
const MobileOnly = styled.li`display: none; @media (max-width: 64em) { display: block; margin-top: 1rem; }`;

const HireBtn = styled.a`
  display: inline-flex; align-items: center; gap: 8px;
  padding: 0.55rem 1.1rem; border-radius: 10px;
  font-size: 0.84rem; font-weight: 700; color: #06060b;
  background: var(--gradient);
  box-shadow: 0 6px 20px rgba(0,224,255,0.22);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,224,255,0.32); }
`;

const LangSelector = styled.div`position: relative;`;

const LangBtn = styled.button`
  display: flex; align-items: center; gap: 6px;
  padding: 6px 10px; border-radius: 9px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
  color: var(--text-2); font-size: 0.76rem; font-weight: 600; letter-spacing: 0.04em; cursor: pointer;
  transition: all 0.2s ease;
  &:hover { border-color: rgba(0,224,255,0.35); color: var(--cyan); }
`;

const Chevron = styled.span`
  display: flex; align-items: center; opacity: 0.5;
  transform: rotate(${({ $open: open }) => (open ? "180deg" : "0")}); transition: transform 0.2s ease;
`;

const LangDropdown = styled.div`
  position: absolute; top: calc(100% + 8px); right: 0; min-width: 150px; overflow: hidden;
  background: rgba(12,12,20,0.98); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
`;

const LangOption = styled.button`
  width: 100%; display: flex; align-items: center; gap: 10px; padding: 10px 14px;
  background: ${({ $active: active }) => (active ? "rgba(0,224,255,0.1)" : "transparent")};
  border: none; text-align: left; cursor: pointer;
  color: ${({ $active: active }) => (active ? "var(--cyan)" : "var(--text-2)")};
  font-size: 0.85rem; font-weight: ${({ $active: active }) => (active ? 600 : 400)};
  transition: all 0.15s ease;
  &:hover { background: rgba(0,224,255,0.08); color: var(--cyan); }
`;

const Hamburger = styled.button`
  display: none; flex-direction: column; justify-content: center; align-items: center; gap: 5px;
  width: 38px; height: 38px; background: transparent; border: none; cursor: pointer;
  span {
    display: block; width: 22px; height: 2px; border-radius: 2px; background: var(--text); transition: all 0.3s ease;
    &:first-child { transform: ${({ $open: open }) => (open ? "translateY(7px) rotate(45deg)" : "none")}; }
    &:nth-child(2) { opacity: ${({ $open: open }) => (open ? 0 : 1)}; }
    &:last-child { transform: ${({ $open: open }) => (open ? "translateY(-7px) rotate(-45deg)" : "none")}; }
  }
  @media (max-width: 64em) { display: flex; }
`;
