import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import getData from "../../data";
import { useAppContext } from "/context/Context";

const style = {
  wrapper: `bg-[#f4f6f8] h-full dark:bg-[#121721] transition duration-500 text-black dark:text-white items-center mx-auto justify-center`,
  image: ``,
  footer: `flex flex-col items-center justify-evenly px-6 py-4 justify-end bg-white dark:bg-gray-800 sm:flex-row`,
  butDiv: `bg-blue-700 p-4 rounded-lg text-white cursor-pointer hover:bg-blue-400`,
  text: `font-bold text-2xl mt-5 mb-2`,
  compText: `text-sm text-gray-600`,
  webText: `text-sm text-gray-600 cursor-pointer`,
  compSite: `bg-[#fff] -mt-12 dark:bg-[#19202d] items-center justify-between flex flex-row text-center mx-[300px] rounded-lg`,
  compSiteButton: `bg-gray-100 dark:bg-blue-600 dark:text-gray-100 p-4 rounded-lg text-blue-500 font-semibold cursor-pointer hover:bg-gray-300 mr-16`,
  web: `flex`,
  websitetext: `text-left ml-12`,
  jobdesc: `mx-[300px] bg-[#fff] dark:bg-[#19202d] my-9 flex flex-col p-8`,
  jobreqart: `my-4 text-gray-600`,
  desctypearticle: `flex flex-row gap-3 text-gray-400 font-semibold`,
  desctypeheader: `font-bold text-3xl`,
  desctypecountry: `text-sm text-blue-600 font-semibold`,
  descheadercontainer: `flex justify-between mt-2`,
  descContainerButton: `bg-blue-600 py-4 px-7 font-semibold cursor-pointer text-white`,
};

