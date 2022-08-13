import React, { ReactNode } from "react";
import styles from "../styles/Card.module.css";

const Card = ({ children, image, desc, link }: props) => (
  <a href={link} className={styles.container} target="_blank" rel="noreferrer">
    <picture>
      <source srcSet={image} />
      <img className={styles.image} src={image} width={70} height={70} alt={children?.toString()} />
    </picture>
    <section className={styles.section}>
      <p className={styles.title}>{children}</p>
      <span className={styles.desc}>{desc}</span>
    </section>
  </a>
);

type props = {
  children: ReactNode;
  image: string;
  desc?: string;
  link: string;
};

export default Card;
