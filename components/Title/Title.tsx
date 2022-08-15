import React from "react";
import styles from "./Title.module.css";

const Title = ({ children }: props) => (
  <h2 className={styles.title}>{children}</h2>
);

type props = {
  children: string;
};

export default Title;
