import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import cveng from "../../assets/cveng.pdf";
import itdLogo from "../../assets/about/itd.png";

/* ───────────── typed terminal ───────────── */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function useTerminal(lines) {
  const [shown, setShown] = useState([]);   // fully revealed lines
  const [typing, setTyping] = useState(""); // partial cmd line being typed

  useEffect(() => {
    if (!lines?.length) return;
    let alive = true;
    (async () => {
      while (alive) {
        setShown([]); setTyping("");
        await sleep(400);
        for (const line of lines) {
          if (!alive) return;
          if (line.type === "cmd") {
            for (let i = 1; i <= line.text.length; i++) {
              if (!alive) return;
              setTyping(line.text.slice(0, i));
              await sleep(26 + Math.random() * 38);
            }
            await sleep(220);
            setTyping("");
            setShown((s) => [...s, line]);
            await sleep(350);
          } else {
            await sleep(240);
            setShown((s) => [...s, line]);
          }
        }
        await sleep(4200);
      }
    })();
    return () => { alive = false; };
  }, [lines]);

  return { shown, typing };
}

export function Home() {
  const { tr, lang } = useLanguage();
  const hero = tr("hero");
  const marquee = tr("marquee");
  const { shown, typing } = useTerminal(hero.terminal?.lines);
  const spotRef = useRef(null);

  // Mouse-following spotlight (desktop only)
  useEffect(() => {
    const el = spotRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <Hero id="home">
      <Spotlight ref={spotRef} />
      <Grid />
      <Orb style={{ top: "-10%", left: "-10%", background: "rgba(0,224,255,0.16)" }} />
      <Orb style={{ bottom: "-15%", right: "-5%", background: "rgba(139,92,246,0.18)", animationDelay: "-4s" }} />
      <Orb style={{ top: "30%", right: "30%", width: 320, height: 320, background: "rgba(200,16,46,0.08)", animationDelay: "-2s" }} />

      <Inner>
        <Left>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge>
              <Pulse />
              {hero.badge}
            </Badge>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
            <Greeting>{hero.greeting}</Greeting>
            <Name>{hero.name}</Name>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}>
            <RoleLine>
              <span>{hero.rolePrefix}</span>{" "}
              <Typewriter
                key={lang}
                options={{ autoStart: true, loop: true, delay: 45, deleteSpeed: 22 }}
                onInit={(tw) => {
                  (hero.roles || []).forEach((r) => tw.typeString(`<span class="tw-role">${r}</span>`).pauseFor(1700).deleteAll());
                  tw.start();
                }}
              />
            </RoleLine>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}>
            <Tagline>{hero.tagline}</Tagline>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }}>
            <Ctas>
              <Primary href={cveng} target="_blank" rel="noopener noreferrer" download>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {hero.ctaPrimary}
              </Primary>
              <Secondary href="#contact" onClick={scrollTo("contact")}>
                {hero.ctaSecondary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Secondary>
              <Socials>
                <Social href="https://github.com/Devlahoya/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </Social>
                <Social href="https://www.linkedin.com/in/devlahoya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Social>
              </Socials>
            </Ctas>
            <Location>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {hero.location}
            </Location>
          </motion.div>
        </Left>

        <Right>
          <motion.div initial={{ opacity: 0, x: 30, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
            <TerminalWrap>
              <TerminalGlow />
              <Terminal>
                <TermHead>
                  <TDot style={{ background: "#ff5f57" }} /><TDot style={{ background: "#ffbd2e" }} /><TDot style={{ background: "#28c840" }} />
                  <TermTitle>{hero.terminal?.title}</TermTitle>
                </TermHead>
                <TermBody>
                  {shown.map((l, i) => <TermLine key={i} $type={l.type}>{l.type === "cmd" && <Prompt>$</Prompt>}{l.text}</TermLine>)}
                  {typing !== "" && <TermLine $type="cmd"><Prompt>$</Prompt>{typing}<Cursor /></TermLine>}
                  {typing === "" && <TermLine $type="cmd"><Prompt>$</Prompt><Cursor /></TermLine>}
                </TermBody>
              </Terminal>

              <FloatChip style={{ top: -18, right: -14, animationDelay: "-1s" }} $accent="#c8102e">
                <ChipMark $crimson>NMSU</ChipMark>
                <div><b>Discovery HPC</b><span>Las Cruces, NM</span></div>
              </FloatChip>
              <FloatChip style={{ bottom: -18, left: -14 }} $accent="#00e0ff">
                <ChipImg src={itdLogo} alt="ITD" />
                <div><b>ITD · TecNM</b><span>Huapáctic · LNS-BUAP</span></div>
              </FloatChip>
            </TerminalWrap>
          </motion.div>
        </Right>
      </Inner>

      <Stats>
        {(hero.stats || []).map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}>
            <Stat>
              <StatValue className="gradient-text">{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </Stat>
          </motion.div>
        ))}
      </Stats>

      <Marquee aria-hidden="true">
        <MarqueeTrack>
          {[...(marquee || []), ...(marquee || [])].map((t, i) => <MarqueeItem key={i}>{t}<i /></MarqueeItem>)}
        </MarqueeTrack>
      </Marquee>

      <style>{`
        .tw-role { background: var(--gradient); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; }
        .Typewriter { display: inline; }
        .Typewriter__cursor { color: var(--cyan); font-weight: 300; }
      `}</style>
    </Hero>
  );
}

