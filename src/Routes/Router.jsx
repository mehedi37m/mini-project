import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";

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
      ]
    }
  ]);

export default Router;