import React from "react";
import { Layout } from "antd";
import HeaderComponent from "../component/layout/header/Header";
import { Outlet } from "react-router-dom";
import FooterComponent from "../component/layout/footer/Footer";
const { Header, Footer, Content } = Layout;
const Mainlayout = () => {
  return (
    <Layout>
      <Header
        style={{
          background: "transparent",
          position: "fixed",
          top: "0px",
          zIndex: "10",
          padding: "0",
          margin: "0",
        }}
      >
        <HeaderComponent />
      </Header>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer
        style={{
          margin: "0",
          padding: "0",
        }}
      >
        <FooterComponent />
      </Footer>
    </Layout>
  );
};

export default Mainlayout;
