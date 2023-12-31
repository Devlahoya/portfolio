import styled from "styled-components";
import js from "../assets/about/js.png"
import python from "../assets/about/phyton.png"
import postgresql from "../assets/about/postgresql.png"
import brain from "../assets/about/brain.png"
import react from "../assets/about/react.png"
import wordpress from "../assets/about/wordpress.png"
export function Banner() {
  return (
    <Section>
      <ImgContainer>
        <img width={500} height={400} src={js} alt="-" />
        <img width={500} height={400} src={python} alt="-" />
        <img width={500} height={400} src={postgresql} alt="-" />
        <img width={500} height={400} src={brain} alt="-" />
        <img width={500} height={400} src={react} alt="-" />
        <img width={500} height={400} src={wordpress} alt="-" />
      </ImgContainer>
      <Title>
        Check Out My Github
      </Title>
      <BtnContainer>
        <a
          href="https://github.com/Devlahoya/"
          target="_blank"
        >
          <JoiNow>GitHub</JoiNow>
        </a>
      </BtnContainer>
    </Section>
  );
}
const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }

  @media (max-width: 30em) {
    img {
      width: 15%;
      height: auto;
    }
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 40%;
  align-content: center;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;

    width: 100%;
  }
`;
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;
const JoiNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }
  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }
  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
