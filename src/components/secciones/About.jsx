import React, { useTransition, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "../Button";
import { Dark } from "../../styles/Themes";
import { lazy, Suspense } from "react";
import { Loading } from "../Loading";
import TabButton from "./TabButton";
import {MoreAbout} from './MoreAbout';
import Carousel from './Carrusel';
 //const  Carousel  = lazy(() => import("../Carousel"));


const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li>Técnico en programacíon - CBTis #130</li>
        <li>Ingeniería Bioquímica - Instituto Tecnológico de Durango</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-2">
        <li>HACCP</li>
        <li>Elaboración de Licores y Conservas</li>
        <li>Manejo de personal</li>
        <li>Excel</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Java </li>
        <li>AI & Deep Learning</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none pl-2">
        <li>EF SET CERTIFICATE C2 ENGLISH LEVEL <a href="https://www.efset.org/cert/AYaExw" target="_blank" className="text-blue-600"> (Link)</a></li> 
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
  const [buttonText, setButtonText]= useState("¿Quieres conocerme más?")

  const handleButtonClick = () => {
    {buttonClicked ? setButtonClicked(false) & setButtonText("¿Quieres conocerme más?") : setButtonClicked(true) & setButtonText("Ver menos")}

  };
  return (
    <>
    <Title id="about">
      Acerca de mí
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
          Soy egresado de la carrera de Ingeniería Bioquímica en el Instituto Tecnológico de Durango y técnico en programación por parte del CBTis #130.
          <br/>
          <br/>
          Cuento con amplia experiencia, la cual también es muy variada, en áreas de Alimentos, Desarrollo de dietas, Tecnología, Programación, Administración y creación de contenido
          me gustan los desafíos por lo cual soy capaz de poder adaptarme a casi cualquier entorno, tengo disponibilidad de horario y cambio de residencia.
          </SubText>
          <br/>
          <SubText>
          Cuento con conocimiento avanzado en Hardware y Software, Aseguramiento de calidad, Sistema HACCP, Manejo de personal, Paquetería Office, control y uso de IA, lenguajes de programación como JavaScript, Java, Python, etc.          
          </SubText>
          <Container >
          <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
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