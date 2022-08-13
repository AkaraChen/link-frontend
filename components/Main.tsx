import React, { ReactNode } from "react";
import styles from "../styles/Main.module.css";

const Main = ({ children }: { children: ReactNode }) => (
  <main className={styles.container}>{children}</main>
);

export default Main;
