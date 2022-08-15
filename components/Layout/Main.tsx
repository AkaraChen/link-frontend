import React, { ReactNode } from "react";
import styles from "./Main.module.css";

const Main = ({ children, width }: props) => (
  <main style={{ maxWidth: width }} className={styles.container}>
    {children}
  </main>
);

type props = {
  children: ReactNode;
  width?: string;
};

export default Main;
