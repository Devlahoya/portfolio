import styled from "styled-components";

export default function CoverVideo(props) {
  return (<VideoContainer>
    <video src={props.video} type="video/mp4" autoPlay muted loop/>
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
