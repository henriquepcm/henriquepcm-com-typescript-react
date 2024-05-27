import TagList from "./TagList";

function ExperienceItem({ experience }) {
     const {
          duration,
          jobTitle,
          company,
          employmentStatus,
          workLocation,
          responsibilities,
          growth,
          skills,
     } = experience;

     return (
          <>
               <div className="w-full">{duration}</div>
               <div className="vertical-line">
                    <h3 className="text-lg">
                         {jobTitle} at <strong>{company}</strong> as a{" "}
                         {employmentStatus} | {workLocation}
                    </h3>
                    <p className="mt-5">Responsibilities: {responsibilities}</p>
                    <p className="mt-5">Growth: {growth}</p>

                    <p className="mt-5">Skills Applied:</p>
                    <TagList tags={skills} />
               </div>
          </>
     );
}

export default ExperienceItem;
