import styled from "styled-components";
import { Accordion } from "../Accordion";
export function Preguntas() {
  
  return (
    <Section id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordion title="Do i have any other work experience?">
          <P>Sure, I was administrative manager of a construction company for several years, there was even a project where I had to manage more than 200 workers. </P>
          </Accordion>
          <Accordion title="Why did i decided to change careers?">
          <P>I am a biochemical engineer by profession, I feel great passion for the food industry, however also throughout my life I have been surrounded by everything related to technology so it has also been my great passion, and I am sure that I can unite my two great passions somehow, dabbling in the tech industry is a challenge that I am sure I can face to achieve my goals.</P>
          </Accordion>
          <Accordion title="Am I only interested in the web development industry?">
          <P>No, I am interested in any branch of programming and/or hardware related, I am always willing to learn something new. </P> 
          </Accordion>
        </Box>
        <Box>
          <Accordion title="What are my hobbies?">
          <P>Among my main hobbies is the elaboration of mezcal liqueurs and artisanal preserves for my own brand and online store called "Anima", you can check it out <a className="text-blue-600" href="http://www.google.com" target="_blank"> here </a>. </P>
          <br/>
          <P>I also like everything related to PC Gaming and the assembly of computer equipment. </P>
          </Accordion>
          <Accordion title="Am I open to travel or change my place of residence?">
          <P>You betcha! I'm ready to venture to new galaxies, boldly going where no one has gone before. Whether it's the scenic landscapes of Middle-earth or a galaxy far, far away, count me in for an epic journey. </P>
          </Accordion>
          <Accordion title="Is this question a placeholder?">
          <P>Yes, it is </P>
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