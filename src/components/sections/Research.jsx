import styled, { keyframes } from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { Section, Container, SectionHeader, Chip } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import itdLogo from "../../assets/about/itd.png";

const CRIMSON = "#e11d48";
const CYAN = "#00e0ff";

function Bullets({ items, color }) {
  return (
    <List>
      {(items || []).map((b, i) => (
        <li key={i}><Tick $color={color}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></Tick>{b}</li>
      ))}
    </List>
  );
}

export function Research() {
  const { tr } = useLanguage();
  const r = tr("research");
  const { nmsu = {}, itd = {}, compute = {} } = r;

  return (
    <Section id="research" $alt>
      <Container>
        <SectionHeader tag={r.tag} title={r.title} subtitle={r.subtitle} />

        <Bento>
          {/* ── NMSU ── */}
          <Reveal style={{ gridArea: "nmsu" }}>
            <Inst $accent={CRIMSON}>
              <Shine $accent={CRIMSON} />
              <InstTop>
                <LogoBox $crimson>
                  <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
                    <rect x="4" y="4" width="56" height="56" rx="10" fill="#c8102e" />
                    <text x="32" y="40" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="17" fill="#fff" letterSpacing="-0.5">NMSU</text>
                  </svg>
                </LogoBox>
                <Status $accent={CRIMSON}><Dot $accent={CRIMSON} />{nmsu.status}</Status>
              </InstTop>
              <InstName>{nmsu.name}</InstName>
              <InstMeta>
                <span>📍 {nmsu.location}</span>
                <span>🗓 {nmsu.period}</span>
              </InstMeta>
              <InstRole>{nmsu.role}</InstRole>
              <Visa $accent={CRIMSON}>{nmsu.visa}</Visa>
              <InstDesc>{nmsu.desc}</InstDesc>
              <Bullets items={nmsu.bullets} color={CRIMSON} />
              <Tags>{(nmsu.tags || []).map((t) => <Chip key={t} $color={CRIMSON}>{t}</Chip>)}</Tags>
            </Inst>
          </Reveal>

          {/* ── ITD ── */}
          <Reveal delay={0.08} style={{ gridArea: "itd" }}>
            <Inst $accent={CYAN}>
              <Shine $accent={CYAN} />
              <InstTop>
                <LogoBox><img src={itdLogo} alt="Instituto Tecnológico de Durango" /></LogoBox>
                <Status $accent={CYAN}><Dot $accent={CYAN} />{itd.status}</Status>
              </InstTop>
              <InstName>{itd.name}</InstName>
              {itd.subname && <InstSub>{itd.subname}</InstSub>}
              <InstMeta>
                <span>📍 {itd.location}</span>
                <span>🗓 {itd.period}</span>
              </InstMeta>
              <InstRole>{itd.role}</InstRole>
              <Visa $accent={CYAN}>🎓 {itd.degree}</Visa>
              <InstDesc>{itd.desc}</InstDesc>
              <Bullets items={itd.bullets} color={CYAN} />
              <Tags>{(itd.tags || []).map((t) => <Chip key={t} $color={CYAN}>{t}</Chip>)}</Tags>
            </Inst>
          </Reveal>

          {/* ── Compute ── */}
          <Reveal delay={0.16} style={{ gridArea: "compute" }}>
            <Compute>
              <ComputeTitle>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="6" rx="1.5"/><rect x="2" y="15" width="20" height="6" rx="1.5"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg>
                {compute.title}
              </ComputeTitle>
              {(compute.items || []).map((c, i) => (
                <ComputeItem key={i}>
                  <Flag>{c.flag}</Flag>
                  <div>
                    <b>{c.name}</b>
                    <small>{c.org}</small>
                    <p>{c.desc}</p>
                  </div>
                  <Bar><span style={{ animationDelay: `${i * 0.6}s` }} /></Bar>
                </ComputeItem>
              ))}
            </Compute>
          </Reveal>
        </Bento>
      </Container>
    </Section>
  );
}

const scan = keyframes`0%{transform:translateX(-100%)}100%{transform:translateX(400%)}`;

const Bento = styled.div`
  display: grid; gap: 1.25rem;
  grid-template-columns: 1.1fr 1.1fr 0.85fr;
  grid-template-areas: "nmsu itd compute";
  > * { min-width: 0; }
  @media (max-width: 70em) { grid-template-columns: 1fr 1fr; grid-template-areas: "nmsu itd" "compute compute"; }
  @media (max-width: 48em) { grid-template-columns: 1fr; grid-template-areas: "nmsu" "itd" "compute"; }
`;

