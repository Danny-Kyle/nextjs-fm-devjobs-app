import { useState } from "react";
import JobCard from "./job/JobCard";
import Search from "./Search";

const style = {
  wrapper: `mt-6 grid grid-cols-3 gap-2 mx-28`,
  button: `bg-blue-700 p-4 rounded-lg text-white hover:scale-105`,
  butdiv: `py-16`,
};

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  function mapJobs() {
    return (
      <div className={style.wrapper}>
        {jobs.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="mx-auto justify-center">
      <Search jobs={jobs} setJobs={setJobs}/>
      {mapJobs()}
      {/* <div className={style.butdiv}>
        <button className={style.button}>Load more</button>
      </div> */}
    </div>
  );
};

export default Jobs;
