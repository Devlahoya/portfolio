import styled from "styled-components";
import { Logo } from "../Logo";
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoLinkedin, logoTwitter, logoFacebook } from 'ionicons/icons';

export function Footer() {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <Section>

      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="#" target="_blank">
            <IonIcon icon={logoFacebook} color="light"></IonIcon>
            </a>
            <a href="#" target="_blank">
            <IonIcon icon={logoInstagram} color="light"></IonIcon>
            </a>
            <a href="#" target="_blank">
            <IonIcon icon={logoTwitter} color="light"></IonIcon>
            </a>
            <a href="#" target="_blank">
            <IonIcon icon={logoLinkedin} color="light"></IonIcon>
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("roadmap")}>RoadMap</Item>
          <Item onClick={() => scrollTo("projects")}>Projects</Item>
          <Item onClick={() => scrollTo("trusted")}>Trusted by</Item>
          <Item onClick={() => scrollTo("faq")}>FAQ</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>&copy; {new Date().getFullYear()}</span>
        <span>
          Made with ❤️ by{" "}
          <a href="" tarjet="_blank">
            Devlahoya
          </a>
        </span>
      </Bottom>
    </Section>
  );
}
const Section = styled.section`
  min-height: 50vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontlg};

  border-bottom: 1px solid ${(props) => props.theme.body};

  @media (max-width: 48em) {
    width: 90%;

    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;
const Left = styled.div`

  @media (max-width: 48em) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    width: 100%;
  }
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.body};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontlg};

  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};

    span {
      margin-bottom: 1rem;
    }
  }
`;
