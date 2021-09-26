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
  LogoutOutlined,
  OrderedListOutlined,
  MacCommandFilled,
  TableOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import { useRouter } from "next/dist/client/router";

const { SubMenu } = Menu;
const { Sider } = Layout;

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState("dashboard");
  const [openKeys, setOpenKeys] = useState(null);
  const { asPath } = useRouter();
  if (asPath !== selectedKeys) setSelectedKeys(asPath);
  if (!openKeys && asPath) {
    const lastIndex = asPath.lastIndexOf("/");
    if (lastIndex !== 0) setOpenKeys(asPath.substr(0, asPath.lastIndexOf("/")));
  }
  console.log(`selectedKeys: ${selectedKeys}, asPath: ${asPath}, openKeys: ${openKeys}`);

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
      width={240}
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
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
          <Link href="/dashboard">Dashboard</Link>
        </Menu.Item>

        <SubMenu key="/instance" icon={<DeploymentUnitOutlined />} title="Instance">
          <Menu.Item key="/instance/details" icon={<UnorderedListOutlined />}>
            <Link href="/instance/details">Details</Link>
          </Menu.Item>
          <Menu.Item key="/instance/sga" icon={<PieChartOutlined />}>
            <Link href="/instance/sga">SGA</Link>
          </Menu.Item>
          <Menu.Item key="/instance/banners" icon={<OneToOneOutlined />}>
            <Link href="/instance/banners">Banners</Link>
          </Menu.Item>
          <Menu.Item key="/instance/resourcelimit" icon={<ColumnHeightOutlined />}>
            <Link href="/instance/resourcelimit">Resource Limit</Link>
          </Menu.Item>
          <Menu.Item key="/instance/parameters" icon={<ProjectOutlined />}>
            <Link href="/instance/parameters">Parameters</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="/performance" icon={<LineChartOutlined />} title="Performance">
          <Menu.Item key="/performance/session" icon={<LineChartOutlined />}>
            <Link href="/performance/session">Session</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="/space" icon={<DatabaseOutlined />} title="Space">
          <Menu.Item key="/space/tablespace" icon={<MacCommandFilled />}>
            <Link href="/space/tablespace">Tablespace</Link>
          </Menu.Item>
          <Menu.Item key="/space/toptables" icon={<OrderedListOutlined />}>
            <Link href="/space/toptables">Top Tables</Link>
          </Menu.Item>
          <Menu.Item key="/space/topindexes" icon={<OrderedListOutlined />}>
            <Link href="/space/topindexes">Top Indexes</Link>
          </Menu.Item>
          <Menu.Item key="/space/tablerecords" icon={<TableOutlined />}>
            <Link href="/space/tablerecords">Table Records</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="/session" icon={<ApartmentOutlined />}>
          <Link href="/session">Session</Link>
        </Menu.Item>

        <SubMenu key="/user" icon={<UserOutlined />} title="User">
          <Menu.Item key="/user/profiles" icon={<SolutionOutlined />}>
            <Link href="/user/profiles">Profiles</Link>
          </Menu.Item>
          <Menu.Item key="/user/roles" icon={<TeamOutlined />}>
            <Link href="/user/roles">Roles</Link>
          </Menu.Item>
          <Menu.Item key="/user/roleprivileges" icon={<IdcardOutlined />}>
            <Link href="/user/roleprivileges">Role Privileges</Link>
          </Menu.Item>
          <Menu.Item key="/user/users" icon={<UserOutlined />}>
            <Link href="/user/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="/user/userprivileges" icon={<IdcardOutlined />}>
            <Link href="/user/userprivileges">User Privileges</Link>
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
