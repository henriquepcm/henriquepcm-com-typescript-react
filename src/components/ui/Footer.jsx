import SocialLinks from "./SocialLinks";

function Footer() {
     return (
          <footer className="flex bg-white border-t fixed bottom-0 left-0 right-0 p-5 justify-center">
               <SocialLinks />
               <div className="flex items-center text-xs uppercase ml-5 sm:pb-2">
                    <p className="tracking-wider">
                         Created from scratch by Henrique P. with&nbsp;
                         <a
                              className="link-inline font-bold"
                              href="https://www.figma.com/"
                              target="_blank"
                              data-replace="Figma"
                         >
                              <span>Figma</span>
                         </a>
                         ,&nbsp;
                         <a
                              className="link-inline font-bold"
                              href="https://code.visualstudio.com/"
                              target="_blank"
                              data-replace="Visual Studio Code"
                         >
                              <span>VS Code</span>
                         </a>
                         ,&nbsp;
                         <a
                              className="link-inline font-bold"
                              href="https://react.dev/"
                              target="_blank"
                              data-replace="React"
                         >
                              <span>React</span>
                         </a>
                         , and&nbsp;
                         <a
                              className="link-inline font-bold"
                              href="https://tailwindcss.com/"
                              target="_blank"
                              data-replace="Tailwind CSS"
                         >
                              <span>Tailwind CSS</span>
                         </a>
                         .
                    </p>
               </div>
          </footer>
     );
}

export default Footer;
