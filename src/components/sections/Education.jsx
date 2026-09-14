import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { Section, Container, SectionHeader } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function Education() {
  const { tr } = useLanguage();
  const e = tr("education");

  return (
    <Section id="education">
      <Container>
        <SectionHeader tag={e.tag} title={e.title} tight />
        <Grid>
          {(e.items || []).map((it, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Card $highlight={it.highlight ? 1 : 0}>
                <Top>
                  <Icon>{it.icon}</Icon>
                  <Period>{it.period}</Period>
                </Top>
                <Title>{it.title}</Title>
                <Place>{it.place}</Place>
                {it.note && <Note>{it.note}</Note>}
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const Grid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;
  @media (max-width: 64em) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 36em) { grid-template-columns: 1fr; }
`;
const Card = styled.article`
  height: 100%; padding: 1.4rem; border-radius: 18px; display: flex; flex-direction: column; gap: 0.5rem;
  background: ${({ $highlight: highlight }) => (highlight ? "linear-gradient(160deg, rgba(0,224,255,0.09), rgba(139,92,246,0.07))" : "var(--card)")};
  border: 1px solid ${({ $highlight: highlight }) => (highlight ? "rgba(0,224,255,0.3)" : "var(--border)")};
  transition: transform 0.25s ease, border-color 0.25s ease;
  &:hover { transform: translateY(-4px); border-color: rgba(0,224,255,0.4); }
`;
const Top = styled.div`display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;`;
const Icon = styled.span`
  width: 40px; height: 40px; border-radius: 11px; display: inline-flex; align-items: center; justify-content: center; font-size: 1.15rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
`;
const Period = styled.span`font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.06em; color: var(--cyan); text-align: right;`;
const Title = styled.h3`font-size: 1rem; line-height: 1.3; color: var(--text);`;
const Place = styled.p`font-family: var(--font-body); font-size: 0.82rem; line-height: 1.5; color: var(--text-2);`;
const Note = styled.p`font-family: var(--font-body); font-size: 0.76rem; color: var(--text-3); margin-top: auto; padding-top: 0.5rem;`;
