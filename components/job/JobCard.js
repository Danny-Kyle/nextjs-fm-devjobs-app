import Image from "next/image";
import Link from "next/link";

const JobCard = ({ job, index }) => {
  const style = {
    card: `bg-[#fff] dark:bg-[#19202d] hover:scale-110 duration-500 ease-in-out cursor-pointer transition py-10 px-8 cursor-pointer text-black dark:text-white rounded-md mb-0 md:mx-auto mx-0 mt:[4.0625em] w-[339px] md:mt-[3.0625em] relative md:w-[350px] lg:w-[327px]`,
    cardImage: `${
      job.companyName === "Scoot"
        ? `bg-[#Ea9310]`
        : job.companyName === "Blogr"
        ? `bg-[#De4b24]`
        : job.companyName === "Vector"
        ? `bg-[#353641]`
        : job.companyName === "Office Lite"
        ? `bg-[#2f4fc6]`
        : job.companyName === "Pod"
        ? `bg-[#132034]`
        : job.companyName === "Creative"
        ? `bg-[#4e1853]`
        : job.companyName === "Pomodoro"
        ? `bg-[#4721c4]`
        : job.companyName === "Maker"
        ? `bg-[#21437d]`
        : job.companyName === "Coffee Roasters"
        ? `bg-[#F2ddca]`
        : job.companyName === "MasterCraft"
        ? `bg-[#1f1f1f]`
        : job.companyName === "CrowdFund"
        ? `bg-[#37c890]`
        : job.companyName === "Typemaster"
        ? `bg-[#F26818]`
        : `bg-black`
    } items-center rounded-2xl flex h-[50px] justify-center absolute -top-[25px] w-[50px]`,
    cardImageImg: `align-center m-auto`,
    cardBody: ``,
    contractPostedAt: `inline-flex text-sm text-gray-400 gap-x-2 pb-1`,
    location: `text-blue-400 text-sm pt-5`,
    company: `text-sm text-gray-400 py-1`,
    positionTitle: `font-bold`,
  };
  return (
    <Link as={`/${job.companyName}/${job.jobName}`} href={`/[company]/[id]`} key={index}>
      <div className={style.card}>
        <div className={style.cardImage}>
          <Image
            src={job.iconURL}
            alt={`${job.jobName} logo`}
            className={style.cardImageImg}
          />
        </div>
        <div className={style.cardBody}>
          <div className={style.contractPostedAt}>
            <p>{job.timePosted}</p>.<p>{job.jobType}</p>
          </div>
          <h3>
            <p className={style.positionTitle}>
                {job.jobName}
            </p>
          </h3>
          <p className={style.company}>{job.companyName}</p>
          <h4 className={style.location}>{job.jobLocation}</h4>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
