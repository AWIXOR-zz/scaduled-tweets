import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";

import routes from "./routes";
function App() {
  return (
    <Switch>
      {routes.test.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={(props) => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            }}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
