import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialLinks from "../../data/socialLinksData";

function SocialLinks() {
     return (
          <ul id="footer-info" className="flex items-center space-x-2">
               {socialLinks.map((link, index) => (
                    <li key={index} className="active:translate-y-0.5">
                         <a
                              href={link.url}
                              target="_blank"
                              aria-label={`Link to Henrique Pochmann's ${link.name} profile`}
                         >
                              <FontAwesomeIcon
                                   icon={link.icon}
                                   className="h-5 w-5 transition ease-linear hover:scale-90"
                              />
                         </a>
                    </li>
               ))}
          </ul>
     );
}

export default SocialLinks;
