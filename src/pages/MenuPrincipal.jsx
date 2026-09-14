import { ThemeProvider } from "styled-components";
import { Light } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { LanguageProvider } from "../context/LanguageContext";
import { Navegation } from "../components/Navegation";
import { Home } from "../components/sections/Home";
import { Research } from "../components/sections/Research";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import ProjectsSection from "../components/projects/ProjectsSection";
import CoursesSection from "../components/courses/CoursesSection";
import { Showcase } from "../components/sections/Showcase";
import { Preguntas } from "../components/sections/Preguntas";
import { Banner } from "../components/Banner";
import EmailSection from "../components/sections/EmailSection";
import { Footer } from "../components/sections/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function MenuPrincipal() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={Light}>
        <GlobalStyles />
        <Navegation />
        <main>
          <Home />
          <Research />
          <About />
          <Experience />
          <Education />
          <ProjectsSection />
          <CoursesSection />
          <Showcase />
          <Preguntas />
          <Banner />
          <EmailSection />
          <Footer />
          <ScrollToTop />
        </main>
      </ThemeProvider>
    </LanguageProvider>
  );
}
