import styles from "../styles/Header.module.css";
import React from "react";
import Link from "next/link";

const Header = () => (
  <div className={styles.container}>
    <h1>
      <Link href="/">Friends</Link>
    </h1>
    <Link href="/submit">Submit</Link>
    <Link href="/login">Manage</Link>
  </div>
);

export default Header;
