import { Light, Dark } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Err404 } from "../components/secciones/Err404";

export function Error404() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Err404/>
      </ThemeProvider>
    </main>
  );
}
