import logo from "/public/assets/desktop/logo.svg";
import sun from "/public/assets/desktop/icon-sun.svg";
import moon from "/public/assets/desktop/icon-moon.svg";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@headlessui/react";
import { useAppContext } from "../context/Context";

const styles = {
  text: ``,
  wrapper: ``,
  div: `flex flex-row justify-end items-center px-32 py-12 text-white mx-auto`,
  themeSwitcher: `ml-auto`,
  logo: `cursor-pointer`,
};

const NavBar = () => {
  const {darkMode, setDarkMode} = useAppContext();
  return (
    <div className="bg-hero-pattern bg-cover h-[160px]">
      <nav className={styles.wrapper}>
        <div className={styles.div}>
          <Link href="/">
            <div>
              <Image src={logo} alt="logo" className={styles.logo} />
            </div>
          </Link>
          <div className={styles.themeSwitcher}>
            <Image src={sun} alt="logo" />
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${darkMode ? "bg-gray-700" : "bg-white"}
          relative inline-flex mx-2 h-[32px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${darkMode ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[28px] w-[30px] transform rounded-full bg-blue-600 shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <Image src={moon} alt="logo" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
