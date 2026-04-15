import styled from "styled-components";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <Item>
      <Question onClick={() => setOpen(!open)}>
        <QuestionText>{question}</QuestionText>
        <Chevron open={open}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Chevron>
      </Question>
      <Answer open={open}><AnswerInner>{answer}</AnswerInner></Answer>
    </Item>
  );
}

export function Preguntas() {
  const { tr } = useLanguage();
  const faq = tr('faq');

  return (
    <Section id="faq">
      <Header>
        <SectionTag>{faq.tag}</SectionTag>
        <SectionTitle>{faq.title}</SectionTitle>
        <SectionSub>{faq.subtitle}</SectionSub>
      </Header>
      <FaqList>
        {(faq.items || []).map((item, i) => (
          <FaqItem key={i} question={item.question} answer={item.answer} />
        ))}
      </FaqList>
    </Section>
  );
}

const Section = styled.section`
  width: 100%; background-color: #13131f; padding: 6rem 0 7rem; position: relative;
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent); }
`;
const Header = styled.div`width: 88%; max-width: 800px; margin: 0 auto 3.5rem; display: flex; flex-direction: column; gap: 0.75rem;`;
const SectionTag = styled.span`font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff;`;
const SectionTitle = styled.h2`font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; color: #e2e8f0; line-height: 1.2;`;
const SectionSub = styled.p`font-size: 0.95rem; color: rgba(226,232,240,0.45); font-family: 'Inter', sans-serif;`;
const FaqList = styled.div`width: 88%; max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.75rem;`;
const Item = styled.div`
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; overflow: hidden;
  transition: border-color 0.2s ease;
  &:hover { border-color: rgba(0,212,255,0.18); }
`;
const Question = styled.button`
  width: 100%; display: flex; justify-content: space-between; align-items: center;
  padding: 1.25rem 1.5rem; background: transparent; border: none; cursor: pointer; text-align: left; gap: 1rem;
`;
const QuestionText = styled.span`font-size: 0.95rem; font-weight: 600; color: #e2e8f0; font-family: 'Space Grotesk', sans-serif;`;
const Chevron = styled.span`
  color: ${({ open }) => open ? "#00d4ff" : "rgba(226,232,240,0.4)"};
  transform: ${({ open }) => open ? "rotate(180deg)" : "rotate(0)"}; transition: all 0.25s ease; flex-shrink: 0; display: flex; align-items: center;
`;
const Answer = styled.div`max-height: ${({ open }) => open ? "300px" : "0"}; overflow: hidden; transition: max-height 0.3s ease;`;
const AnswerInner = styled.p`padding: 0 1.5rem 1.25rem; font-size: 0.88rem; color: rgba(226,232,240,0.55); line-height: 1.7; font-family: 'Inter', sans-serif;`;
