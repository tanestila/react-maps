import "antd/dist/antd.css";
import "./App.css";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Main } from "./Pages/Main";
import { Switch, Route, Redirect } from "react-router-dom";
import { useCallback, useState, Suspense, lazy } from "react";

const UserLayout = lazy(() => import("./Pages/Layout"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onChangeAuth = useCallback((isAuth) => {
    setIsAuthenticated(isAuth);
  }, []);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login">
          <Login
            isAuthenticated={isAuthenticated}
            onChangeAuth={onChangeAuth}
          />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/lab">
          {isAuthenticated ? (
            <UserLayout onChangeAuth={onChangeAuth} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/*">404</Route>
      </Switch>
    </Suspense>
  );
}

export default App;