export default function Id() {
  const {darkMode, setDarkMode} = useAppContext();
  const [singleJob, setSingleJob] = useState([]);
  const router = useRouter();
  const job = router.query;
  console.log(router.query);

  useEffect(() => {
    const data = getData();
    setSingleJob(data);
  }, []);

  const finalSingleJob = singleJob.find((work) => work.jobName === job.id);
  console.log(finalSingleJob);

  function mapFinalSingleJob() {
    return (
      <>
        <article className={style.desctypearticle}>
          <p>{finalSingleJob?.timePosted}</p>
          <p>.</p>
          <p>{finalSingleJob?.jobType}</p>
        </article>
        <div className={style.descheadercontainer}>
          <h1 className={style.desctypeheader}>{finalSingleJob?.jobName}</h1>
          <Link href={`https://example.com/${job.company}`}>
            <p className={style.descContainerButton}>Apply Now</p>
          </Link>
        </div>
        <p className={style.desctypecountry}>{finalSingleJob?.jobLocation}</p>

        <article className={style.jobreqart}>
          <p>{finalSingleJob?.description}</p>
          <h1 className="capitalize text-2xl font-semibold text-black dark:text-white my-4">
            requirements
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus pellentesque arcu, a placerat enim placerat quis. Donec eu
            odio convallis, laoreet magna vel, accumsan lectus. Curabitur
            commodo ex et mattis faucibus. Sed egestas porta purus eu tempor.
            Aenean convallis tellus sed magna sodales, vel sagittis enim
            commodo. Suspendisse efficitur mauris et dolor commodo, a ornare
            purus accumsan. Nulla viverra neque ut mi volutpat, dapibus suscipit
            tortor volutpat. Nullam a malesuada orci. Suspendisse egestas in
            dolor et viverra. Pellentesque auctor elementum mauris, vitae
            tincidunt magna sagittis sed. Vivamus sollicitudin tempor finibus.
            Curabitur eget velit sit amet magna semper tempus sed non elit.
            Pellentesque tempor augue sit amet nisl condimentum lobortis.
            Maecenas auctor mi tempus tempor hendrerit. Fusce vestibulum nisl in
            est sodales sollicitudin. Sed vitae dolor et libero sodales mollis.
            Aliquam leo libero, dictum vel finibus nec, sollicitudin vel nulla.
            Integer tempus nisl nec convallis semper. Aenean ac luctus ipsum.
            Vivamus justo odio, finibus et nunc lacinia, auctor malesuada justo.
            Mauris tincidunt tincidunt dui. Donec id magna aliquet, lobortis
            lorem vitae, aliquet justo. Pellentesque commodo vulputate eros
            vitae fermentum. Nullam ullamcorper, lacus vel pharetra ultrices,
            neque sem sagittis purus, a pulvinar mi risus ut nulla. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Aliquam id tincidunt erat. Ut in dignissim nibh.
            Cras a volutpat ipsum. Nunc ultricies sodales risus, convallis
            euismod nulla vehicula quis. Vivamus risus quam, iaculis quis
            euismod vitae, bibendum ut ipsum. Integer porttitor dignissim
            laoreet. Morbi vel nulla id erat dignissim consequat. Sed ligula
            erat, aliquam ac mattis nec, ullamcorper in nulla. Aenean in arcu
            mi. Proin est odio, interdum vitae rhoncus sit amet, efficitur vitae
            erat.
          </p>
          <h1 className="capitalize text-2xl font-semibold text-black dark:text-white my-4">
            What you will do
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus pellentesque arcu, a placerat enim placerat quis. Donec eu
            odio convallis, laoreet magna vel, accumsan lectus. Curabitur
            commodo ex et mattis faucibus. Sed egestas porta purus eu tempor.
            Aenean convallis tellus sed magna sodales, vel sagittis enim
            commodo. Suspendisse efficitur mauris et dolor commodo, a ornare
            purus accumsan. Nulla viverra neque ut mi volutpat, dapibus suscipit
            tortor volutpat. Nullam a malesuada orci. Suspendisse egestas in
            dolor et viverra. Pellentesque auctor elementum mauris, vitae
            tincidunt magna sagittis sed. Vivamus sollicitudin tempor finibus.
            Curabitur eget velit sit amet magna semper tempus sed non elit.
            Pellentesque tempor augue sit amet nisl condimentum lobortis.
            Maecenas auctor mi tempus tempor hendrerit. Fusce vestibulum nisl in
            est sodales sollicitudin. Sed vitae dolor et libero sodales mollis.
            Aliquam leo libero, dictum vel finibus nec, sollicitudin vel nulla.
            Integer tempus nisl nec convallis semper. Aenean ac luctus ipsum.
            Vivamus justo odio, finibus et nunc lacinia, auctor malesuada justo.
            Mauris tincidunt tincidunt dui. Donec id magna aliquet, lobortis
            lorem vitae, aliquet justo. Pellentesque commodo vulputate eros
            vitae fermentum. Nullam ullamcorper, lacus vel pharetra ultrices,
            neque sem sagittis purus, a pulvinar mi risus ut nulla. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Aliquam id tincidunt erat. Ut in dignissim nibh.
            Cras a volutpat ipsum. Nunc ultricies sodales risus, convallis
            euismod nulla vehicula quis. Vivamus risus quam, iaculis quis
            euismod vitae, bibendum ut ipsum. Integer porttitor dignissim
            laoreet. Morbi vel nulla id erat dignissim consequat. Sed ligula
            erat, aliquam ac mattis nec, ullamcorper in nulla. Aenean in arcu
            mi. Proin est odio, interdum vitae rhoncus sit amet, efficitur vitae
            erat.
          </p>
        </article>
      </>
    );
  }

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <Head>
        <title>
          {job.company} || {job.id}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.wrapper}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <section className={style.compSite}>
          <div className={style.web}>
            <div
              className={`h-28 w-24 items-center rounded-tl-lg rounded-bl-lg pt-8 justify-center mx-auto ${
                finalSingleJob?.companyName === "Scoot"
                  ? `bg-[#Ea9310]`
                  : finalSingleJob?.companyName === "Blogr"
                  ? `bg-[#De4b24]`
                  : finalSingleJob?.companyName === "Vector"
                  ? `bg-[#353641]`
                  : finalSingleJob?.companyName === "Office Lite"
                  ? `bg-[#2f4fc6]`
                  : finalSingleJob?.companyName === "Pod"
                  ? `bg-[#132034]`
                  : finalSingleJob?.companyName === "Creative"
                  ? `bg-[#4e1853]`
                  : finalSingleJob?.companyName === "Pomodoro"
                  ? `bg-[#4721c4]`
                  : finalSingleJob?.companyName === "Maker"
                  ? `bg-[#21437d]`
                  : finalSingleJob?.companyName === "Coffee Roasters"
                  ? `bg-[#F2ddca]`
                  : finalSingleJob?.companyName === "MasterCraft"
                  ? `bg-[#1f1f1f]`
                  : finalSingleJob?.companyName === "CrowdFund"
                  ? `bg-[#37c890]`
                  : finalSingleJob?.companyName === "Typemaster"
                  ? `bg-[#F26818]`
                  : `bg-black`
              }`}
            >
              <Image
                src={finalSingleJob?.iconURL}
                alt={finalSingleJob?.companyName}
                width={35}
                height={40}
              />
            </div>
            <div className={style.websitetext}>
              <p className={style.text}>{job.company}</p>
              <Link href={`https://example.com/${job.company}`}>
                <p className={style.webText}>
                  {`https://example.com/${job.company}`}
                </p>
              </Link>
            </div>
          </div>

          <Link href={`https://example.com/${job.company}`}>
            <p className={style.compSiteButton}>Company Site</p>
          </Link>
        </section>

        <section className={style.jobdesc}>{mapFinalSingleJob()}</section>

        <footer className={style.footer}>
          <div>
            <p className={style.text}>{job.id}</p>
            <p className={style.compText}>{job.company}</p>
          </div>
          <Link href={`https://example.com/${job.company}`}>
            <div className={style.butDiv}>Apply now</div>
          </Link>
        </footer>
      </div>
    </main>
  );
}

// jobLocation
// jobType
// timePosted
// companyName
// iconURL
// jobName
