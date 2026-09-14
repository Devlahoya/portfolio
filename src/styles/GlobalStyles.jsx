import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #07070d;
    --bg-2: #0b0b14;
    --bg-3: #10101a;
    --card: rgba(255,255,255,0.028);
    --card-strong: rgba(17,17,26,0.92);
    --border: rgba(255,255,255,0.07);
    --border-strong: rgba(255,255,255,0.14);
    --text: #eef2f7;
    --text-2: rgba(226,232,240,0.62);
    --text-3: rgba(226,232,240,0.38);
    --cyan: #00e0ff;
    --violet: #8b5cf6;
    --crimson: #c8102e;
    --gradient: linear-gradient(135deg, #00e0ff 0%, #8b5cf6 100%);
    --font-display: 'Space Grotesk', 'Inter', sans-serif;
    --font-body: 'Inter', 'Space Grotesk', sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --container: 1200px;
    --radius: 18px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }

  body {
    font-family: var(--font-display);
    font-size: 16px;
    background-color: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); font-weight: 700; letter-spacing: -0.02em; }
  a { color: inherit; text-decoration: none; }
  button { font-family: inherit; }
  img, video { max-width: 100%; display: block; }

  ::selection { background: rgba(0,224,255,0.3); color: #fff; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, var(--cyan), var(--violet)); border-radius: 10px; }

  .gradient-text {
    background: var(--gradient);
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
`;
