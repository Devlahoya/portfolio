import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES } from "../i18n/translations";

export function Navegation() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setClick(false);
  };

  const NAV_LINKS = [
    { labelKey: 'nav.home', id: 'home' },
    { labelKey: 'nav.about', id: 'about' },
    { labelKey: 'nav.experience', id: 'roadmap' },
    { labelKey: 'nav.projects', id: 'projects' },
    { labelKey: 'nav.trustedBy', id: 'trusted' },
    { labelKey: 'nav.faq', id: 'faq' },
    { labelKey: 'nav.contact', id: 'contact' },
  ];

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <Nav scrolled={scrolled} id="navegation">
      <NavBar>
        <Logo Text="Devlahoya" Link="/" />

        <RightSide>
          {/* Language Selector */}
          <LangSelector ref={langRef}>
            <LangBtn onClick={() => setLangOpen(!langOpen)} aria-label="Select language">
              <span>{currentLang?.flag}</span>
              <span>{currentLang?.label}</span>
              <Chevron open={langOpen}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Chevron>
            </LangBtn>
            {langOpen && (
              <LangDropdown>
                {LANGUAGES.map((l) => (
                  <LangOption
                    key={l.code}
                    active={l.code === lang}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                  >
                    <span>{l.flag}</span>
                    <span>{l.full}</span>
                  </LangOption>
                ))}
              </LangDropdown>
            )}
          </LangSelector>

          {/* Hamburger */}
          <HamburgerMenu click={click} onClick={() => setClick(!click)}>
            <span /><span /><span />
          </HamburgerMenu>
        </RightSide>

        <Menu click={click}>
          {NAV_LINKS.map(({ labelKey, id }) => (
            <MenuItem key={id} onClick={() => scrollTo(id)}>
              {t(labelKey)}
            </MenuItem>
          ))}
        </Menu>
      </NavBar>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: ${({ scrolled }) => scrolled ? "rgba(19,19,31,0.9)" : "transparent"};
  backdrop-filter: ${({ scrolled }) => scrolled ? "blur(16px)" : "none"};
  border-bottom: ${({ scrolled }) => scrolled ? "1px solid rgba(255,255,255,0.07)" : "none"};
  transition: all 0.3s ease;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  max-width: 1200px;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 10;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 0.25rem;

  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0; right: 0; bottom: 0;
    width: 100vw;
    z-index: 100;
    background: rgba(19, 19, 31, 0.97);
    backdrop-filter: blur(20px);
    transform: ${({ click }) => click ? "translateY(0)" : "translateY(-120%)"};
    opacity: ${({ click }) => click ? "1" : "0"};
    transition: transform 0.35s ease, opacity 0.35s ease;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
`;

const MenuItem = styled.li`
  padding: 0.5rem 0.85rem;
  color: rgba(226,232,240,0.7);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #00d4ff;
    background: rgba(0,212,255,0.08);
  }

  @media (max-width: 64em) {
    font-size: 1.3rem;
    padding: 0.5rem 2rem;
    color: #e2e8f0;
  }
`;

/* ── Language selector ── */
const LangSelector = styled.div`
  position: relative;
`;

const LangBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  color: rgba(226,232,240,0.8);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.04em;
  font-family: 'Space Grotesk', sans-serif;

  &:hover {
    border-color: rgba(0,212,255,0.35);
    color: #00d4ff;
    background: rgba(0,212,255,0.06);
  }
`;

const Chevron = styled.span`
  display: flex;
  align-items: center;
  transform: ${({ open }) => open ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.2s ease;
  opacity: 0.5;
`;

const LangDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: rgba(17,17,24,0.97);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  overflow: hidden;
  min-width: 140px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
  backdrop-filter: blur(12px);
`;

const LangOption = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: ${({ active }) => active ? "rgba(0,212,255,0.1)" : "transparent"};
  border: none;
  color: ${({ active }) => active ? "#00d4ff" : "rgba(226,232,240,0.7)"};
  font-size: 0.85rem;
  font-weight: ${({ active }) => active ? "600" : "400"};
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: left;
  font-family: 'Space Grotesk', sans-serif;

  &:hover {
    background: rgba(0,212,255,0.08);
    color: #00d4ff;
  }
`;

const HamburgerMenu = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #e2e8f0;
    border-radius: 2px;
    transition: all 0.3s ease;

    &:first-child { transform: ${({ click }) => click ? "translateY(7px) rotate(45deg)" : "none"}; }
    &:nth-child(2) { opacity: ${({ click }) => click ? "0" : "1"}; }
    &:last-child { transform: ${({ click }) => click ? "translateY(-7px) rotate(-45deg)" : "none"}; }
  }

  @media (max-width: 64em) { display: flex; }
`;
