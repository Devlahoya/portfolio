import styled, { keyframes } from "styled-components";
import TypeWriterText from "../TypeWriterText";
import CoverVideo from "../CoverVideo";
import { lazy, Suspense } from "react";
import { Loading } from "../../components/Loading";
import cveng from "../../assets/cveng.pdf";
import VIDEODEV from "../../assets/home.mp4";

import background from "../../assets/background2.png";
//const TypeWriterText = lazy(() => import("../TypeWriterText"));
//const CoverVideo= lazy(()=>import("../CoverVideo"))
//<Round>import CoverVideo from './../CoverVideo';

//<img src={imgreact} width={500} height={400} alt="React" />
//</Round>
export function Home() {
  return (
    <Section id="home" style={{ backgroundImage: `url(${background})` }}>
      <Container>
      <Box>
        <Suspense fallback={<Loading />}>
        <CoverVideo video={VIDEODEV}/>
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText intro="I'm Hector Martinez" uno="Engineer" dos="Developer" tres="Manager" cuatro="Tester" descargar="Download my CV!" download ="Download" archivo={cveng} />
          </Suspense>
        </Box>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  //width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
  width: 100%;
height: 100vh;
background-repeat: no-repeat;
background-position: center;
background-size: cover;

`;
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
  100%{
    transform:rotate(1turn);
  }
`;
const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 7rem;
  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1.5rem;
  }
`;
