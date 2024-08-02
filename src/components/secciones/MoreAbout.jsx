import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "../Button";
import { Dark } from "../../styles/Themes";
import { lazy, Suspense } from "react";
import { Loading } from "../Loading";
import Carousel from './Carrusel2';
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoLinkedin, logoTwitter, logoFacebook } from 'ionicons/icons';
//const  Carousel  = lazy(() => import("../Carousel"));




export function MoreAbout() {

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <>    
    <Title>
      ¿Quieres conocerme más?
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
          Cuando tengo tiempo libre me gusta dedicarme a mis pasatiempos o ingresos pasivos.
          </SubText>
          <SubTextLight>Entre mis pasatiempos, disfruto especialmente de la elaboración de licores y conservas artesanales bajo la marca de mi familia, "Ánima". Este proceso me permite explorar la alquimia de los sabores y la tradición de las recetas caseras, aportando un toque personal a cada producto. Además, soy un apasionado del mundo del gaming y del ensamblaje de computadoras. Esta afición me ha permitido profundizar en el hardware y el software, optimizando equipos para obtener el máximo rendimiento en juegos y aplicaciones.

Otra de mis grandes pasiones es la impresión 3D, un campo en el que he acumulado una vasta experiencia y conocimientos. Trabajo bajo la marca "CyberTech", donde diseño y creo objetos tridimensionales, desde prototipos funcionales hasta piezas decorativas. Esta actividad combina creatividad y tecnología, y me permite estar a la vanguardia de las innovaciones en fabricación digital. A través de estos pasatiempos, no solo satisfago mis intereses personales, sino que también contribuyo al legado familiar y a la evolución tecnológica.
          </SubTextLight>
          <br/>
          <SubText>
          Puedes ver algunos de mis proyectos de impresión 3D en mi instagram <a href="https://www.instagram.com/delahoyagg/" target="_blank">
            <u> Aqui</u> <IonIcon icon={logoInstagram} color="light"></IonIcon>
            </a>
          </SubText>
          <ButtonContainer  onClick={() => scrollTo("contact")}>
            <ThemeProvider theme={Dark}>
              <Button text="!Enviame un mensaje!"/> 
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
