import styled from "styled-components";
import VIDEO from "../assets/home.mp4";

export default function CoverVideo() {
  return (<VideoContainer>
    <video src={VIDEO} type="video/mp4" autoPlay muted loop/>
  </VideoContainer>);
}
const VideoContainer = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: auto;
    @media (max-width: 64em) {
      align-items: center;
      min-width: 30vh;
    }
  }
`;
