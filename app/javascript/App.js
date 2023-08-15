import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Greeting from "./components/Greeting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Greetings my dear friends</h1>,
  },

  {
    path: "/greetings/greeting",
    element: <Greeting />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);