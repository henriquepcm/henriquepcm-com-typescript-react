function EducationItem({ year, college, title }) {
     return (
          <>
               <div>{year}</div>
               <div className="flex">
                    <div className="vertical-line">
                         <span className="font-bold">{college}</span>
                         <br />
                         <span>{title}</span>
                    </div>
               </div>
          </>
     );
}

export default EducationItem;
