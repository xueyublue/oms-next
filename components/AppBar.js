import React from "react";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Button,
  Dropdown,
  Menu,
  Modal,
} from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
import Router from "next/router";
import { useState } from "react";

const AppBar = () => {
  const [logoutModalVisiable, setLogoutModalVisiable] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === "profile") Router.push("/profile");
    else if (e.key === "settings") Router.push("/settings");
    else if (e.key === "logout") setLogoutModalVisiable(true);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ paddingLeft: 16 }}>
      <Row justify="start">
        <Col span={12}>
          <Breadcrumb style={{ margin: "20px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Profiles</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Dropdown overlay={menu}>
            <Button
              type="text"
              icon={<UserOutlined />}
              style={{ backgroundColor: "#D3CFE0", opacity: 0.9 }}
            >
              DMS IS Team
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Modal
        title="Confirmation"
        visible={logoutModalVisiable}
        onOk={() => {
          setLogoutModalVisiable(false);
          Router.push("/login");
        }}
        onCancel={() => setLogoutModalVisiable(false)}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure to logout?</p>
      </Modal>
    </Header>
  );
};

export default AppBar;
