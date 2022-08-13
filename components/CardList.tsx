import React from "react";
import styles from "../styles/CardList.module.css";
import Card from "./Card";
import config from "../config";

const render = (list: data[]) =>
  list.map((item) => (
    <div key={item.title}>
      <Card image={item.avatar} desc={item.desc} link={item.link}>
        {item.title}
      </Card>
    </div>
  ));

const CardList = () => (
  <section className={styles.container}>{render(config)}</section>
);

type data = {
  avatar: string;
  title: string;
  desc?: string;
  link: string;
};

export default CardList;
