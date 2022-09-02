import React, { ReactNode } from "react";
import styles from "./Notice.module.css";

const Notice = ({ children }: props) => (
  <div className={styles.container}>{children}</div>
);

type props = {
  children: ReactNode;
};

export default Notice;
