import { Layout } from "antd";
import { HeaderLayout } from "../Components/LayoutComponents/Header";
import { FooterLayout } from "../Components/LayoutComponents/Footer";
import { SidebarLayout } from "../Components/LayoutComponents/Sidebar";
import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const { Content } = Layout;

const APIKeys = lazy(() => import("../Views/APIKeys"));
const Dashboard = lazy(() => import("../Views/Dashboard"));
const Maps = lazy(() => import("../Views/Maps"));
const Account = lazy(() => import("../Views/Account"));

const UserLayout = ({ onChangeAuth }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarLayout />
      <Layout className="site-layout">
        <HeaderLayout onChangeAuth={onChangeAuth} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                <Route path="/lab/api_keys">
                  <APIKeys />
                </Route>
                <Route path="/lab/maps">
                  <Maps />
                </Route>
                <Route path="/lab/account">
                  <Account />
                </Route>
                <Route path="/lab">
                  <Dashboard />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
};
export default UserLayout;
