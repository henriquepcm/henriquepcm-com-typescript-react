import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import ProjectItem from "../ui/ProjectItem";
import projects from "../../data/projectsData";

function Projects() {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-projects"
               container="container-projects"
          >
               <Heading1>Projects</Heading1>
               {projects.map((project, index) => (
                    <ProjectItem
                         key={index}
                         year={project.year}
                         name={project.name}
                         description={project.description}
                         link={project.link}
                    />
               ))}
          </PageMainContent>
     );
}

export default Projects;
