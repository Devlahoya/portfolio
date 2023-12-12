import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "../Button";
import { Dark } from "../../styles/Themes";
import { lazy, Suspense } from "react";
import { Loading } from "../Loading";
import Carousel from './../Carousel2';
//const  Carousel  = lazy(() => import("../Carousel"));


export function MoreAbout() {

  return (
    <>    
    <Title>
      Want to know more?
    </Title>
    <Section id="about">
      <Container>
        <Box>
          <Suspense fallback={<Loading/>}>
            <Carousel />
          </Suspense>
        </Box>
        <Box>
          <SubText>
          When I'm not bringing websites to life, I dive into other passions that make my life as vibrant as my coding.
          </SubText>
          <SubTextLight>
          In my spare time, I run my own mezcal liquor and preserves bussiness (you can check it out <a className="text-blue-600" href="http://www.google.com" target="_blank"> here. </a>). There's nothing like the perfect blend of flavors, and I apply that same passion and attention to detail to my work as a developer. Creativity flows into every aspect of my life, whether it's experimenting with new recipes or solving code problems.
          <br/>
          <br/>
          When I unplug from the keyboard, you'll find me immersed in the world of streaming and gaming. The thrill of real-time sharing and immersion in virtual worlds is my escape. It's like finding solutions to problems, but with a controller in hand.
          <br/>
          <br/>
          Also, I love to cook. From planning a new feature in my code to planning the next dinner, it's all about creating something amazing.
          <rr/>
          <br/>
          This portfolio is not just a sample of my work; it's an invitation to explore my digital universe and discover how my passion for technology intertwines with my love for creativity and good food.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={Dark}>
              <Button text="Unete a mi discord!" link="#"/> 
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
    </>
  );
}
const Section = styled.section`
  width: 100%;
  padding-bottom: 2%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;
const Title = styled.h2`
background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: center;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 75%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 75%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const SubUlLight = styled.ul`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 75%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    a {
      margin: 0 auto;
    }
  }
`;