const Inst = styled.article`
  position: relative; height: 100%; overflow: hidden;
  display: flex; flex-direction: column; gap: 0.7rem;
  padding: 1.75rem; border-radius: 22px;
  background: linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015));
  border: 1px solid rgba(255,255,255,0.08);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  &:hover { transform: translateY(-4px); border-color: ${({ $accent: accent }) => `${accent}66`}; box-shadow: 0 30px 60px rgba(0,0,0,0.45), 0 0 0 1px ${({ $accent: accent }) => `${accent}22`}; }
`;
const Shine = styled.div`
  position: absolute; top: -120px; right: -120px; width: 280px; height: 280px; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, ${({ $accent: accent }) => `${accent}33`}, transparent 65%);
`;
const InstTop = styled.div`display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.4rem;`;
const LogoBox = styled.div`
  width: 62px; height: 62px; border-radius: 14px; display: flex; align-items: center; justify-content: center; overflow: hidden;
  background: ${({ $crimson: crimson }) => (crimson ? "rgba(200,16,46,0.12)" : "#fff")};
  border: 1px solid rgba(255,255,255,0.1);
  img { width: 100%; height: 100%; object-fit: contain; padding: 5px; }
`;
const Status = styled.span`
  display: inline-flex; align-items: center; gap: 7px; padding: 5px 11px; border-radius: 100px;
  font-family: var(--font-mono); font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  color: ${({ $accent: accent }) => accent}; background: ${({ $accent: accent }) => `${accent}14`}; border: 1px solid ${({ $accent: accent }) => `${accent}40`};
`;
const Dot = styled.span`width: 6px; height: 6px; border-radius: 50%; background: ${({ $accent: accent }) => accent}; box-shadow: 0 0 10px ${({ $accent: accent }) => accent};`;
const InstName = styled.h3`font-size: 1.45rem; line-height: 1.15; color: var(--text);`;
const InstSub = styled.span`font-size: 0.85rem; color: var(--text-2); margin-top: -0.4rem;`;
const InstMeta = styled.div`
  display: flex; flex-wrap: wrap; gap: 0.5rem 1.2rem;
  font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-3);
`;
const InstRole = styled.p`font-weight: 700; font-size: 1rem; color: var(--text); margin-top: 0.4rem;`;
const Visa = styled.span`
  display: inline-block; width: fit-content; padding: 4px 10px; border-radius: 8px;
  font-family: var(--font-mono); font-size: 0.72rem; font-weight: 600;
  color: ${({ $accent: accent }) => accent}; background: ${({ $accent: accent }) => `${accent}12`}; border: 1px dashed ${({ $accent: accent }) => `${accent}55`};
`;
const InstDesc = styled.p`font-family: var(--font-body); font-size: 0.92rem; line-height: 1.7; color: var(--text-2);`;
const List = styled.ul`
  list-style: none; display: flex; flex-direction: column; gap: 0.55rem; margin-top: 0.2rem;
  li { display: flex; gap: 10px; align-items: flex-start; font-family: var(--font-body); font-size: 0.88rem; line-height: 1.55; color: var(--text-2); }
`;
const Tick = styled.span`
  flex-shrink: 0; width: 18px; height: 18px; border-radius: 6px; margin-top: 2px;
  display: inline-flex; align-items: center; justify-content: center;
  color: ${({ $color: color }) => color}; background: ${({ $color: color }) => `${color}18`};
`;
const Tags = styled.div`display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; padding-top: 0.75rem;`;

const Compute = styled.div`
  height: 100%; display: flex; flex-direction: column; gap: 0.9rem; padding: 1.5rem; border-radius: 22px;
  background: rgba(10,10,17,0.8); border: 1px solid rgba(255,255,255,0.08);
`;
const ComputeTitle = styled.h3`
  display: flex; align-items: center; gap: 9px;
  font-family: var(--font-mono); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--cyan);
  margin-bottom: 0.2rem;
`;
const ComputeItem = styled.div`
  position: relative; display: flex; gap: 12px; align-items: flex-start; padding: 1rem; border-radius: 14px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); overflow: hidden;
  transition: border-color 0.2s ease;
  &:hover { border-color: rgba(0,224,255,0.35); }
  div { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  b { font-size: 0.95rem; color: var(--text); }
  small { font-family: var(--font-mono); font-size: 0.66rem; color: var(--text-3); letter-spacing: 0.04em; }
  p { font-family: var(--font-body); font-size: 0.8rem; line-height: 1.5; color: var(--text-2); margin-top: 4px; }
`;
const Flag = styled.span`font-size: 1.3rem; line-height: 1; flex-shrink: 0; margin-top: 2px;`;
const Bar = styled.div`
  position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: rgba(255,255,255,0.05); overflow: hidden;
  span { display: block; width: 25%; height: 100%; background: var(--gradient); animation: ${scan} 3.2s linear infinite; }
`;
