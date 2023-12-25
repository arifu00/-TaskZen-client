import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import AuthProviders from "./Providers/AuthProviders";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Layout/Dashboard";
import Profile from "./Pages/Dashboard_Pages/Profile/Profile";
import CreateTask from "./Pages/Dashboard_Pages/CreateTask/CreateTask";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllTasks from "./Pages/Dashboard_Pages/AllTasks/AllTasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "all-task",
        element: (
          <PrivateRoute>
            <AllTasks></AllTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "create-task",
        element: (
          <PrivateRoute>
            <CreateTask></CreateTask>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-task",
        element: <PrivateRoute></PrivateRoute>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>
);
