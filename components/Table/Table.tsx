import { FC, ReactNode } from "react";
import styles from "./Table.module.css";

const Note: FC<TableProps> = ({ children }) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <tbody>{children}</tbody>
    </table>
  </div>
);

type TableProps = {
  children: ReactNode;
};

export default Note;
