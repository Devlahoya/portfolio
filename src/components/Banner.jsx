import styled, { keyframes } from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const TECH_TAGS = ["Python", "PyTorch", "ML/AI", "React", "Node.js", "PostgreSQL", "JavaScript", "Express", "QA Testing", "Selenium", "WordPress", "Git", "Data Science", "REST APIs"];

export function Banner() {
  const { tr } = useLanguage();
  const banner = tr('banner');

  return (
    <Section>
      <GlowBg />
      <Content>
        <Tag>{banner.tag}</Tag>
        <Title><span className="gradient-text">{banner.title}</span></Title>
        <Sub>{banner.subtitle}</Sub>
        <TechScroll>
          <TechTrack>
            {[...TECH_TAGS, ...TECH_TAGS].map((tag, i) => <TechChip key={i}>{tag}</TechChip>)}
          </TechTrack>
        </TechScroll>
        <GithubBtn href="https://github.com/Devlahoya/" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          {banner.button}
        </GithubBtn>
      </Content>
    </Section>
  );
}

const scroll = keyframes`from { transform: translateX(0); } to { transform: translateX(-50%); }`;

const Section = styled.section`
  width: 100%; background: #10101a; padding: 5rem 0; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent); }
  &::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent); }
`;
const GlowBg = styled.div`
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 600px; height: 300px; background: radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%); pointer-events: none;
`;
const Content = styled.div`
  width: 88%; max-width: 800px; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; z-index: 1; text-align: center;
`;
const Tag = styled.span`font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(226,232,240,0.4);`;
const Title = styled.h2`font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: #e2e8f0; line-height: 1.15;`;
const Sub = styled.p`font-size: 0.95rem; color: rgba(226,232,240,0.45); font-family: 'Inter', sans-serif;`;
const TechScroll = styled.div`width: 100vw; overflow: hidden; mask-image: linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%);`;
const TechTrack = styled.div`display: flex; gap: 0.75rem; animation: ${scroll} 22s linear infinite; width: max-content;`;
const TechChip = styled.span`
  padding: 6px 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 100px; font-size: 0.8rem; color: rgba(226,232,240,0.6); white-space: nowrap; font-weight: 500;
`;
const GithubBtn = styled.a`
  display: inline-flex; align-items: center; gap: 10px; padding: 0.85rem 2rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed); color: #fff; font-size: 0.95rem; font-weight: 600;
  border-radius: 12px; transition: all 0.25s ease;
  &:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,212,255,0.25); }
`;
