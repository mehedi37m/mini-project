import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import ProjectMain from "../Home/Project/ProjectMain";

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
            path: "/service",
            element:<ProjectMain></ProjectMain>
        },
      ]
    }
  ]);

export default Router;