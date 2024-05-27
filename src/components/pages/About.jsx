import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";

function About() {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-about"
               container="container-about"
          >
               <Heading1>About Henrique Pochmann</Heading1>
               <div className="space-y-5">
                    <p>
                         I'm Henrique Pochmann from Porto Alegre/RS - Brazil
                         (GMT-3). With over 20 years of experience creating,
                         developing, and participating in digital projects, and
                         also with solid experience in design, I recently found
                         my passion in front-end development. Currently, I'm
                         fine-tuning my skills to move software engineering to
                         the center of my professional life.
                    </p>
                    <p>
                         Development aside, a few topics I am particularly
                         interested in are investments, learning languages,
                         music, and making pizza/burgers.
                    </p>
                    <p>
                         Am I a good fit for your project? Feel free to drop me
                         a line at
                         <span className="font-bold ml-1">
                              henriquepcm[at]gmail.com
                         </span>
                         &nbsp;and let's chat about it.
                    </p>
               </div>
          </PageMainContent>
     );
}

export default About;
