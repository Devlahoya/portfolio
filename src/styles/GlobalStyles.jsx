import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :root {
    --accent: #00d4ff;
    --accent-secondary: #7c3aed;
    --gradient: linear-gradient(135deg, #00d4ff, #7c3aed);
    --bg: #0d0d14;
    --card: #111118;
    --border: rgba(255,255,255,0.08);
    --text: #e2e8f0;
    --muted: #64748b;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-size: 17px;
    background-color: #13131f;
    color: #e2e8f0;
    overflow-x: hidden;
    line-height: 1.65;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: rgba(0, 212, 255, 0.3);
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #13131f;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00d4ff, #7c3aed);
    border-radius: 10px;
  }

  .gradient-text {
    background: linear-gradient(135deg, #00d4ff, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;
