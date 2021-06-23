import { MailOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useLocation, NavLink } from "react-router-dom";

const { Header } = Layout;

export const HeaderLayout = ({ onChangeAuth }) => {
  const location = useLocation();
  const handleClick = (e) => {
    if (e.key === "logout") onChangeAuth(false);
  };

  return (
    <Header className="header">
      <Menu
        theme="dark"
        onClick={handleClick}
        selectedKeys={[location.pathname]}
        mode="horizontal"
        style={{
          justifyContent: "flex-end",
        }}
      >
        <Menu.Item key="/lab/account" icon={<UserOutlined />}>
          <NavLink to="/lab/account">Account</NavLink>
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Header>
  );
};
