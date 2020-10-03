import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, SimpleLayout } from "./layouts";

// Route Views
import Dashboard from "./views/dashboard/Dashboard";
import First from "./views/home/home";
import Edit from "./views/edit/Edit";
export default {
  LoggedIn: [
    {
      path: "/",
      exact: true,
      layout: DefaultLayout,
      component: () => <Redirect to="/dashboard" />,
    },
    {
      path: "/dashboard",
      layout: DefaultLayout,
      component: Dashboard,
    },
    // {
    //   path: "/logout",
    //   layout: SimpleLayout,
    //   component: Logout,
    // },
  ],
  NotLoggedIn: [
    {
      path: "/",
      layout: SimpleLayout,
      component: First,
    },
  ],
  test: [
    {
      path: "/",
      exact: true,
      layout: SimpleLayout,
      component: First,
    },
    {
      path: "/dashboard",
      layout: DefaultLayout,
      component: Dashboard,
    },
    {
      path: "/edit",
      layout: DefaultLayout,
      component: Edit,
    },
  ],
};
