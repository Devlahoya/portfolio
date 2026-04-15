import React, { useTransition, useState } from "react";
import styled from "styled-components";
import TabButton from "./TabButton";
import { useLanguage } from "../../context/LanguageContext";

export function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { tr } = useLanguage();
  const about = tr('about');

  const handleTabChange = (id) => startTransition(() => setTab(id));

  const tabContent = {
    skills: (
      <SkillGrid>
        {(about.skills || []).map((skill) => (
          <SkillItem key={skill.name}>
            <SkillHeader>
              <SkillName>{skill.name}</SkillName>
              <SkillPercent>{skill.level}%</SkillPercent>
            </SkillHeader>
            <SkillBar><SkillFill style={{ width: `${skill.level}%` }} /></SkillBar>
          </SkillItem>
        ))}
      </SkillGrid>
    ),
    education: (
      <EduList>
        {(about.education || []).map((edu, i) => (
          <EduItem key={i}>
            <EduYear>{edu.period}</EduYear>
            <EduTitle>{edu.title}</EduTitle>
            <EduPlace>{edu.place}</EduPlace>
          </EduItem>
        ))}
      </EduList>
    ),
    certifications: (
      <CertList>
        {(about.certs || []).map((cert, i) => (
          <CertItem key={i}>
            <CertIcon>{cert.icon}</CertIcon>
            <CertInfo>
              <CertName>{cert.name}</CertName>
              {cert.link && <CertLink href={cert.link} target="_blank">View certificate →</CertLink>}
            </CertInfo>
          </CertItem>
        ))}
      </CertList>
    ),
  };

  const tabs = about.tabs || { skills: 'Skills', education: 'Education', certifications: 'Certifications' };

  return (
    <Section id="about">
      <SectionHeader>
        <SectionTag>{about.tag}</SectionTag>
        <SectionTitle>{about.title}</SectionTitle>
      </SectionHeader>

      <Container>
        <StatsColumn>
          <StatCard>
            <StatNumber className="gradient-text">5+</StatNumber>
            <StatLabel>{about.yearsIT}</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber className="gradient-text">30+</StatNumber>
            <StatLabel>{about.projects}</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber className="gradient-text">C2</StatNumber>
            <StatLabel>{about.english}</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber className="gradient-text">8+</StatNumber>
            <StatLabel>{about.companies}</StatLabel>
          </StatCard>
          <BioCard>
            <BioText>{about.bio1}</BioText>
            <BioText>
              {about.bio2?.split(about.highlight || '___')[0]}
              {about.highlight && <Highlight>{about.highlight}</Highlight>}
              {about.bio2?.split(about.highlight || '___')[1]}
            </BioText>
          </BioCard>
        </StatsColumn>

        <TabsColumn>
          <TabRow>
            {['skills', 'education', 'certifications'].map((id) => (
              <TabButton key={id} selectTab={() => handleTabChange(id)} active={tab === id}>
                {tabs[id]}
              </TabButton>
            ))}
          </TabRow>
          <TabContent>{tabContent[tab]}</TabContent>
        </TabsColumn>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%; background-color: #13131f; padding: 6rem 0 5rem; position: relative;
`;
const SectionHeader = styled.div`
  width: 88%; max-width: 1200px; margin: 0 auto 4rem;
  display: flex; flex-direction: column; gap: 0.75rem;
`;
const SectionTag = styled.span`
  font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff;
`;
const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; color: #e2e8f0; line-height: 1.2;
  white-space: pre-line;
`;
const Container = styled.div`
  width: 88%; max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1.5fr; gap: 3rem;
  @media (max-width: 64em) { grid-template-columns: 1fr; }
`;
const StatsColumn = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-content: start;
`;
const StatCard = styled.div`
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px; padding: 1.25rem; display: flex; flex-direction: column; gap: 4px;
  transition: border-color 0.2s ease;
  &:hover { border-color: rgba(0,212,255,0.2); }
`;
const StatNumber = styled.span`font-size: 2rem; font-weight: 700; line-height: 1;`;
const StatLabel = styled.span`font-size: 0.78rem; color: rgba(226,232,240,0.45); font-weight: 500;`;
const BioCard = styled.div`
  grid-column: 1 / -1; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;
`;
const BioText = styled.p`
  font-size: 0.9rem; color: rgba(226,232,240,0.6); line-height: 1.7; font-family: 'Inter', sans-serif;
`;
const Highlight = styled.span`color: #00d4ff; font-weight: 600;`;
const TabsColumn = styled.div`display: flex; flex-direction: column; gap: 1.5rem;`;
const TabRow = styled.div`display: flex; gap: 0.5rem; flex-wrap: wrap;`;
const TabContent = styled.div`
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px; padding: 1.75rem; min-height: 280px;
`;
const SkillGrid = styled.div`display: flex; flex-direction: column; gap: 1rem;`;
const SkillItem = styled.div`display: flex; flex-direction: column; gap: 6px;`;
const SkillHeader = styled.div`display: flex; justify-content: space-between;`;
const SkillName = styled.span`font-size: 0.85rem; font-weight: 500; color: #e2e8f0;`;
const SkillPercent = styled.span`font-size: 0.78rem; color: rgba(226,232,240,0.4); font-family: 'JetBrains Mono', monospace;`;
const SkillBar = styled.div`width: 100%; height: 4px; background: rgba(255,255,255,0.07); border-radius: 4px; overflow: hidden;`;
const SkillFill = styled.div`height: 100%; background: linear-gradient(90deg, #00d4ff, #7c3aed); border-radius: 4px;`;
const EduList = styled.div`display: flex; flex-direction: column; gap: 1.25rem;`;
const EduItem = styled.div`
  display: flex; flex-direction: column; gap: 3px; padding-left: 1rem;
  border-left: 2px solid rgba(0,212,255,0.3);
`;
const EduYear = styled.span`font-size: 0.72rem; color: #00d4ff; font-family: 'JetBrains Mono', monospace; font-weight: 500;`;
const EduTitle = styled.span`font-size: 0.95rem; font-weight: 600; color: #e2e8f0;`;
const EduPlace = styled.span`font-size: 0.82rem; color: rgba(226,232,240,0.45);`;
const CertList = styled.div`display: flex; flex-direction: column; gap: 1rem;`;
const CertItem = styled.div`display: flex; align-items: flex-start; gap: 12px;`;
const CertIcon = styled.span`font-size: 1.1rem; margin-top: 1px;`;
const CertInfo = styled.div`display: flex; flex-direction: column; gap: 2px;`;
const CertName = styled.span`font-size: 0.88rem; color: #e2e8f0; font-weight: 500;`;
const CertLink = styled.a`
  font-size: 0.78rem; color: #00d4ff;
  &:hover { text-decoration: underline; opacity: 0.8; }
`;
