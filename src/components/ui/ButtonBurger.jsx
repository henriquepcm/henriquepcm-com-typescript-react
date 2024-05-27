function ButtonBurger({ toggleMenu }) {
     return (
          <div className="w-1/2">
               <div className="w-10 h-10 rounded-full">
                    <button
                         onClick={toggleMenu}
                         className="w-5 mt-3 ml-2.5 space-y-0.5 delay-100 transition ease-linear hover:scale-90"
                         aria-label="Opens main menu"
                    >
                         <div>
                              <hr className="border-2 border-black rounded-sm" />
                         </div>
                         <div>
                              <hr className="border-2 border-black rounded-sm" />
                         </div>
                         <div>
                              <hr className="border-2 border-black rounded-sm" />
                         </div>
                    </button>
               </div>
          </div>
     );
}

export default ButtonBurger;
