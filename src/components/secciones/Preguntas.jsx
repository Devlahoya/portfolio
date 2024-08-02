import styled from "styled-components";
import { Accordion } from "../Accordion";
export function Preguntas() {
  
  return (
    <Section id="faq">
      <Title>Preguntas y Respuestas</Title>
      <Container>
        <Box>
          <Accordion title="¿Cuál es mi experiencia?">
          <P>Fui gerente de proyectos en Magdalena construcciones, por lo cual tengo amplia experiencia administrativa en una obra de más de 200 trabajadores, desarrollo de productos y curso HACCP, gestión de proyectos y experiencia en programación en QACS </P>
          </Accordion>
          <Accordion title="¿Porque tengo experiencia en ramas tan distintas?">
          <P>Soy ingeniero Bioquímico de profesión y de igual manera soy técnico en programación, desde pequeño he tenido pasión por la tecnología y de igual manera mi carrera me ayudo al desarrollo de productos y gestión de calidad alimentaria, así mismo al trabajar desde joven en Magdalena Construcciones adquirí amplia experiencia administrativa para el manejo de personal y diversas situaciones de alta importancia.</P>
          </Accordion>
          <Accordion title="¿Solamente me interesa el mundo de la industria alimentaria?">
          <P>No, me encuentro interesado en cualquier posición en la cual yo pueda aportar algo de mí, cuento con experiencia variada, incluso en creación de contenido, diseño y edición. </P> 
          </Accordion>
        </Box>
        <Box>
          <Accordion title="¿Cuales son mis hobbies?">
          <P>Entre mis pasiones se encuentran cosas muy variadas, soy un apasionado de la elaboración de licores y conservas, me gusta el mundo de la impresión 3D. </P>
          <br/>
          <P>También me gusta todo lo relacionado con el mundo del gaming y la creación de contenidos. </P>
          </Accordion>
          <Accordion title="¿Estoy dispuesto a cambiar mi lugar de residencia?">
          <P>Claro que sí, puedo cambiar mi lugar de residencia incluso a las profundidades de la galaxia :) . </P>
          </Accordion>
          <Accordion title="¿Esta es una pregunta de relleno?">
          <P>Si :(, es que debe ser un número par. </P>
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
}
const Section = styled.section`

  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const P = styled.p `
  color: ${(props) => props.theme.body};
`;