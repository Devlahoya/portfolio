import styled, { keyframes } from "styled-components";
import TypeWriterText from "../TypeWriterText";
import { useLanguage } from "../../context/LanguageContext";
import homeVideo from "../../assets/home.mp4";

export function Home() {
  const { tr } = useLanguage();
  const home = tr('home');

  return (
    <Section id="home">
      <Noise />
      <GridOverlay />
      <GlowOrb style={{ top: "10%", left: "5%", background: "rgba(0,212,255,0.12)", width: "500px", height: "500px" }} />
      <GlowOrb style={{ bottom: "10%", right: "5%", background: "rgba(124,58,237,0.1)", width: "600px", height: "600px" }} />

      <Container>
        <HeroContent>
          <Badge>
            <Dot />
            {home.available}
          </Badge>
          <TypeWriterText />
          <SocialRow>
            <SocialLink href="https://github.com/Devlahoya/" target="_blank" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/devlahoya/" target="_blank" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialLink>
          </SocialRow>
        </HeroContent>

        <HeroVisual>
          <VideoWrapper>
            <VideoGlowRing />
            <VideoFrame>
              <video autoPlay loop muted playsInline>
                <source src={homeVideo} type="video/mp4" />
              </video>
            </VideoFrame>
          </VideoWrapper>
          <CodeCardSmall>
            <CardHeader>
              <Dot style={{ background: "#ff5f57" }} />
              <Dot style={{ background: "#ffbd2e" }} />
              <Dot style={{ background: "#28c840" }} />
              <CardTitle>hector.py</CardTitle>
            </CardHeader>
            <CardBody>
              <CodeLine><Key>role</Key> <Operator>=</Operator> <Str>"{home.codeRole}"</Str></CodeLine>
              <CodeLine><Key>stack</Key> <Operator>=</Operator> <Bracket>[</Bracket><Str>"PyTorch"</Str><Comma>,</Comma> <Str>"React"</Str><Comma>,</Comma> <Str>"ML"</Str><Bracket>]</Bracket></CodeLine>
              <CodeLine><Key>english</Key> <Operator>=</Operator> <Str>"{home.codeEnglish}"</Str></CodeLine>
              <CodeLine><Key>open_to_work</Key> <Operator>=</Operator> <Bool>True</Bool></CodeLine>
            </CardBody>
          </CodeCardSmall>
        </HeroVisual>
      </Container>

      <ScrollIndicator>
        <ScrollLine />
        <ScrollText>scroll</ScrollText>
      </ScrollIndicator>
    </Section>
  );
}

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-16px); }
`;
const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
`;
const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(8px); opacity: 0.3; }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #13131f;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: ${(props) => props.theme.navHeight};
`;

const Noise = styled.div`
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.4; pointer-events: none;
`;
const GridOverlay = styled.div`
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px; pointer-events: none;
`;
const GlowOrb = styled.div`
  position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
  animation: ${float} 8s ease-in-out infinite;
`;

const Container = styled.div`
  width: 88%; max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; gap: 4rem; z-index: 1;
  @media (max-width: 64em) { flex-direction: column; align-items: flex-start; gap: 3rem; }
`;

const HeroContent = styled.div`
  flex: 1; display: flex; flex-direction: column; gap: 1.5rem;
`;

const Badge = styled.div`
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px 6px 8px;
  background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2);
  border-radius: 100px; font-size: 0.8rem; font-weight: 500; color: #00d4ff; width: fit-content;
`;

const Dot = styled.span`
  width: 8px; height: 8px; background: #00d4ff; border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite; flex-shrink: 0;
`;

const SocialRow = styled.div`display: flex; gap: 12px;`;

const SocialLink = styled.a`
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px; color: rgba(226,232,240,0.6); transition: all 0.2s ease;
  &:hover { color: #00d4ff; border-color: rgba(0,212,255,0.4); background: rgba(0,212,255,0.08); transform: translateY(-2px); }
`;

const HeroVisual = styled.div`
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem;
  @media (max-width: 64em) { width: 100%; }
`;

/* ── Video ── */
const VideoWrapper = styled.div`
  position: relative; display: flex; align-items: center; justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
`;

const VideoGlowRing = styled.div`
  position: absolute; inset: -3px; border-radius: 20px;
  background: linear-gradient(135deg, #00d4ff, #7c3aed, #00d4ff);
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
  z-index: 0;
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const VideoFrame = styled.div`
  position: relative; z-index: 1; width: 100%; max-width: 420px;
  border-radius: 18px; overflow: hidden;
  background: #0d0d14;
  box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.1);
  video {
    width: 100%; height: auto; display: block; border-radius: 17px;
  }
`;

const CodeCardSmall = styled.div`
  background: rgba(22,22,34,0.9); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px; overflow: hidden; width: 100%; max-width: 420px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.4);
  font-family: 'JetBrains Mono', monospace;
`;

const CardHeader = styled.div`
  display: flex; align-items: center; gap: 6px; padding: 12px 16px;
  background: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.06);
`;

const CardTitle = styled.span`
  font-size: 0.72rem; color: rgba(226,232,240,0.35); margin-left: 6px;
  font-family: 'JetBrains Mono', monospace;
`;

const CardBody = styled.div`padding: 1.25rem 1.5rem; display: flex; flex-direction: column; gap: 2px;`;

const CodeLine = styled.div`
  display: flex; align-items: center; flex-wrap: wrap; gap: 4px;
  padding: 1px 0; font-size: 0.78rem; line-height: 1.7;
  padding-left: ${({ indent }) => indent === 2 ? "3rem" : indent ? "1.5rem" : "0"};
`;

const Keyword = styled.span`color: #c792ea;`;
const Variable = styled.span`color: #82aaff;`;
const Operator = styled.span`color: #89ddff;`;
const Bracket = styled.span`color: #89ddff;`;
const Key = styled.span`color: #f07178;`;
const Str = styled.span`color: #c3e88d;`;
const Comma = styled.span`color: rgba(226,232,240,0.3);`;
const Bool = styled.span`color: #f78c6c;`;

const ScrollIndicator = styled.div`
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 1;
`;
const ScrollLine = styled.div`
  width: 1px; height: 40px;
  background: linear-gradient(180deg, rgba(0,212,255,0.6), transparent);
  animation: ${scrollBounce} 2s ease-in-out infinite;
`;
const ScrollText = styled.span`
  font-size: 0.62rem; letter-spacing: 0.15em; color: rgba(226,232,240,0.25); text-transform: uppercase;
`;
