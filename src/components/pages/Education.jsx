import EducationItem from "../ui/EducationItem";
import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import colleges from "../../data/educationData";

function Education() {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-education"
               container="container-education"
          >
               <Heading1>Education</Heading1>
               {colleges.map((college, index) => (
                    <EducationItem
                         key={index}
                         year={college.year}
                         college={college.college}
                         title={college.title}
                    />
               ))}
          </PageMainContent>
     );
}

export default Education;
