import styles from "./CardList.module.css";
import Card from "./Card";
import { data } from "../../config";
import "animate.css";

const CardList = ({ list }: props) => {

  let delay = 0;
  const getDelay = () => ++delay / 10;

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

type props = {
  list: data[];
};

export default CardList;
