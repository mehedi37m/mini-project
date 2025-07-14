import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <div >
        <div className="">
          <RouterProvider router={Router} />
        </div>
      </div>
    
  </StrictMode>
);
