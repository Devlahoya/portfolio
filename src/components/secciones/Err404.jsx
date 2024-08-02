import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import err404 from "../../assets/err404.jpeg"
export function Err404() {
  return (
    <Section>
      <Title> !Error 404! </Title>

      <Container>
      <Img> <img src={err404}/></Img> 
      </Container>
      <Container>
        <Box>      <SubText>
        Parece que has llegado a una página que aún no existe... esto no debería estar pasando, 
        ya tenemos a un equipo de monos entrenados 🐵 trabajando para solucionar el problema :) <br/> ...
Es broma, no están entrenados 😭
            <SubTextLight>
          En caso de querer regresar al sitio principal haz click <Link to="/ibq"><u>Aqui </u></Link>
          </SubTextLight>
          </SubText>
          
          </Box>
          
          <Box>      <SubText>
          It seems that you have reached a page that does not exist yet... this should not be happening, we already have a team of trained monkeys 🐵 working to solve the problem :) <br/> ...
Just kidding, they are not trained 😭
          <SubTextLight>
          If you want to return to the main site, click <Link to="/"> <u>Here </u> </Link>
          </SubTextLight>
          
          </SubText>
         
          </Box>


      </Container>
          
    </Section>
  );
}

const Section = styled.section`
min-height: 100vh;
min-width: 100vw;
padding-bottom: 5%;
background-color: ${(props) => props.theme.text};
`;
const Container = styled.div`
margin: 0 auto;
margin-top: 30px;
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
min-height: 20vh;
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

const Img = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  padding-left: 250px;
  img {
    width: 70%;
    height: 70%;
    display: flex;
    align-content: center;
    @media (max-width: 64em) {
      align-content: center;
      min-width: 30vh;
    }
  }
`;
