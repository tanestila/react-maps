import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

export const HeaderMain = ({ onChangeAuth }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Header style={{ backgroundColor: "white" }}>
      <div className="logo" style={{ width: "120px", float: "left" }}>
        LOGO
      </div>
      <Menu mode="horizontal" style={{ float: "right" }}>
        <Menu.Item key={"/products"} onClick={() => scrollTo("features")}>
          Features
        </Menu.Item>
        <Menu.Item key={"/pricing"} onClick={() => scrollTo("pricing")}>
          Pricing
        </Menu.Item>
        <Menu.Item key={"/developers"} onClick={() => scrollTo("contact")}>
          Contact
        </Menu.Item>
        <Menu.Item key={"/login"}>
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>
        <Menu.Item key={"/register"}>
          <NavLink to="/register">Register</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