/* ───────────── animations ───────────── */
const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}`;
const pulse = keyframes`0%,100%{box-shadow:0 0 0 0 rgba(0,224,255,0.5)}70%{box-shadow:0 0 0 8px rgba(0,224,255,0)}`;
const blink = keyframes`0%,49%{opacity:1}50%,100%{opacity:0}`;
const slide = keyframes`from{transform:translateX(0)}to{transform:translateX(-50%)}`;
const drift = keyframes`0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-20px) scale(1.08)}`;

/* ───────────── layout ───────────── */
const Hero = styled.section`
  position: relative; min-height: 100vh; width: 100%; overflow: hidden;
  background: var(--bg);
  display: flex; flex-direction: column; justify-content: center;
  padding: 7.5rem 0 0;
`;

const Spotlight = styled.div`
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(0,224,255,0.07), transparent 60%);
`;

const Grid = styled.div`
  position: absolute; inset: 0; pointer-events: none;
  background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%);
`;

const Orb = styled.div`
  position: absolute; width: 520px; height: 520px; border-radius: 50%; filter: blur(70px); pointer-events: none; will-change: transform;
  @media (max-width: 40em) { width: 320px; height: 320px; filter: blur(50px); }
  animation: ${drift} 14s ease-in-out infinite;
`;

const Inner = styled.div`
  position: relative; z-index: 1;
  width: min(90%, var(--container)); margin: 0 auto;
  display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; gap: 4rem;
  @media (max-width: 64em) { grid-template-columns: 1fr; gap: 3.5rem; }
`;

const Left = styled.div`display: flex; flex-direction: column; gap: 1.35rem;`;

const Badge = styled.div`
  display: inline-flex; align-items: center; gap: 10px;
  padding: 7px 14px 7px 9px; border-radius: 100px;
  background: rgba(200,16,46,0.1); border: 1px solid rgba(200,16,46,0.35);
  font-size: 0.78rem; font-weight: 600; color: #ff8fa0; letter-spacing: 0.01em;
`;
const Pulse = styled.span`
  width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); animation: ${pulse} 2s infinite; flex-shrink: 0;
`;

const Greeting = styled.span`
  display: block; font-family: var(--font-mono); font-size: 0.95rem; color: var(--text-2); margin-bottom: 0.4rem;
`;

const Name = styled.h1`
  font-size: clamp(2.8rem, 6.4vw, 5rem); line-height: 0.98; letter-spacing: -0.04em; color: var(--text);
`;

const RoleLine = styled.h2`
  font-size: clamp(1.45rem, 3vw, 2.2rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: var(--text);
  min-height: 2.6em;
`;

const Tagline = styled.p`
  font-family: var(--font-body); font-size: clamp(0.98rem, 1.4vw, 1.08rem); line-height: 1.75; color: var(--text-2); max-width: 560px;
`;

const Ctas = styled.div`display: flex; flex-wrap: wrap; align-items: center; gap: 12px;`;

const Primary = styled.a`
  display: inline-flex; align-items: center; gap: 9px; padding: 0.85rem 1.6rem; border-radius: 12px;
  background: var(--gradient); color: #06060b; font-weight: 700; font-size: 0.92rem;
  box-shadow: 0 10px 30px rgba(0,224,255,0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(0,224,255,0.35); }
`;

const Secondary = styled.a`
  display: inline-flex; align-items: center; gap: 9px; padding: 0.85rem 1.4rem; border-radius: 12px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); color: var(--text); font-weight: 600; font-size: 0.92rem;
  transition: all 0.2s ease;
  &:hover { border-color: rgba(0,224,255,0.5); color: var(--cyan); transform: translateY(-2px); }
`;

const Socials = styled.div`display: flex; gap: 8px; margin-left: 4px;`;
const Social = styled.a`
  width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: var(--text-2);
  transition: all 0.2s ease;
  &:hover { color: var(--cyan); border-color: rgba(0,224,255,0.45); transform: translateY(-2px); }
