import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function CertificationItem({ year, link, title, showYear }) {
     return (
          <>
               {showYear && <div>{year}</div>}
               <div className="flex">
                    <div className="vertical-line">
                         {link ? (
                              <a
                                   className="link-inline"
                                   href={link}
                                   target="_blank"
                              >
                                   {title}{" "}
                                   <FontAwesomeIcon
                                        className="ml-1 w-3 transition ease-linear hover:scale-90"
                                        icon={faArrowUpRightFromSquare}
                                   />
                              </a>
                         ) : (
                              `${title} `
                         )}
                    </div>
               </div>
          </>
     );
}

export default CertificationItem;
