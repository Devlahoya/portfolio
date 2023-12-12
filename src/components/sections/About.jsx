import React, { useTransition, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "../Button";
import { Dark } from "../../styles/Themes";
import { lazy, Suspense } from "react";
import { Loading } from "../Loading";
import TabButton from "./TabButton";
import {MoreAbout} from './MoreAbout';
import Carousel from './../Carousel';
 //const  Carousel  = lazy(() => import("../Carousel"));


const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li>Programming Technician - CBTis #130</li>
        <li>Biochemical Engineer - Instituto Tecnologico de Durango</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-2">
        <li>JavaScript</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>WordPress</li>
        <li>PostgreSQL</li>
        <li>AI & Deep Learning with Python</li>
        <li>Testing</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

export function About() {

  
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonText, setButtonText]= useState("Want to know more about me?")

  const handleButtonClick = () => {
    {buttonClicked ? setButtonClicked(false) & setButtonText("Want to know more about me?") : setButtonClicked(true) & setButtonText("Less about me")}

  };
  return (
    <>
    <Title id="about">
      About me
    </Title>
    <Section >
      <Container>
        <Box>
          <Suspense fallback={<Loading/>}>
            <Carousel />
          </Suspense>
        </Box>
        <Box>
          <SubText>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, Python, React, Next.Js, Node.js, Express, PostgreSQL,
            HTML, CSS, and Git.
          </SubText>
          <SubTextLight>
            I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </SubTextLight>
          <Container >
          <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </Container>
          <SubUlLight>
            {TAB_DATA.find((t) => t.id === tab).content}
          </SubUlLight>
          <ButtonContainer onClick={handleButtonClick}>
            <ThemeProvider theme={Dark}>
                <Button text={buttonText}/>
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
    {buttonClicked ? <MoreAbout /> : null}
    </>
  );
}
const Section = styled.section`
width: 100%;
padding-bottom: 5%;
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
padding-top: 5%;

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