import styled from "styled-components";
import GIF from "../assets/placeholder.gif";

export default function CoverVideo() {
  return (<VideoContainer>
    <img src={GIF} type="video/mp4" autoPlay muted loop/>
  </VideoContainer>);
}
const VideoContainer = styled.div`
  width: 100%;
  img {
    width: 80%;
    height: auto;
    @media (max-width: 64em) {
      align-items: center;
      min-width: 30vh;
    }
  }
`;
