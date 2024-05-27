function Heading1({ children, isHome }) {
     return (
          <h1
               className={`${
                    isHome ? "lg:text-7xl text-6xl" : "text-xl mb-10"
               } uppercase font-bold leading-none tracking-wider mb-4`}
          >
               {children}
          </h1>
     );
}

export default Heading1;
