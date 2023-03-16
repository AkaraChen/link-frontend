import { FC, ReactNode } from "react";
import styles from "./Card.module.css";

const Card: FC<CardProps> = ({ children, image, desc, link }) => (
  <a href={link} className={styles.container} target="_blank" rel="noreferrer">
    <picture>
      <source srcSet={image} />
      <img
        className={styles.image}
        src={image}
        width={70}
        height={70}
        alt={children?.toString()}
      />
    </picture>
    <section className={styles.section}>
      <p className={styles.title}>{children}</p>
      <span className={styles.desc}>{desc}</span>
    </section>
  </a>
);

type CardProps = {
  children: ReactNode;
  image: string;
  desc?: string;
  link: string;
};

export default Card;
