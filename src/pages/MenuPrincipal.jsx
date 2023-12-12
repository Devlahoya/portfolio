import { Navegation } from "../components/Navegation";
import { Light, Dark } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { Roadmap } from "../components/sections/Roadmap";
import { Showcase } from "../components/sections/Showcase";
import { Preguntas } from "../components/sections/Preguntas";
import { Footer } from "../components/sections/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import EmailSection from "../components/sections/EmailSection";
import {Banner} from "../components/Banner"
import ProjectsSection from "../components/projects/ProjectsSection";

export function MenuPrincipal() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navegation />
        <Home/>
        <About/>
        <Roadmap/>
        <ProjectsSection/>
        <Showcase/>
        <Preguntas/>
        <Banner/>
        <EmailSection/>
        <Footer/>
        <ScrollToTop/>

      </ThemeProvider>
    </main>
  );
}
