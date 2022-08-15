import type { ReactNode } from "react";
import Header from "./Header";
import React from "react";
import Main from "./Main";

const Layout = ({ children, width }: props) => (
  <div>
    <Header></Header>
    <Main width={width ? width : "1200px"}>{children}</Main>
  </div>
);

type props = {
  children: ReactNode;
  width?: string;
};

export default Layout;
