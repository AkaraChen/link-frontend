import type { ReactNode } from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import React from "react";
import Main from "./Main";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles.container}>
    <Header></Header>
    <Main>{children}</Main>
  </div>
);

export default Layout;
