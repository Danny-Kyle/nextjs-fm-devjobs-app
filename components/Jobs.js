import JobCard from "./job/JobCard";
import Search from "./Search";
import { useEffect, useState } from "react";
import getData from "../data";

const style = {
  wrapper: `mt-6 grid grid-cols-3 gap-2 mx-28`,
  button: `bg-blue-700 p-4 rounded-lg text-white hover:scale-105`,
  butdiv: `py-16 mx-auto justify-center items-center`,
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState({
    title: ``,
    location: ``,
  });
  const searchTitle = jobs.filter((job) => job.jobName.toLowerCase().includes(query.title) && job.jobLocation.toLowerCase().includes(query.location));

  useEffect(() => {
    const data = getData();
    setJobs(data);
  }, []);

  function mapJobs() {
    return (
      <div className={style.wrapper}>
        {jobs.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    );
  }

  console.log(query.title, query.location)

  return (
    <>
      <Search query={query} setQuery={setQuery} searchTitle={searchTitle} setJobs={setJobs}/>
      {mapJobs()}
      {/* <div className={style.butdiv}>
        <button className={style.button}>Load more</button>
      </div> */}
    </>
  );
};

export default Jobs;
