import React, { ReactNode } from "react";

const Cell = ({ name, children }: props) => (
  <tr>
    <td>{name}</td>
    <td>{children}</td>
  </tr>
);

type props = {
  name: string;
  children: ReactNode;
};

export default Cell;
