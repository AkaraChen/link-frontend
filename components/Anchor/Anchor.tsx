import React from "react";
import styles from "./Anchor.module.css";

const Link = ({ children, href }: props) => (
  <a className={styles.link} href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

type props = {
  children: string;
  href: string;
};

export default Link;
