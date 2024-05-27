import { Link } from "react-router-dom";

function Logo({ closeMenu }) {
     return (
          <div className="w-1/2 flex justify-end">
               <Link
                    onClick={closeMenu}
                    to="/"
                    aria-label="Link to website's home page"
               >
                    <img
                         src="img/henriquepcm-logo-1x"
                         srcSet="
                       img/henriquepcm-logo-1x.png 1x,
                       img/henriquepcm-logo-2x.png 2x,
                       img/henriquepcm-logo-3x.png 3x
                  "
                         className="w-24 h-24 transition ease-linear hover:scale-90"
                         alt="henriquepcm.com logo"
                         decoding="async"
                    />
               </Link>
          </div>
     );
}

export default Logo;
