import styled, { keyframes } from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { Section, Container, SectionHeader } from "../ui/Section";
import conexiones from "../../assets/trusted/conexiones.png";
import cybertech from "../../assets/trusted/cybertech.png";
import durango from "../../assets/trusted/durango.png";
import macc from "../../assets/trusted/macc.png";
import menmar from "../../assets/trusted/menmar.png";
import qacs from "../../assets/trusted/qacs.png";
import sep from "../../assets/trusted/sep.png";
import multiverso from "../../assets/trusted/multiverso.png";
import itd from "../../assets/about/itd.png";

const ROW1 = [
  { img: itd, alt: "Instituto Tecnológico de Durango" },
  { img: qacs, alt: "QACS" },
  { img: conexiones, alt: "Conexiones" },
  { img: menmar, alt: "Menmar" },
  { img: macc, alt: "MACC" },
];
const ROW2 = [
  { img: durango, alt: "Gobierno de Durango" },
  { img: sep, alt: "SEP" },
  { img: cybertech, alt: "CyberTech" },
  { img: multiverso, alt: "Multiverso Store" },
];

export function Showcase() {
  const { tr } = useLanguage();
  const t = tr("trusted");

  return (
    <Section id="trusted" $alt>
      <Container>
        <SectionHeader tag={t.tag} title={t.title} tight />
      </Container>
      <Track>
        <Row>
          {[...ROW1, ...ROW1].map((it, i) => <Tile key={i}><img src={it.img} alt={it.alt} loading="lazy" /></Tile>)}
        </Row>
        <Row $reverse>
          {[...ROW2, ...ROW2].map((it, i) => <Tile key={i}><img src={it.img} alt={it.alt} loading="lazy" /></Tile>)}
        </Row>
      </Track>
    </Section>
  );
}

const scroll = keyframes`from{transform:translateX(0)}to{transform:translateX(-50%)}`;
const scrollReverse = keyframes`from{transform:translateX(-50%)}to{transform:translateX(0)}`;

const Track = styled.div`
  display: flex; flex-direction: column; gap: 1.25rem; overflow: hidden;
  mask-image: linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%);
`;
const Row = styled.div`
  display: flex; gap: 1.5rem; width: max-content;
  animation: ${({ $reverse: reverse }) => (reverse ? scrollReverse : scroll)} 32s linear infinite;
  &:hover { animation-play-state: paused; }
`;
const Tile = styled.div`
  width: 200px; height: 104px; border-radius: 14px; flex-shrink: 0;
  background: rgba(255,255,255,0.95); border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; padding: 1rem 1.25rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  &:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,224,255,0.18); }
  img { width: 100%; height: 100%; object-fit: contain; }
`;