`;

const Location = styled.div`
  display: inline-flex; align-items: center; gap: 7px; margin-top: 1rem;
  font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-3);
`;

const Right = styled.div`display: flex; justify-content: center; @media (max-width: 64em) { padding: 1.5rem 0 1rem; }`;

const TerminalWrap = styled.div`position: relative; width: 100%; max-width: 520px; animation: ${float} 7s ease-in-out infinite;`;

const TerminalGlow = styled.div`
  position: absolute; inset: -2px; border-radius: 20px; z-index: 0;
  background: linear-gradient(135deg, rgba(0,224,255,0.7), rgba(139,92,246,0.7), rgba(200,16,46,0.5));
  filter: blur(14px); opacity: 0.45;
`;

const Terminal = styled.div`
  position: relative; z-index: 1; border-radius: 18px; overflow: hidden;
  background: rgba(10,10,17,0.94); border: 1px solid rgba(255,255,255,0.09);
  box-shadow: 0 40px 100px rgba(0,0,0,0.6);
  font-family: var(--font-mono);
`;
const TermHead = styled.div`
  display: flex; align-items: center; gap: 7px; padding: 12px 16px;
  background: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.06);
`;
const TDot = styled.span`width: 11px; height: 11px; border-radius: 50%;`;
const TermTitle = styled.span`margin-left: 8px; font-size: 0.72rem; color: var(--text-3);`;
const TermBody = styled.div`padding: 1.15rem 1.25rem 1.25rem; min-height: 268px; display: flex; flex-direction: column; gap: 5px;`;

const TermLine = styled.div`
  font-size: 0.76rem; line-height: 1.55; white-space: pre-wrap; word-break: break-word;
  color: ${({ $type: type }) => (type === "cmd" ? "#e6edf3" : type === "ok" ? "#7ee787" : "rgba(226,232,240,0.55)")};
`;
const Prompt = styled.span`color: var(--cyan); margin-right: 8px; font-weight: 700;`;
const Cursor = styled.span`
  display: inline-block; width: 8px; height: 1.05em; vertical-align: text-bottom; margin-left: 2px;
  background: var(--cyan); animation: ${blink} 1s step-end infinite;
`;

const FloatChip = styled.div`
  position: absolute; z-index: 2;
  display: flex; align-items: center; gap: 10px; padding: 9px 14px 9px 9px; border-radius: 14px;
  background: rgba(12,12,20,0.95); border: 1px solid ${({ $accent: accent }) => `${accent}55`};
  box-shadow: 0 14px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset;
  animation: ${float} 6s ease-in-out infinite;
  div { display: flex; flex-direction: column; line-height: 1.2; }
  b { font-size: 0.78rem; color: var(--text); font-weight: 700; }
  span { font-family: var(--font-mono); font-size: 0.64rem; color: var(--text-3); }
  @media (max-width: 40em) { display: none; }
`;
const ChipMark = styled.span`
  width: 40px; height: 40px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center;
  background: ${({ $crimson: crimson }) => (crimson ? "#c8102e" : "var(--gradient)")};
  color: #fff; font-family: var(--font-display); font-weight: 800; font-size: 0.6rem; letter-spacing: -0.02em;
`;
const ChipImg = styled.img`width: 40px; height: 40px; border-radius: 10px; object-fit: cover; background: #fff; padding: 3px;`;

const Stats = styled.div`
  position: relative; z-index: 1;
  width: min(90%, var(--container)); margin: 4.5rem auto 0;
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; overflow: hidden;
  @media (max-width: 64em) { grid-template-columns: repeat(2, 1fr); }
`;
const Stat = styled.div`
  background: rgba(9,9,15,0.9); padding: 1.35rem 1.5rem; height: 100%;
  display: flex; flex-direction: column; gap: 6px;
`;
const StatValue = styled.span`font-size: 2.1rem; font-weight: 800; line-height: 1; letter-spacing: -0.03em;`;
const StatLabel = styled.span`font-family: var(--font-body); font-size: 0.78rem; line-height: 1.4; color: var(--text-3);`;

const Marquee = styled.div`
  position: relative; z-index: 1; width: 100%; margin-top: 3.5rem; padding: 1.1rem 0;
  border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.015); overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
`;
const MarqueeTrack = styled.div`display: flex; width: max-content; animation: ${slide} 40s linear infinite; &:hover { animation-play-state: paused; }`;
const MarqueeItem = styled.span`
  display: inline-flex; align-items: center; gap: 1.5rem; padding: 0 0.75rem;
  font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-3);
  i { width: 4px; height: 4px; border-radius: 50%; background: var(--cyan); opacity: 0.6; }
`;
