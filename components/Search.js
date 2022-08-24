import { useState } from "react";

const styles = {
  wrapper: `-mt-10 z-30`,
  form: `bg-[#fff] dark:bg-[#19202d] items-center flex flex-row text-center mt-[0em] mx-[132px] rounded-lg`,
  formControl: `flex flex-row mx-auto gap-x-3`,
  formControl03: `flex flex-row ml-auto mr-3 gap-x-5`,
  formInput: `border-none bg-transparent outline-none`,
  hr: "bg-gray-300 h-20 w-[1px] ml-auto",
  svg: `h-6 w-6 text-blue-600`,
  checkbox: `h-[1rem] opacity-70 w-[1rem]`,
  checkText: `font-bold`,
  search: `py-4 px-9 bg-blue-600 font-semibold rounded-xl text-white mr-3`,
};

const Search = ({
  query,
  setQuery,
  setJobs,
  searchTitle,
}) => {
  const handleTitleChange = (e) => {
    setQuery({...query, title: e.target.value});
  };

  const handleLocationChange = (j) => {
    setQuery({...query, location: j.target.value});
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.formControl}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              value={query.title}
              onChange={handleTitleChange}
              placeholder="Filter by Title..."
              className={styles.formInput}
              autoFocus
            />
          </div>
          <hr className={styles.hr} />
          <div className={styles.formControl}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              value={query.location}
              onChange={handleLocationChange}
              placeholder="Filter by Location..."
              className={styles.formInput}
              autoFocus
            />
          </div>
          <hr className={styles.hr} />
          <div className={styles.formControl03}>
            <span>
              <input type="checkbox" className={styles.checkbox} />
            </span>
            <span className={styles.checkText}>Full Time Only</span>
          </div>
          <button
            className={styles.search}
            onClick={() => setJobs(searchTitle)}
          >
            <p>Search</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
