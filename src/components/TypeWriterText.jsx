import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Button } from "./Button";
import cv from "../assets/cv.pdf"
export default function TypeWriterText() {
  return (
    <>
      <Title>
        I'm Hector Martinez...
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(200)
              .typeString(`<span class="text-1">Developer</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-2">Engineer</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-3">Manager</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-4">Entrepreneur</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-5">Tester 🤖</span>`)
              .pauseFor(1500)
              .deleteAll()
              .start();              
          }}
        ></Typewriter>
      </Title>
      <SubTitle>Download my CV ⬇️😎💙.</SubTitle>
      <ButtonContainer>
        <Button text="Download" link={cv} > </Button>
      </ButtonContainer>
    </>
  );
}
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  span{
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: #800040;
  }
  .text-2 {
    color: blue;
  }
  .text-3 {
    color: red;
  }
  .text-4 {
    color: green;
  }
  .text-5 {
    color: orange;
  }
  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    button {
      margin: 0 auto;
    }
  }
`;
