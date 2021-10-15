import React from "react";
import Link from "next/link";
import Image from "next/image";
import "antd/dist/antd.css";
import { Layout, Menu, Switch } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  UnorderedListOutlined,
  ColumnHeightOutlined,
  ProjectOutlined,
  OneToOneOutlined,
  LineChartOutlined,
  IdcardOutlined,
  TeamOutlined,
  SolutionOutlined,
  OrderedListOutlined,
  MacCommandFilled,
  TableOutlined,
} from "@ant-design/icons";
import { MdOutlineStorage, MdOutlineDashboard, MdLightMode, MdDarkMode } from "react-icons/md";
import { FcComboChart, FcMindMap, FcBusinessman } from "react-icons/fc";

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
        backgroundColor: "white",
      }}
      width={220}
    >
      <div className="logo">
        <Image src="/logo-light.png" alt="me" width="220" height="40" />
      </div>
      <Menu
        //theme="dark"
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
        <Menu.Item key={Constants.ROUTE_DASHBORAD} icon={<MdOutlineDashboard size={20} />}>
          <Link href={Constants.ROUTE_DASHBORAD}>Dashboard</Link>
        </Menu.Item>

        <SubMenu key="/instance" icon={<FcMindMap size={20} />} title="Instance">
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

        <SubMenu key="/performance" icon={<FcComboChart size={20} />} title="Performance">
          <Menu.Item key={Constants.ROUTE_PERFORMANCE_SESSION} icon={<LineChartOutlined />}>
            <Link href={Constants.ROUTE_PERFORMANCE_SESSION}>Session</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="/space" icon={<MdOutlineStorage size={20} />} title="Space">
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

        <SubMenu key="/user" icon={<FcBusinessman size={20} />} title="User">
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
      </Menu>
      <div style={{ textAlign: "center" }}>
        <Switch
          checkedChildren={<MdDarkMode />}
          unCheckedChildren={<MdDarkMode />}
          onChange={(mode) => {
            console.log(`Switch to ${mode}`);
          }}
        />
      </div>
    </Sider>
  );
};

export default NavBar;
