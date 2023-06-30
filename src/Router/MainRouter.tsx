import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import Andela from "../Pages/Andela";
import AndelaExperts from "../Pages/AndelaExperts";
import AndelaEnterprise from "../Pages/AndelaEnterprise";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Andela />,
      },
      {
        index: true,
        path: "experts",
        element: <AndelaExperts />,
      },
      {
        index: true,
        path: "enterprise",
        element: <AndelaEnterprise />,
      },
    ],
  },
]);
