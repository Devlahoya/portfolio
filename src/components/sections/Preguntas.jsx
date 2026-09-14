import { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { Section, Container, SectionHeader } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

function FaqItem({ question, answer, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Item $open={open ? 1 : 0}>
      <Question onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <Num>{String(index + 1).padStart(2, "0")}</Num>
        <QText>{question}</QText>
        <Chevron $open={open ? 1 : 0}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
        </Chevron>
      </Question>
      <Answer $open={open ? 1 : 0}><AnswerInner>{answer}</AnswerInner></Answer>
    </Item>
  );
}

export function Preguntas() {
  const { tr } = useLanguage();
  const faq = tr("faq");

  return (
    <Section id="faq">
      <Narrow>
        <SectionHeader tag={faq.tag} title={faq.title} subtitle={faq.subtitle} tight />
        <List>
          {(faq.items || []).map((item, i) => (
            <Reveal key={i} delay={i * 0.04}><FaqItem index={i} question={item.question} answer={item.answer} /></Reveal>
          ))}
        </List>
      </Narrow>
    </Section>
  );
}

const Narrow = styled(Container)`max-width: 860px;`;
const List = styled.div`display: flex; flex-direction: column; gap: 0.6rem;`;
const Item = styled.div`
  border-radius: 14px; overflow: hidden;
  background: ${({ $open: open }) => (open ? "rgba(0,224,255,0.04)" : "var(--card)")};
  border: 1px solid ${({ $open: open }) => (open ? "rgba(0,224,255,0.3)" : "var(--border)")};
  transition: border-color 0.2s ease, background 0.2s ease;
  &:hover { border-color: rgba(0,224,255,0.3); }
`;
const Question = styled.button`
  width: 100%; display: flex; align-items: center; gap: 1rem; padding: 1.15rem 1.4rem;
  background: transparent; border: none; cursor: pointer; text-align: left; color: inherit;
`;
const Num = styled.span`font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan); flex-shrink: 0;`;
const QText = styled.span`flex: 1; font-size: 0.98rem; font-weight: 600; color: var(--text);`;
const Chevron = styled.span`
  display: flex; align-items: center; flex-shrink: 0;
  color: ${({ $open: open }) => (open ? "var(--cyan)" : "var(--text-3)")};
  transform: rotate(${({ $open: open }) => (open ? "180deg" : "0")}); transition: all 0.25s ease;
`;
const Answer = styled.div`
  display: grid; grid-template-rows: ${({ $open: open }) => (open ? "1fr" : "0fr")}; transition: grid-template-rows 0.3s ease;
`;
const AnswerInner = styled.p`
  overflow: hidden; padding: 0 1.4rem 0 3.1rem;
  font-family: var(--font-body); font-size: 0.9rem; line-height: 1.7; color: var(--text-2);
  padding-bottom: 1.2rem;
`;
