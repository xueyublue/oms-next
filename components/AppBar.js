import React from "react";
import { Layout, Breadcrumb } from "antd";

const { Header } = Layout;

const AppBar = () => {
  return (
    <Header className="site-layout-background" style={{ paddingLeft: 16 }}>
      <div>
        <Breadcrumb style={{ margin: "20px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Profiles</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Header>
  );
};

export default AppBar;
