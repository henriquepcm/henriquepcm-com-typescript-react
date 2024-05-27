import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";

function PageNotFound() {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-notfound"
               container="container-notfound"
          >
               <Heading1>No results</Heading1>
               <p>Sorry, page not found. :(</p>
          </PageMainContent>
     );
}

export default PageNotFound;
