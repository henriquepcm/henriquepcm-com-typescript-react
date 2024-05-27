import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import ExperienceItem from "../ui/ExperienceItem";
import experiences from "../../data/professionalExperiencesData";

function ProfessionalExperiences() {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-experiences"
               container="container-experiences"
          >
               <Heading1>PROFESSIONAL EXPERIENCES</Heading1>
               {experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
               ))}
          </PageMainContent>
     );
}

export default ProfessionalExperiences;
