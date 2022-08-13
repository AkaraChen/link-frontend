import React from "react";
import styles from "../styles/Form.module.css";

const Form = () => (
  <form style={{ marginTop: "5vh" }} className={styles.container}>
    <h2 className={styles.title}>申请友链</h2>
    <input type="text" placeholder="昵称" className={styles.input} />
    <input type="text" placeholder="站点标题" className={styles.input} />
    <input type="url" placeholder="网站链接" className={styles.input} />
    <input type="text" placeholder="描述" className={styles.input} />
    <input type="submit" className={styles.button} />
    <input type="reset" className={styles.button} />
  </form>
);

export default Form;
