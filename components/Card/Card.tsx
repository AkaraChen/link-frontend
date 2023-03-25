import { FC, ReactNode, useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Card: FC<CardProps> = ({ children, image, desc, link }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Link
        className={styles.container}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={styles.image}
          src={image}
          width={70}
          height={70}
          alt={children as string}
        />
        <section className={styles.section}>
          <p className={styles.title}>{children}</p>
          <span className={styles.desc}>{desc}</span>
        </section>
        {hover && (
          <motion.div
            className={styles.hover}
            layoutId={"cardHover"}
            initial={{
              opacity: 0.05,
              backgroundColor: "black",
            }}
          />
        )}
      </Link>
    </motion.div>
  );
};

type CardProps = {
  children: ReactNode;
  image: string;
  desc?: string;
  link: string;
};

export default Card;
