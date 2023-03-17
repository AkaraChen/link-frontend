import { FC, ReactNode } from "react";

const Cell: FC<TableCellProps> = ({ name, children }) => (
  <tr>
    <td>{name}</td>
    <td>{children}</td>
  </tr>
);

type TableCellProps = {
  name: string;
  children: ReactNode;
};

export default Cell;
