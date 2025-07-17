import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import ProjectMain from "../Home/Project/ProjectMain";
import TopTeacher from "../Home/TopTeacher/TopTeacher";
import Contact from "../Components/Contact/Contact";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/project",
            element:<ProjectMain></ProjectMain>
        },
        {
            path: "/service",
            element:<TopTeacher></TopTeacher>
        },
        {
            path: "/contact",
            element:<Contact></Contact>
        },
      ]
    }
  ]);

export default Router;