import React from "react";
import styles from "../styles/CardList.module.css";
import Card from "./Card";
import config from "../config";
import { useState, useEffect } from "react";
import { data } from "../config";
import { shuffle } from "lodash";
import "animate.css";

const CardList = () => {
  const [list, setList] = useState<data[]>([]);
  let delay = 0;
  const getDelay = () => ++delay/10;

  useEffect(() => setList(shuffle(config)), []);

  return (
    <section className={styles.container}>
      {list.map((item) => (
        <div
          style={{ animationDelay: `${getDelay()}s` }}
          className="animate__animated animate__bounceIn"
          key={item.title}
        >
          <Card image={item.avatar} desc={item.desc} link={item.link}>
            {item.title}
          </Card>
        </div>
      ))}
    </section>
  );
};

export default CardList;
