import React from "react";
import { Layout } from "antd";
import logo from "../../assets/logo.png";
const LoginLayout = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className='loginnav'
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <img src={logo} className='logonav' alt='logo' />
      </Header>
      <br />
      <br />
      <br />

      <Content style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </Content>
      <Footer style={{ alignSelf: "center" }}>
        ©Possibillion Software Technologies, {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default LoginLayout;
