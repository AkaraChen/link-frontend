import { FC } from "react";
import styles from "./Anchor.module.css";

const Link: FC<LinkProps> = ({ children, href }) => (
  <a className={styles.link} href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

type LinkProps = {
  children: string;
  href: string;
};

export default Link;
