import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Devlahoya/", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devlahoya/", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "Instagram", href: "https://www.instagram.com/delahoyagg/", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: "Facebook", href: "https://www.facebook.com/HectorMtzDeLaHoya", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
];

export function Footer() {
  const { t, tr } = useLanguage();
  const footer = tr('footer');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NAV_LINKS = [
    { labelKey: 'nav.home', id: 'home' }, { labelKey: 'nav.about', id: 'about' },
    { labelKey: 'nav.experience', id: 'roadmap' }, { labelKey: 'nav.projects', id: 'projects' },
    { labelKey: 'nav.contact', id: 'contact' },
  ];

  return (
    <FooterEl>
      <TopLine />
      <Container>
        <Brand>
          <BrandName>Devlahoya</BrandName>
          <BrandSub>{footer.role}</BrandSub>
          <SocialRow>
            {SOCIALS.map(({ label, href, icon }) => (
              <SocialBtn key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{icon}</SocialBtn>
            ))}
          </SocialRow>
        </Brand>
        <NavCol>
          <ColTitle>{footer.nav}</ColTitle>
          {NAV_LINKS.map(({ labelKey, id }) => (
            <NavLink key={id} onClick={() => scrollTo(id)}>{t(labelKey)}</NavLink>
          ))}
        </NavCol>
        <NavCol>
          <ColTitle>{footer.contact}</ColTitle>
          <NavHref href="mailto:devlahoya@gmail.com">devlahoya@gmail.com</NavHref>
          <NavHref href="https://wa.me/526182343529" target="_blank">WhatsApp</NavHref>
          <NavHref href="https://www.linkedin.com/in/devlahoya/" target="_blank">LinkedIn</NavHref>
        </NavCol>
      </Container>
      <Bottom>
        <BottomText>© {new Date().getFullYear()} Hector Martinez · {footer.rights}</BottomText>
        <BottomText muted>{footer.built}</BottomText>
      </Bottom>
    </FooterEl>
  );
}

const FooterEl = styled.footer`width: 100%; background-color: #0d0d17; padding: 4rem 0 2rem; position: relative;`;
const TopLine = styled.div`position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(124,58,237,0.2), transparent);`;
const Container = styled.div`
  width: 88%; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem;
  padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.05);
  @media (max-width: 48em) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 32em) { grid-template-columns: 1fr; }
`;
const Brand = styled.div`display: flex; flex-direction: column; gap: 0.6rem;`;
const BrandName = styled.span`
  font-size: 1.3rem; font-weight: 700;
  background: linear-gradient(135deg, #00d4ff, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
`;
const BrandSub = styled.span`font-size: 0.8rem; color: rgba(226,232,240,0.35); font-family: 'Inter', sans-serif;`;
const SocialRow = styled.div`display: flex; gap: 8px; margin-top: 0.5rem;`;
const SocialBtn = styled.a`
  width: 36px; height: 36px; border-radius: 8px; background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07); display: flex; align-items: center; justify-content: center;
  color: rgba(226,232,240,0.5); transition: all 0.2s ease;
  &:hover { color: #00d4ff; border-color: rgba(0,212,255,0.3); background: rgba(0,212,255,0.06); }
`;
const NavCol = styled.div`display: flex; flex-direction: column; gap: 0.75rem;`;
const ColTitle = styled.span`font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(226,232,240,0.35); margin-bottom: 0.25rem;`;
const NavLink = styled.button`
  background: none; border: none; padding: 0; cursor: pointer; text-align: left;
  font-size: 0.875rem; color: rgba(226,232,240,0.55); font-family: 'Space Grotesk', sans-serif; width: fit-content; transition: color 0.2s ease;
  &:hover { color: #00d4ff; }
`;
const NavHref = styled.a`font-size: 0.875rem; color: rgba(226,232,240,0.55); width: fit-content; transition: color 0.2s ease; &:hover { color: #00d4ff; }`;
const Bottom = styled.div`
  width: 88%; max-width: 1200px; margin: 2rem auto 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;
  @media (max-width: 48em) { flex-direction: column; align-items: flex-start; }
`;
const BottomText = styled.span`font-size: 0.78rem; color: ${({ muted }) => muted ? "rgba(226,232,240,0.2)" : "rgba(226,232,240,0.35)"}; font-family: 'Inter', sans-serif;`;
