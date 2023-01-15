import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  // const Router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
