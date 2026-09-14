import styled from "styled-components";
import { Reveal } from "./Reveal";

/* Shared layout primitives used by every section. */

export const Section = styled.section`
  width: 100%;
  position: relative;
  padding: clamp(4.5rem, 9vw, 7.5rem) 0;
  background: ${({ $alt: alt }) => (alt ? "var(--bg-2)" : "var(--bg)")};
  &::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,224,255,0.25), rgba(139,92,246,0.25), transparent);
  }
`;

export const Container = styled.div`
  width: min(90%, var(--container));
  margin: 0 auto;
`;

const Head = styled.div`
  display: flex; flex-direction: column; gap: 0.85rem;
  margin-bottom: ${({ $tight: tight }) => (tight ? "2.5rem" : "3.75rem")};
  max-width: 760px;
`;

const Eyebrow = styled.span`
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.74rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--cyan);
  &::before { content: ''; width: 28px; height: 1px; background: var(--cyan); opacity: 0.7; }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4.2vw, 3.1rem);
  line-height: 1.08;
  color: var(--text);
  white-space: pre-line;
`;

const Sub = styled.p`
  font-family: var(--font-body);
  font-size: 1.02rem; line-height: 1.7;
  color: var(--text-2);
  max-width: 600px;
`;

export function SectionHeader({ tag, title, subtitle, tight }) {
  return (
    <Reveal>
      <Head $tight={tight}>
        {tag && <Eyebrow>{tag}</Eyebrow>}
        <Title>{title}</Title>
        {subtitle && <Sub>{subtitle}</Sub>}
      </Head>
    </Reveal>
  );
}

export const Chip = styled.span`
  display: inline-flex; align-items: center;
  padding: 5px 12px; border-radius: 100px;
  font-size: 0.76rem; font-weight: 600; letter-spacing: 0.01em;
  color: ${({ $color: color }) => color || "var(--cyan)"};
  background: ${({ $color: color }) => (color ? `${color}14` : "rgba(0,224,255,0.08)")};
  border: 1px solid ${({ $color: color }) => (color ? `${color}40` : "rgba(0,224,255,0.25)")};
  white-space: nowrap;
`;

export const Card = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  &:hover { border-color: var(--border-strong); }
`;
