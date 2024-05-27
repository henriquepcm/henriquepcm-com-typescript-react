import CertificationItem from "../ui/CertificationItem";
import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import certifications from "../../data/certificationsData";

function Certifications() {
     let previousYear = null;

     return (
          <PageMainContent
               containerWrapper="container-wrapper-certifications"
               container="container-certifications"
          >
               <Heading1>Certifications</Heading1>
               {certifications.map((certification, index) => {
                    const { year } = certification;
                    const showYear = year !== previousYear;
                    previousYear = year;
                    return (
                         <CertificationItem
                              key={index}
                              year={certification.year}
                              link={certification.link}
                              title={certification.title}
                              showYear={showYear}
                         />
                    );
               })}
          </PageMainContent>
     );
}

export default Certifications;
