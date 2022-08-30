import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { magic } from "../../lib/magic-client";
const NavBar = () => {
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(async () => {
    // Assumes a user is already logged in

    try {
      const { email, publicAddress } = await magic.user.getMetadata();
      setUserName(email);
    } catch (error) {
      // Handle errors if required!
      console.log("Somthing went wrong", error);
    }
  }, []);

  const showDropdownHandler = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };
  const clickHomeHandler = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const clickListHandler = (e) => {
    e.preventDefault();
    router.push("/ddd");
  };
  const singoutHandler = async (e) => {
    try {
      await magic.user.logout();
      router.push("/login");
      // console.log(await magic.user.isLoggedIn()); // => `false`
    } catch {
      // Handle errors if required!
      router.push("/login");
    }
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="netflix logo"
              width={128}
              height={34}
            />
          </div>
        </a>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={clickHomeHandler}>
            Home
          </li>
          <li className={styles.navItem2} onClick={clickListHandler}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              onClick={showDropdownHandler}
            >
              <p className={styles.username}>{userName}</p>
              <Image
                src="/static/expand_more.svg"
                alt="Expand dropdown"
                width={24}
                height={24}
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={singoutHandler}>
                    Sign Out
                  </a>
                  <div className={styles.linWrapper}></div>
                </div> 
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
