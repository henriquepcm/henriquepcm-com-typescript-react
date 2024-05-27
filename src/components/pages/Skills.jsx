import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import TagList from "../ui/TagList";
import skills from "../../data/skillsData";

function Skills() {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-skills"
               container="container-skills"
          >
               <Heading1>Skills, Tools and Languages</Heading1>

               <span className="mt-5 font-bold">Hard Skills</span>
               <TagList tags={skills.hardSkills} />

               <span className="mt-5 font-bold">Complementary Skills</span>
               <TagList tags={skills.compSkills} />

               <span className="mt-5 font-bold">Soft Skills</span>
               <TagList tags={skills.softSkills} />

               <span className="mt-5 font-bold">Tools</span>
               <TagList tags={skills.tools} />

               <span className="mt-5 font-bold">Languages</span>
               <TagList tags={skills.languages} />
          </PageMainContent>
     );
}

export default Skills;
