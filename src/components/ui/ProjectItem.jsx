import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProjectItem({ year, description, link, name }) {
     return (
          <>
               <div>{year}</div>
               <div className="vertical-line">
                    {link ? (
                         <a
                              className="link-inline font-bold"
                              href={link}
                              target="_blank"
                         >
                              {name}{" "}
                              <FontAwesomeIcon
                                   className="ml-1 w-3 transition ease-linear hover:scale-90"
                                   icon={faArrowUpRightFromSquare}
                              />
                         </a>
                    ) : (
                         <span className="font-bold">{name}</span>
                    )}
                    <p className="mb-2">{description}</p>
               </div>
          </>
     );
}

export default ProjectItem;
