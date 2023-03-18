import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCV from "./components/Authentication/ResumeCreation/createCV.js";
/** import all components */
import Login from './components/Authentication/Login/Login.js'
// import Username from "./components/Authentication/Login/Username";
// import Password from "./components/Authentication/Login/Password";
import Register from "./components/Authentication/Register/Register";
import Profile from "./components/UserProfile/Profile";
import Recovery from "./components/Authentication/Recovery";
import Reset from "./components/Authentication/Reset";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/HomePage/Home.js"


import Cv from "./components/Resume/cv";

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "./middleware/auth";

/** root routes */
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "/cv",
    element: <Cv></Cv>
  },

  {
    path: "/createCV",
    element: <CreateCV/>
  },
  // {
  //   path: "/",
  //   element: <Username></Username>,
  // },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/",
    element: (
        <Home></Home>
    ),
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
