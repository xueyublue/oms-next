import React from "react";
import { Layout, Row, Col, Button, Dropdown, Menu, Modal, Badge, Tag, Alert } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  BellOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
import Router from "next/router";
import { useState } from "react";
import * as Constants from "../util/constants";

const AppBar = ({ pageName }) => {
  const [logoutModalVisiable, setLogoutModalVisiable] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === "profile") Router.push(Constants.ROUTE_PROFILE);
    else if (e.key === "settings") Router.push(Constants.ROUTE_SETTINGS);
    else if (e.key === "logout") setLogoutModalVisiable(true);
  };

  const notifications = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Alert
          message="Occupancy of tablespace [SYSAUX, WMS_LARGE] are more than 80%. Please extend them."
          type="warning"
          showIcon
        />
      </Menu.Item>
      <Menu.Item key="2">
        <Alert message="Host CPU usage more than 80%. Please take necessary actions." type="warning" showIcon />
      </Menu.Item>
      <Menu.Item key="3">
        <Alert message="The setting was made." type="success" showIcon />
      </Menu.Item>
    </Menu>
  );

  const userMenu = (
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
          <h3>{pageName}</h3>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="text" icon={<QuestionCircleOutlined />} />
          <Dropdown overlay={notifications}>
            <Badge size="small" count={2} offset={[-4, 8]}>
              <Button type="text" icon={<BellOutlined />} />
            </Badge>
          </Dropdown>
          <Dropdown overlay={userMenu}>
            <Button type="text" icon={<UserOutlined />}>
              DMS IS Team DEV
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Modal
        title="Confirmation"
        visible={logoutModalVisiable}
        onOk={() => {
          setLogoutModalVisiable(false);
          Router.push(Constants.ROUTE_LOGIN);
        }}
        onCancel={() => setLogoutModalVisiable(false)}
        okText="Yes"
        cancelText="No"
      >
        Are you sure to logout?
      </Modal>
    </Header>
  );
};

export default AppBar;
