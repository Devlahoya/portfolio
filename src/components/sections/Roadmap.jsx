import styled, { keyframes } from "styled-components";
import { useLanguage } from "../../context/LanguageContext";

const TYPE_COLORS = { education: "#7c3aed", work: "#00d4ff" };

export function Roadmap() {
  const { tr } = useLanguage();
  const roadmap = tr('roadmap');

  return (
    <Section id="roadmap">
      <Header>
        <SectionTag>{roadmap.tag}</SectionTag>
        <SectionTitle>{roadmap.title}</SectionTitle>
        <SectionSub>{roadmap.subtitle}</SectionSub>
      </Header>

      <Timeline>
        <TimelineAxis />
        {(roadmap.items || []).map((item, i) => (
          <TimelineItem key={i} right={i % 2 === 1}>
            <TimelineConnector>
              <TimelineDot color={TYPE_COLORS[item.type]}>
                {item.current && <PulseDot />}
              </TimelineDot>
            </TimelineConnector>
            <Card right={i % 2 === 1}>
              <CardPeriod color={TYPE_COLORS[item.type]}>{item.period}</CardPeriod>
              <CardTitle>{item.title}</CardTitle>
              <CardOrg>{item.org}</CardOrg>
              <CardDesc>{item.description}</CardDesc>
              <TagRow>
                {(item.tags || []).map((tag) => (
                  <Tag key={tag} color={TYPE_COLORS[item.type]}>{tag}</Tag>
                ))}
              </TagRow>
              {item.current && <CurrentBadge>{roadmap.currentLabel || 'Current role'}</CurrentBadge>}
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

const pulseAnim = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(2.2); opacity: 0; }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  width: 100%; background-color: #10101a; padding: 6rem 0 7rem; position: relative; overflow: hidden;
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent); }
`;
const Header = styled.div`
  width: 88%; max-width: 1200px; margin: 0 auto 5rem; display: flex; flex-direction: column; gap: 0.75rem;
`;
const SectionTag = styled.span`font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff;`;
const SectionTitle = styled.h2`font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; color: #e2e8f0; line-height: 1.2;`;
const SectionSub = styled.p`font-size: 0.95rem; color: rgba(226,232,240,0.45); font-family: 'Inter', sans-serif; max-width: 500px;`;

const Timeline = styled.div`
  width: 88%; max-width: 1100px; margin: 0 auto; position: relative;
  display: flex; flex-direction: column;
`;
const TimelineAxis = styled.div`
  position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
  background: linear-gradient(180deg, transparent, rgba(0,212,255,0.3) 10%, rgba(124,58,237,0.3) 90%, transparent);
  transform: translateX(-50%);
  @media (max-width: 64em) { left: 1.5rem; }
`;

const TimelineItem = styled.div`
  display: flex; justify-content: ${({ right }) => (right ? "flex-end" : "flex-start")};
  padding: 0 2rem; margin-bottom: 3.5rem; position: relative;
  animation: ${fadeIn} 0.5s ease forwards;
  @media (max-width: 64em) { justify-content: flex-start; padding-left: 4.5rem; padding-right: 0; }
`;
const TimelineConnector = styled.div`
  position: absolute; top: 1.5rem; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center;
  @media (max-width: 64em) { left: 1.5rem; transform: none; }
`;
const TimelineDot = styled.div`
  width: 14px; height: 14px; border-radius: 50%; background: ${({ color }) => color};
  box-shadow: 0 0 0 4px rgba(13,13,20,0.8), 0 0 0 6px ${({ color }) => color}33;
  position: relative; flex-shrink: 0;
`;
const PulseDot = styled.div`
  position: absolute; inset: 0; border-radius: 50%; background: #00d4ff;
  animation: ${pulseAnim} 2s ease-in-out infinite;
`;
const Card = styled.div`
  width: 44%; background: rgba(17,17,24,0.9); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px; padding: 1.75rem; display: flex; flex-direction: column; gap: 0.6rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
  &:hover { border-color: rgba(0,212,255,0.2); transform: translateY(-2px); }
  @media (max-width: 64em) { width: 100%; }
`;
const CardPeriod = styled.span`font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${({ color }) => color}; font-family: 'JetBrains Mono', monospace;`;
const CardTitle = styled.h3`font-size: 1.05rem; font-weight: 700; color: #e2e8f0; line-height: 1.3;`;
const CardOrg = styled.span`font-size: 0.85rem; color: rgba(226,232,240,0.45); font-weight: 500;`;
const CardDesc = styled.p`font-size: 0.875rem; color: rgba(226,232,240,0.55); line-height: 1.65; font-family: 'Inter', sans-serif; margin-top: 0.25rem;`;
const TagRow = styled.div`display: flex; flex-wrap: wrap; gap: 6px; margin-top: 0.25rem;`;
const Tag = styled.span`
  font-size: 0.72rem; font-weight: 500; padding: 3px 10px; border-radius: 100px;
  border: 1px solid ${({ color }) => color}44; color: ${({ color }) => color}; background: ${({ color }) => color}11;
`;
const CurrentBadge = styled.span`
  display: inline-flex; align-items: center; gap: 6px; font-size: 0.72rem; font-weight: 600; color: #00d4ff; margin-top: 0.25rem;
  &::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #00d4ff; animation: ${pulseAnim} 2s ease-in-out infinite; }
`;
