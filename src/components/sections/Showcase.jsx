import styled, { keyframes } from "styled-components";
import conexiones from "../../assets/trusted/conexiones.png"
import cybertech from "../../assets/trusted/cybertech.png";
import durango from "../../assets/trusted/durango.png";
import macc from "../../assets/trusted/macc.png";
import menmar from "../../assets/trusted/menmar.png";
import qacs from "../../assets/trusted/qacs.png";
import sep from "../../assets/trusted/sep.png";
import multiverso from "../../assets/trusted/multiverso.png";
import { useRef } from "react";

const NftItem = ({ img, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  }
  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img width={500} height={400} src={img} />
    </ImgContainer>
  );
};

export function Showcase() {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <>
    <Container id="trusted">
    <Title>Trusted By</Title>
    </Container>
    <Section id ="cards">
      <Row direction="none" ref ={Row1Ref}>
        <NftItem img={conexiones} passRef={Row1Ref} />
        <NftItem img={menmar} passRef={Row1Ref} />
        <NftItem img={macc} passRef={Row1Ref} />
        <NftItem img={qacs} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref ={Row2Ref}>
        <NftItem img={durango} passRef={Row2Ref} />
        <NftItem img={sep} passRef={Row2Ref} />
        <NftItem img={cybertech} passRef={Row2Ref} />
        <NftItem img={multiverso} passRef={Row2Ref} />

      </Row>
    </Section>
    </>
  );
}

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
  display:block;
  padding-top: auto;
  }
`;
const Section = styled.section`
  
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 20s;
    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
`;

const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`;
const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} linear infinite ${(props) => props.direction};
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;