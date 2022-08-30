import { getDomainLocale } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import { magic } from "../lib/magic-client";
import Loading from "../components/loading/Loading";

const Login = () => {
  const [userMsg, setUserMsg] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const changeHandler = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", changeHandler);
    router.events.on("routeChangeError", changeHandler);
    return () => {
      router.events.off("routeChangeComplete", changeHandler);
      router.events.off("routeChangeError");
    };
  }, [router]);

  const emailChangeHandler = (e) => {
    setUserMsg("");
    setEmail(e.target.value);
  };
  const loginEmailHandler = async (e) => {
    if (email) {
      if (email === "aliaminicr99@gmail.com") {
        // log in a user by their email
        try {
          setIsLoading(true);
          const didToken = await magic.auth.loginWithMagicLink({ email });
          if (didToken) {
            router.push("/");
          }
        } catch (error) {
          // Handle errors if required!
          console.log("smthing went wrong", error);
        }
      } else {
        setUserMsg("Somthing went wrong");
      }
    } else {
      setUserMsg("Please Enter valid email");
    }
    e.preventDefault();
  };
  const temp = (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
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
        </div>
      </header>
      <div>
        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>
            <input
              onChange={emailChangeHandler}
              type="text"
              placeholder="Email address"
              className={styles.emailInput}
            />
            <p className={styles.userMsg}>{userMsg}</p>
            <button
              onClick={loginEmailHandler}
              className={styles.loginBtn}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
  const load = <Loading />;
  return isLoading ? load : temp;
};
export default Login;
