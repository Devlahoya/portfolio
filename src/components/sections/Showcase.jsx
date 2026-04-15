import styled, { keyframes } from "styled-components";
import conexiones from "../../assets/trusted/conexiones.png";
import cybertech from "../../assets/trusted/cybertech.png";
import durango from "../../assets/trusted/durango.png";
import macc from "../../assets/trusted/macc.png";
import menmar from "../../assets/trusted/menmar.png";
import qacs from "../../assets/trusted/qacs.png";
import sep from "../../assets/trusted/sep.png";
import multiverso from "../../assets/trusted/multiverso.png";
import { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const ROW1 = [conexiones, menmar, macc, qacs];
const ROW2 = [durango, sep, cybertech, multiverso];

const NftItem = ({ img, passRef, label }) => {
  const play = () => { if (passRef.current) passRef.current.style.animationPlayState = "running"; };
  const pause = () => { if (passRef.current) passRef.current.style.animationPlayState = "paused"; };
  return (
    <ImgContainer onMouseOver={pause} onMouseOut={play}>
      <img src={img} alt={label || "trusted company"} width={200} height={120} />
    </ImgContainer>
  );
};

export function Showcase() {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  const { tr } = useLanguage();
  const trusted = tr('trusted');

  return (
    <Section id="trusted">
      <Header>
        <SectionTag>{trusted.tag}</SectionTag>
        <SectionTitle>{trusted.title}</SectionTitle>
      </Header>
      <Track>
        <Row ref={Row1Ref}>
          {[...ROW1, ...ROW1].map((img, i) => <NftItem key={i} img={img} passRef={Row1Ref} />)}
        </Row>
        <Row ref={Row2Ref} reverse>
          {[...ROW2, ...ROW2].map((img, i) => <NftItem key={i} img={img} passRef={Row2Ref} />)}
        </Row>
      </Track>
    </Section>
  );
}

const scroll = keyframes`from { transform: translateX(0); } to { transform: translateX(-50%); }`;
const scrollReverse = keyframes`from { transform: translateX(-50%); } to { transform: translateX(0); }`;

const Section = styled.section`
  width: 100%; background-color: #10101a; padding: 5rem 0 6rem; overflow: hidden;
  &::before { content: ''; display: block; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.25), transparent); margin-bottom: 4rem; }
`;
const Header = styled.div`width: 88%; max-width: 1200px; margin: 0 auto 3rem; display: flex; flex-direction: column; gap: 0.75rem;`;
const SectionTag = styled.span`font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff;`;
const SectionTitle = styled.h2`font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; color: #e2e8f0; line-height: 1.2;`;
const Track = styled.div`
  display: flex; flex-direction: column; gap: 1.5rem;
  mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
`;
const Row = styled.div`
  display: flex; gap: 2rem; width: max-content;
  animation: ${({ reverse }) => reverse ? scrollReverse : scroll} 30s linear infinite;
  &:hover { animation-play-state: paused; }
`;
const ImgContainer = styled.div`
  width: 200px; height: 110px; border-radius: 14px;
  background: rgba(255,255,255,0.93);
  border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; padding: 1rem 1.25rem; cursor: pointer;
  transition: all 0.25s ease; flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  &:hover {
    background: #fff;
    border-color: rgba(0,212,255,0.4);
    box-shadow: 0 6px 28px rgba(0,212,255,0.15), 0 4px 20px rgba(0,0,0,0.3);
    transform: translateY(-2px);
  }
  img {
    width: 100%; height: 100%; object-fit: contain;
    filter: none; transition: transform 0.25s ease;
  }
  &:hover img { transform: scale(1.05); }
`;
