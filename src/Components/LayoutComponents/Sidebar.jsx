import { useState } from "react";
import {
  SettingOutlined,
  PieChartOutlined,
  CompassOutlined,
  LockOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;

export const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const onCollapse = (value) => {
    setCollapsed(value);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo">LOGO</div>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/lab" icon={<PieChartOutlined />}>
          <NavLink to="/lab">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="/lab/api_keys" icon={<LockOutlined />}>
          <NavLink to="/lab/api_keys">API keys</NavLink>
        </Menu.Item>
        <Menu.Item key="/lab/maps" icon={<CompassOutlined />}>
          <NavLink to="/lab/maps">Maps</NavLink>
        </Menu.Item>
        <Menu.Item key="/lab/billing" icon={<WalletOutlined />}>
          <NavLink to="/lab/billing">Billing</NavLink>
        </Menu.Item>
        <Menu.Item key="/lab/setting" icon={<SettingOutlined />}>
          <NavLink to="/lab/setting">Settings</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
