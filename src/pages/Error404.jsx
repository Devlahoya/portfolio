import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalStyles } from "../styles/GlobalStyles";

export function Error404() {
  return (
    <main>
      <GlobalStyles />
      <Wrap>
        <Code className="gradient-text">404</Code>
        <Title>Page not found · Página no encontrada</Title>
        <Sub>The page you are looking for does not exist. / La página que buscas no existe.</Sub>
        <Btn to="/">← Back home / Volver al inicio</Btn>
      </Wrap>
    </main>
  );
}

const Wrap = styled.section`
  min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;
  text-align: center; padding: 2rem; background: var(--bg);
`;
const Code = styled.h1`font-size: clamp(5rem, 18vw, 10rem); line-height: 1; font-weight: 800;`;
const Title = styled.h2`font-size: 1.4rem; color: var(--text);`;
const Sub = styled.p`font-family: var(--font-body); color: var(--text-2); max-width: 480px;`;
const Btn = styled(Link)`
  margin-top: 1rem; padding: 0.8rem 1.6rem; border-radius: 12px; background: var(--gradient); color: #06060b; font-weight: 700;
  &:hover { transform: translateY(-2px); }
`;
