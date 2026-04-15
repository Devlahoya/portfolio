import styled from "styled-components";

export function Button({ text, link, type, onClick }) {
  if (link) {
    return (
      <BtnLink href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </BtnLink>
    );
  }
  return (
    <Btn type={type || "button"} onClick={onClick}>
      {text}
    </Btn>
  );
}

const base = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.02em;
  border: none;
  font-family: 'Space Grotesk', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 212, 255, 0.25);
  }
`;

const BtnLink = styled.a`${base}`;
const Btn = styled.button`${base}`;
