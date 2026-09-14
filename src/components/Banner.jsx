import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./ui/Reveal";

export function Banner() {
  const { tr } = useLanguage();
  const b = tr("banner");

  return (
    <Wrap>
      <Glow />
      <Reveal>
        <Content>
          <Tag>{b.tag}</Tag>
          <Title className="gradient-text">{b.title}</Title>
          <Sub>{b.subtitle}</Sub>
          <Btn href="https://github.com/Devlahoya/" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            {b.button}
          </Btn>
        </Content>
      </Reveal>
    </Wrap>
  );
}

const Wrap = styled.section`
  position: relative; width: 100%; padding: 5.5rem 0; overflow: hidden; background: var(--bg-2);
  display: flex; align-items: center; justify-content: center;
  border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
`;
const Glow = styled.div`
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 800px; height: 360px; pointer-events: none;
  background: radial-gradient(ellipse, rgba(0,224,255,0.1) 0%, rgba(139,92,246,0.06) 40%, transparent 70%);
`;
const Content = styled.div`width: min(90%, 760px); margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 1.1rem; text-align: center; position: relative;`;
const Tag = styled.span`font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-3);`;
const Title = styled.h2`font-size: clamp(2rem, 4.5vw, 3.2rem); line-height: 1.1;`;
const Sub = styled.p`font-family: var(--font-body); font-size: 1rem; color: var(--text-2);`;
const Btn = styled.a`
  display: inline-flex; align-items: center; gap: 10px; padding: 0.9rem 2rem; margin-top: 0.5rem; border-radius: 12px;
  background: var(--gradient); color: #06060b; font-weight: 700; font-size: 0.95rem;
  box-shadow: 0 10px 30px rgba(0,224,255,0.25); transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,224,255,0.35); }
`;
