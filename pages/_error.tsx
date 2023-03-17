import { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Error.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { IBM_Plex_Mono } from "next/font/google";
import clsx from "clsx";

const IBMPlexMono = IBM_Plex_Mono({
  weight: ["300", "400"],
  subsets: ["latin"],
});

const Error: NextPage = ({ statusCode }: any) => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{`${statusCode}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h2 className={clsx(styles.code, IBMPlexMono.className)}>
          {statusCode}
        </h2>
        {statusCode ? (
          <p className={styles.text}>
            An <span className={styles.highlight}>{statusCode}</span> error
            occurred on client
          </p>
        ) : (
          <p>An error occurred on client</p>
        )}
        <a className={styles.button} onClick={() => router.back()}>
          ←{"  "}回到上一页
        </a>
      </div>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
