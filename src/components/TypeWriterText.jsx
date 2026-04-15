import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../context/LanguageContext";
import cveng from "../assets/cveng.pdf";

export default function TypeWriterText() {
  const { t, tr, lang } = useLanguage();
  const home = tr('home');

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Greeting>{home.greeting}</Greeting>
      <RoleWrapper>
        <RolePrefix>{home.rolePrefix}</RolePrefix>
        {/* key forces remount when language changes so typewriter restarts */}
        <Typewriter
          key={lang}
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            const roles = home.roles || [];
            roles.forEach((role, i) => {
              typewriter
                .typeString(`<span class="tw-role">${role}</span>`)
                .pauseFor(1300)
                .deleteAll();
            });
            typewriter.start();
          }}
        />
      </RoleWrapper>
      <Description>{home.description}</Description>
      <ButtonRow>
        <DownloadBtn href={cveng} target="_blank" download>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {home.downloadCV}
        </DownloadBtn>
        <ContactBtn onClick={scrollToContact}>
          {home.contactMe}
        </ContactBtn>
      </ButtonRow>

      <style>{`
        .tw-role {
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }
        .Typewriter__cursor { color: #00d4ff; }
      `}</style>
    </>
  );
}

const Greeting = styled.h2`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 500;
  color: rgba(226,232,240,0.55);
  letter-spacing: 0.04em;
`;

const RoleWrapper = styled.div`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: #e2e8f0;
  line-height: 1.15;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  min-height: 4.5rem;
  .Typewriter { display: inline; }
`;

const RolePrefix = styled.span`color: #e2e8f0;`;

const Description = styled.p`
  font-size: clamp(0.88rem, 1.5vw, 1rem);
  color: rgba(226,232,240,0.5);
  line-height: 1.7;
  max-width: 480px;
  font-family: 'Inter', sans-serif;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  letter-spacing: 0.02em;
  transition: all 0.25s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,212,255,0.25); }
`;

const ContactBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  background: transparent;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.12);
  letter-spacing: 0.02em;
  font-family: 'Space Grotesk', sans-serif;
  transition: all 0.25s ease;
  &:hover { border-color: rgba(0,212,255,0.4); color: #00d4ff; background: rgba(0,212,255,0.06); transform: translateY(-2px); }
`;
