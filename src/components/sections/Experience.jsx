import styled, { keyframes } from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { Section, Container, SectionHeader, Chip } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

const COLORS = { research: "#00e0ff", work: "#8b5cf6" };

export function Experience() {
  const { tr } = useLanguage();
  const x = tr("experience");

  return (
    <Section id="experience" $alt>
      <Container>
        <SectionHeader tag={x.tag} title={x.title} subtitle={x.subtitle} />

        <Timeline>
          <Rail />
          {(x.items || []).map((item, i) => {
            const color = COLORS[item.type] || COLORS.work;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <Row>
                  <Node $color={color}>{item.current && <Ping $color={color} />}</Node>
                  <Period $color={color}>{item.period}</Period>
                  <Card $color={color}>
                    <CardTop>
                      <div>
                        <Title>{item.title}</Title>
                        <Org>{item.org}{item.location && <Loc> · {item.location}</Loc>}</Org>
                      </div>
                      <Badges>
                        {item.current && <Chip $color={color}>● {x.currentLabel}</Chip>}
                        {item.badge && <Chip $color="#e11d48">{item.badge}</Chip>}
                      </Badges>
                    </CardTop>
                    <Bullets>
                      {(item.bullets || []).map((b, j) => <li key={j}><Mark $color={color} />{b}</li>)}
                    </Bullets>
                    <Tags>{(item.tags || []).map((t) => <Tag key={t}>{t}</Tag>)}</Tags>
                  </Card>
                </Row>
              </Reveal>
            );
          })}
        </Timeline>
      </Container>
    </Section>
  );
}

const ping = keyframes`0%{transform:scale(1);opacity:.8}100%{transform:scale(3);opacity:0}`;

const Timeline = styled.div`position: relative; display: flex; flex-direction: column; gap: 2rem; padding-left: 2.25rem; @media (max-width: 48em) { padding-left: 1.75rem; }`;
const Rail = styled.div`
  position: absolute; left: 7px; top: 8px; bottom: 8px; width: 2px; border-radius: 2px;
  background: linear-gradient(180deg, #00e0ff, #8b5cf6 60%, transparent);
  opacity: 0.5;
`;
const Row = styled.div`position: relative; display: flex; flex-direction: column; gap: 0.6rem;`;
const Node = styled.div`
  position: absolute; left: calc(-2.25rem + 1px); top: 6px; width: 14px; height: 14px; border-radius: 50%;
  background: ${({ $color: color }) => color}; box-shadow: 0 0 0 4px var(--bg-2), 0 0 16px ${({ $color: color }) => color};
  @media (max-width: 48em) { left: calc(-1.75rem + 1px); }
`;
const Ping = styled.span`position: absolute; inset: 0; border-radius: 50%; background: ${({ $color: color }) => color}; animation: ${ping} 1.8s ease-out infinite;`;
const Period = styled.span`font-family: var(--font-mono); font-size: 0.74rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: ${({ $color: color }) => color};`;

const Card = styled.article`
  padding: 1.6rem 1.75rem; border-radius: 18px;
  background: var(--card); border: 1px solid var(--border);
  display: flex; flex-direction: column; gap: 1rem;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  &:hover { border-color: ${({ $color: color }) => `${color}55`}; transform: translateX(4px); box-shadow: 0 20px 50px rgba(0,0,0,0.35); }
  @media (max-width: 40em) { padding: 1.25rem; }
`;
const CardTop = styled.div`display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;`;
const Title = styled.h3`font-size: 1.15rem; line-height: 1.3; color: var(--text);`;
const Org = styled.p`font-size: 0.9rem; color: var(--text-2); font-weight: 500; margin-top: 3px;`;
const Loc = styled.span`color: var(--text-3); font-weight: 400;`;
const Badges = styled.div`display: flex; gap: 6px; flex-wrap: wrap;`;
const Bullets = styled.ul`
  list-style: none; display: flex; flex-direction: column; gap: 0.5rem;
  li { display: flex; gap: 12px; align-items: flex-start; font-family: var(--font-body); font-size: 0.9rem; line-height: 1.6; color: var(--text-2); }
`;
const Mark = styled.span`flex-shrink: 0; width: 6px; height: 6px; border-radius: 2px; margin-top: 0.55em; background: ${({ $color: color }) => color}; transform: rotate(45deg);`;
const Tags = styled.div`display: flex; flex-wrap: wrap; gap: 6px;`;
const Tag = styled.span`
  font-family: var(--font-mono); font-size: 0.68rem; padding: 4px 9px; border-radius: 6px;
  color: var(--text-2); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
`;
