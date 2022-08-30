import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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

  return isLoading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
