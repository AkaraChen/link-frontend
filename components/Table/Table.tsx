import React,{ ReactNode } from "react";
import styles from "./Table.module.css";

const Note = ({ children }: props) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <tbody>
        {children}
      </tbody>
    </table>
  </div>
);

type props = {
  children: ReactNode
};

export default Note;
