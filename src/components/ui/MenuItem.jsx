import { Link, useLocation } from "react-router-dom";

function MenuItem({ label, linkTo, toggleMenu }) {
     const { pathname } = useLocation();
     const isActive = pathname === linkTo;

     return (
          <li
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               className={`w-full progression-bar ${
                    isActive ? "active:translate-y-0.5 menu-item-active" : ""
               }`}
          >
               <Link
                    onClick={toggleMenu}
                    to={linkTo}
                    className="inline-block transition-transform ease-in-out hover:translate-x-2"
               >
                    {label}
               </Link>
          </li>
     );
}

export default MenuItem;
