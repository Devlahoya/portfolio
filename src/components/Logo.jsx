import styled from "styled-components";

export function Logo({ onClick }) {
  return (
    <Wrap href="#home" onClick={onClick} aria-label="Home">
      <Mark>
        <span>H</span><span>M</span>
      </Mark>
      <Text>
        devlahoya<Dot>.</Dot>
      </Text>
    </Wrap>
  );
}

const Wrap = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.85; }
`;

const Mark = styled.span`
  width: 34px; height: 34px; border-radius: 9px;
  background: var(--gradient);
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 800; font-size: 0.78rem; letter-spacing: -0.06em; color: #06060b;
  box-shadow: 0 6px 18px rgba(0,224,255,0.25);
`;

const Text = styled.span`
  font-family: var(--font-display); font-weight: 700; font-size: 1.05rem; letter-spacing: -0.02em; color: var(--text);
  @media (max-width: 26em) { display: none; }
`;

const Dot = styled.span`color: var(--cyan);`;
