import React from "react";
import styles from "./CardList.module.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { data } from "../../config";
import { shuffle } from "lodash";
import "animate.css";

const CardList = ({ list }: props) => {

  const [shuffledList, setList] = useState<data[]>([]);
  let delay = 0;
  const getDelay = () => ++delay / 10;

  useEffect(() => setList(shuffle(list)), [list]);

  return (
    <section className={styles.container}>
      {shuffledList.map((item) => (
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

type props = {
  list: data[];
};

export default CardList;
