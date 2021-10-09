import React from "react";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Tooltip,
  Button,
  Dropdown,
  Menu,
  message,
} from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Profile
    </Menu.Item>
    <Menu.Item key="2" icon={<SettingOutlined />}>
      Settings
    </Menu.Item>
    <Menu.Item key="3" icon={<LogoutOutlined />}>
      Logout
    </Menu.Item>
  </Menu>
);

const AppBar = () => {
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
            <Button type="text" icon={<UserOutlined />}>
              Serati Ma
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default AppBar;
