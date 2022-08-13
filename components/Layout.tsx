import type { ReactNode } from "react";
import Header from "./Header";
import React from "react";
import Main from "./Main";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header></Header>
    <Main>{children}</Main>
  </div>
);

export default Layout;
