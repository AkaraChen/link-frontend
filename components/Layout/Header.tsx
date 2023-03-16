import styles from "./Header.module.css";
import Link from "next/link";
import clsx from "clsx";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ['latin'] })

const Header = () => (
  <div className={clsx(styles.container, rubik.className)}>
    <h1>
      <Link href="/">Friends</Link>
    </h1>
    <Link href="/submit">Submit</Link>
  </div>
);

export default Header;
