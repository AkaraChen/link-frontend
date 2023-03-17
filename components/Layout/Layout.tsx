import type { FC, ReactNode } from "react";
import Header from "./Header";
import Main from "./Main";

const Layout: FC<LayoutProps> = ({ children, width }) => (
  <div>
    <Header />
    <Main width={width ? width : "1200px"}>{children}</Main>
  </div>
);

type LayoutProps = {
  children: ReactNode;
  width?: string;
};

export default Layout;
