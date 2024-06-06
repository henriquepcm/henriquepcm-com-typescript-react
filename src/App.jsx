import { useMenu } from "./hooks/useMenu";
import { Route, Routes } from "react-router-dom";
import { Header, Footer, Menu } from "./components/ui";
import {
     Home,
     About,
     Education,
     ProfessionalExperiences,
     Projects,
     Skills,
     PageNotFound,
     Certifications,
} from "./components/pages";

function App() {
     const { menuIsOpen, toggleMenu, closeMenu, menuRef } = useMenu();

     return (
          <>
               <Menu
                    menuIsOpen={menuIsOpen}
                    toggleMenu={toggleMenu}
                    menuRef={menuRef}
               />
               <Header toggleMenu={toggleMenu} closeMenu={closeMenu} />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="certifications" element={<Certifications />} />
                    <Route path="education" element={<Education />} />
                    <Route
                         path="professional-experiences"
                         element={<ProfessionalExperiences />}
                    />
                    <Route path="projects" element={<Projects />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="*" element={<PageNotFound />} />
               </Routes>
               <Footer />
          </>
     );
}

export default App;
