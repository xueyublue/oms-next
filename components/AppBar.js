import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const AppBar = () => {
  return (
    <Header className="site-layout-background" style={{ paddingLeft: 16 }}>
      <h3>ORACLE Monitoring System</h3>
    </Header>
  );
};

export default AppBar;
