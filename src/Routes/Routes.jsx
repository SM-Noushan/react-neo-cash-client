import { createBrowserRouter } from "react-router-dom";
import Overview from "../Pages/Common/Overview";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        // index: true,
        path: "dashboard",
        element: <Overview />,
      },
    ],
  },
]);

export default router;
