import {useWindowSizes} from "react-use-window-sizes"
import styled  from "styled-components";
import Confetti from 'react-confetti'
export function ConfettiComponent() {
  const { width, height } = useWindowSizes()
  return (
    <Container>
    <Confetti
      numberOfPieces={130}
      gravity={0.02}
      width={width}
      height={700}
    />
    </Container>
  )
};

const Container = styled.div`
  
  @media (max-width: 48em) {
    display: none;
  }
  @media (max-width: 30em) {
    display: none;
    
  }

`;