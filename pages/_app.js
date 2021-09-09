import NavBar from "../components/NavBar";
import "../styles/globals.css";
import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const toggle = () => {
  // this.setState({
  //   collapsed: !this.state.collapsed,
  // });
  console.log("toggle clicked.");
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(false ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 650,
          }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyApp;
