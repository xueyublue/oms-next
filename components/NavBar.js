import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  UnorderedListOutlined,
  ColumnHeightOutlined,
  ProjectOutlined,
  OneToOneOutlined,
  LineChartOutlined,
  DatabaseOutlined,
  IdcardOutlined,
  TeamOutlined,
  ApartmentOutlined,
  SolutionOutlined,
  DashboardOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  MacCommandFilled,
  TableOutlined,
} from "@ant-design/icons";

import { useState } from "react";

const { SubMenu } = Menu;
const { Sider } = Layout;

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["instance-details"]}>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <SubMenu key="instance" icon={<UnorderedListOutlined />} title="Instance">
          <Menu.Item key="instance-details" icon={<UnorderedListOutlined />}>
            Details
          </Menu.Item>
          <Menu.Item key="instance-sga" icon={<PieChartOutlined />}>
            SGA
          </Menu.Item>
          <Menu.Item key="instance-banners" icon={<OneToOneOutlined />}>
            Banners
          </Menu.Item>
          <Menu.Item key="instance-resource-limit" icon={<ColumnHeightOutlined />}>
            Resource Limit
          </Menu.Item>
          <Menu.Item key="instance-oracle-param" icon={<ProjectOutlined />}>
            Parameters
          </Menu.Item>
        </SubMenu>
        <SubMenu key="performance" icon={<LineChartOutlined />} title="Performance">
          <Menu.Item key="performance" icon={<LineChartOutlined />}></Menu.Item>
        </SubMenu>
        <SubMenu key="space" icon={<DatabaseOutlined />} title="Space">
          <Menu.Item key="space-tablespace" icon={<MacCommandFilled />}>
            Tablespace
          </Menu.Item>
          <Menu.Item key="space-top-tables" icon={<OrderedListOutlined />}>
            Top Tables
          </Menu.Item>
          <Menu.Item key="space-top-indexes" icon={<OrderedListOutlined />}>
            Top Indexes
          </Menu.Item>
          <Menu.Item key="space-table-records" icon={<TableOutlined />}>
            Table Records
          </Menu.Item>
        </SubMenu>
        <SubMenu key="session" icon={<ApartmentOutlined />} title="Session">
          <Menu.Item key="session-" icon={<ApartmentOutlined />}>
            Session
          </Menu.Item>
        </SubMenu>
        <SubMenu key="user" icon={<UserOutlined />} title="User">
          <Menu.Item key="user-profiles" icon={<SolutionOutlined />}>
            Profiles
          </Menu.Item>
          <Menu.Item key="user-roles" icon={<TeamOutlined />}>
            Roles
          </Menu.Item>
          <Menu.Item key="user-roles-priv" icon={<IdcardOutlined />}>
            Role Privileges
          </Menu.Item>
          <Menu.Item key="user-users" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="user-user-priv" icon={<IdcardOutlined />}>
            User Privileges
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavBar;
