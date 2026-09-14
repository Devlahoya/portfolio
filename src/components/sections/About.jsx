import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { Section, Container, SectionHeader } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

const GROUP_ICONS = ["</>", "⌘", "∑", "⚙", "◈", "☺"];

export function About() {
  const { tr } = useLanguage();
  const a = tr("about");

  return (
    <Section id="about">
      <Container>
        <SectionHeader tag={a.tag} title={a.title} />

        <Layout>
          <Reveal>
            <BioCol>
              <BioCard>
                <Quote>“</Quote>
                <BioText>{a.bio1}</BioText>
                <BioText>{a.bio2}</BioText>
                <BioText $strong>{a.bio3}</BioText>
              </BioCard>

              <LangCard>
                <SmallTitle>{a.languagesTitle}</SmallTitle>
                {(a.languages || []).map((l) => (
                  <LangRow key={l.name}>
                    <span>{l.name}</span>
                    <LangLevel>{l.level}</LangLevel>
                  </LangRow>
                ))}
              </LangCard>

              <OpenTo>
                <Live />
                {a.openTo}
              </OpenTo>
            </BioCol>
          </Reveal>

          <SkillsCol>
            <Reveal delay={0.05}><SmallTitle as="h3">{a.skillsTitle}</SmallTitle></Reveal>
            <SkillGrid>
              {(a.skillGroups || []).map((g, i) => (
                <Reveal key={g.title} delay={0.06 + i * 0.05}>
                  <SkillCard>
                    <SkillHead>
                      <SkillIcon>{GROUP_ICONS[i % GROUP_ICONS.length]}</SkillIcon>
                      <SkillTitle>{g.title}</SkillTitle>
                    </SkillHead>
                    <SkillChips>
                      {(g.items || []).map((s) => <SkillChip key={s}>{s}</SkillChip>)}
                    </SkillChips>
                  </SkillCard>
                </Reveal>
              ))}
            </SkillGrid>
          </SkillsCol>
        </Layout>
      </Container>
    </Section>
  );
}

const Layout = styled.div`
  display: grid; grid-template-columns: 0.9fr 1.35fr; gap: 2rem; align-items: start;
  @media (max-width: 64em) { grid-template-columns: 1fr; }
`;

const BioCol = styled.div`display: flex; flex-direction: column; gap: 1rem;`;

const BioCard = styled.div`
  position: relative; padding: 2rem; border-radius: 20px;
  background: linear-gradient(160deg, rgba(0,224,255,0.07), rgba(139,92,246,0.05));
  border: 1px solid rgba(0,224,255,0.18);
  display: flex; flex-direction: column; gap: 1rem;
`;
const Quote = styled.span`
  position: absolute; top: 0.4rem; right: 1.2rem; font-size: 5rem; line-height: 1; font-weight: 800;
  color: rgba(0,224,255,0.12); pointer-events: none;
`;
const BioText = styled.p`
  font-family: var(--font-body); font-size: 0.95rem; line-height: 1.75;
  color: ${({ $strong: strong }) => (strong ? "var(--text)" : "var(--text-2)")};
  font-weight: ${({ $strong: strong }) => (strong ? 500 : 400)};
`;

const LangCard = styled.div`
  padding: 1.25rem 1.5rem; border-radius: 16px;
  background: var(--card); border: 1px solid var(--border);
  display: flex; flex-direction: column; gap: 0.6rem;
`;
const SmallTitle = styled.span`
  font-family: var(--font-mono); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-3);
  margin-bottom: 0.2rem; display: block;
`;
const LangRow = styled.div`
  display: flex; justify-content: space-between; align-items: center; gap: 1rem;
  font-weight: 600; font-size: 0.92rem; color: var(--text);
`;
const LangLevel = styled.span`font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan); text-align: right;`;

const OpenTo = styled.div`
  display: inline-flex; align-items: center; gap: 10px; width: fit-content;
  padding: 0.6rem 1rem; border-radius: 100px;
  background: rgba(126,231,135,0.08); border: 1px solid rgba(126,231,135,0.3);
  font-size: 0.82rem; font-weight: 600; color: #9be8a3;
`;
const Live = styled.span`
  width: 8px; height: 8px; border-radius: 50%; background: #7ee787; box-shadow: 0 0 0 4px rgba(126,231,135,0.18);
`;

const SkillsCol = styled.div`display: flex; flex-direction: column; gap: 0.75rem;`;
const SkillGrid = styled.div`
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;
  @media (max-width: 40em) { grid-template-columns: 1fr; }
`;
const SkillCard = styled.div`
  height: 100%; padding: 1.25rem; border-radius: 16px;
  background: var(--card); border: 1px solid var(--border);
  display: flex; flex-direction: column; gap: 0.9rem;
  transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease;
  &:hover { border-color: rgba(0,224,255,0.35); transform: translateY(-3px); background: rgba(0,224,255,0.035); }
`;
const SkillHead = styled.div`display: flex; align-items: center; gap: 10px;`;
const SkillIcon = styled.span`
  width: 30px; height: 30px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: #06060b; background: var(--gradient);
`;
const SkillTitle = styled.h4`font-size: 0.95rem; font-weight: 700; color: var(--text);`;
const SkillChips = styled.div`display: flex; flex-wrap: wrap; gap: 6px;`;
const SkillChip = styled.span`
  padding: 5px 11px; border-radius: 8px; font-size: 0.78rem; font-weight: 500;
  color: var(--text-2); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.15s ease;
  ${SkillCard}:hover & { color: var(--text); }
`;
