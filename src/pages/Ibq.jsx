import { Navegacion } from "../components/Navegacion";
import { Light, Dark } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Home } from "../components/secciones/Home";
import { About } from "../components/secciones/About";
import { Roadmap } from "../components/secciones/Roadmap";
import { Showcase } from "../components/secciones/Showcase";
import { Preguntas } from "../components/secciones/Preguntas";
import { Footer } from "../components/secciones/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import EmailSection from "../components/secciones/EmailSection";

export function MenuSecundario() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navegacion />
        <Home/>
        <About/>
        <Roadmap/>
        <Showcase/>
        <Preguntas/>
        <EmailSection/>
        <Footer/>
        <ScrollToTop/>

      </ThemeProvider>
    </main>
  );
}
