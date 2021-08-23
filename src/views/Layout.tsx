import React, { useState } from "react";
import Header from "../components/header/Header";
import * as S from "./Layout.style";
import Sidebar from "../components/sidebar/Sidebar";
import { Container } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
};

/* template for pages */
const Layout = ({ children }: Props) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <S.Wrapper>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid>{children}</Container>
      </S.Wrapper>
    </>
  );
};

export default Layout;
