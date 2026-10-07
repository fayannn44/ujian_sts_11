import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/pageLayouts";
import Home from "../pages/home";
import About from "../pages/about";
import Detail from "../pages/detail";
import NotFound from "../pages/notFound";
import FAQ from "../pages/faq";
import Testimony from "../pages/testimony";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/testimony",
        element: <Testimony />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;