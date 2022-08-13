import React from "react";
import styles from "../styles/Note.module.css";

const Note = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>站点信息</h2>
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>站点标题</td>
          <td>AkaraChen</td>
        </tr>
        <tr>
          <td>站点图标</td>
          <td>
            <a
              className={styles.link}
              target="_blank"
              href="https://avatars.githubusercontent.com/u/85140972?v=4"
              rel="noreferrer"
            >
              Link
            </a>
          </td>
        </tr>
        <tr>
          <td>网站链接</td>
          <td>
            <a
              className={styles.link}
              href="https://akr.moe"
              target="_blank"
              rel="noreferrer"
            >
              akr.moe
            </a>
          </td>
        </tr>
        <tr>
          <td>网站描述</td>
          <td>位于互联网边缘的小站。</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Note;
