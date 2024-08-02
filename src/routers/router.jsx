import {BrowserRouter,Routes,Route} from "react-router-dom"
import {MenuPrincipal} from "../pages/MenuPrincipal"
import {MenuSecundario} from "../pages/Ibq"
import {Error404} from "../pages/Error404"
export function MyRoutes() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<MenuPrincipal/>}/>
    <Route path="/ibq" element={<MenuSecundario/>}/>
    <Route path="*" element={<Error404/>}/>
  </Routes>
  </BrowserRouter>);
}