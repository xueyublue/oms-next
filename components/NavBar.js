import React from "react";
import Link from "next/link";
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
  OrderedListOutlined,
  MacCommandFilled,
  TableOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import * as Constants from "../util/constants";

const { SubMenu } = Menu;
const { Sider } = Layout;

const NavBar = () => {
  const [selectedKeys, setSelectedKeys] = useState("dashboard");
  const [openKeys, setOpenKeys] = useState(null);
  const { asPath } = useRouter();
  if (asPath !== selectedKeys) setSelectedKeys(asPath);
  if (!openKeys && asPath) {
    const lastIndex = asPath.lastIndexOf("/");
    if (lastIndex !== 0) setOpenKeys(asPath.substr(0, asPath.lastIndexOf("/")));
  }

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
      width={220}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKeys]}
        defaultSelectedKeys={["dashboard"]}
        openKeys={[openKeys]}
        onClick={(e) => {
          setSelectedKeys(e.key);
        }}
        onOpenChange={(oKeys) => {
          if (oKeys.length >= 1) {
            setOpenKeys(oKeys[oKeys.length - 1]);
          } else {
            setOpenKeys("dashboard");
          }
        }}
      >
        <Menu.Item key={Constants.ROUTE_DASHBORAD} icon={<DashboardOutlined />}>
          <Link href={Constants.ROUTE_DASHBORAD}>Dashboard</Link>
        </Menu.Item>

        <SubMenu key="/instance" icon={<DeploymentUnitOutlined />} title="Instance">
          <Menu.Item key={Constants.ROUTE_INSTANCE_DETAILS} icon={<UnorderedListOutlined />}>
            <Link href={Constants.ROUTE_INSTANCE_DETAILS}>Details</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_INSTANCE_SGA} icon={<PieChartOutlined />}>
            <Link href={Constants.ROUTE_INSTANCE_SGA}>SGA</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_INSTANCE_BANNERS} icon={<OneToOneOutlined />}>
            <Link href={Constants.ROUTE_INSTANCE_BANNERS}>Banners</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_INSTANCE_RESOURCE_LIMIT} icon={<ColumnHeightOutlined />}>
            <Link href={Constants.ROUTE_INSTANCE_RESOURCE_LIMIT}>Resource Limit</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_INSTANCE_PARAMETERS} icon={<ProjectOutlined />}>
            <Link href={Constants.ROUTE_INSTANCE_PARAMETERS}>Parameters</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="/performance" icon={<LineChartOutlined />} title="Performance">
          <Menu.Item key={Constants.ROUTE_PERFORMANCE_SESSION} icon={<LineChartOutlined />}>
            <Link href={Constants.ROUTE_PERFORMANCE_SESSION}>Session</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="/space" icon={<DatabaseOutlined />} title="Space">
          <Menu.Item key={Constants.ROUTE_SPACE_TABLESPACE} icon={<MacCommandFilled />}>
            <Link href={Constants.ROUTE_SPACE_TABLESPACE}>Tablespace</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_SPACE_TOP_TABLES} icon={<OrderedListOutlined />}>
            <Link href={Constants.ROUTE_SPACE_TOP_TABLES}>Top Tables</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_SPACE_TOP_INDEXES} icon={<OrderedListOutlined />}>
            <Link href={Constants.ROUTE_SPACE_TOP_INDEXES}>Top Indexes</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_SPACE_TABLE_RECORDS} icon={<TableOutlined />}>
            <Link href={Constants.ROUTE_SPACE_TABLE_RECORDS}>Table Records</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="/user" icon={<UserOutlined />} title="User">
          <Menu.Item key={Constants.ROUTE_USER_PROFILES} icon={<SolutionOutlined />}>
            <Link href={Constants.ROUTE_USER_PROFILES}>Profiles</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_USER_ROLES} icon={<TeamOutlined />}>
            <Link href={Constants.ROUTE_USER_ROLES}>Roles</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_USER_ROLE_PRIVILEGES} icon={<IdcardOutlined />}>
            <Link href={Constants.ROUTE_USER_ROLE_PRIVILEGES}>Role Privileges</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_USER_USERS} icon={<UserOutlined />}>
            <Link href={Constants.ROUTE_USER_USERS}>Users</Link>
          </Menu.Item>
          <Menu.Item key={Constants.ROUTE_USER_USER_PRIVILEGES} icon={<IdcardOutlined />}>
            <Link href={Constants.ROUTE_USER_USER_PRIVILEGES}>User Privileges</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key={Constants.ROUTE_SESSION} icon={<ApartmentOutlined />}>
          <Link href={Constants.ROUTE_SESSION}>Session</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavBar;
