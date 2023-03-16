import { FC, PropsWithChildren } from "react";
import styles from "./Title.module.css";

const Title:FC<PropsWithChildren> = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);

export default Title;
