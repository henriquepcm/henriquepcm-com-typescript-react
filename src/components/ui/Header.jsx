import ButtonBurger from "./ButtonBurger";
import Logo from "./Logo";

function Header({ toggleMenu, closeMenu }) {
     return (
          <header className="bg-white fixed top-0 left-0 right-0 z-40">
               <div className="flex mx-auto p-5">
                    <ButtonBurger toggleMenu={toggleMenu} />
                    <Logo closeMenu={closeMenu} />
               </div>
          </header>
     );
}

export default Header;
