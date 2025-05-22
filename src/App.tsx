import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App