import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import NotFound from "./pages/notFound.tsx";
import Projects from "./pages/projects.tsx";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import Layout from "./layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/about",
        element: <Layout PageElement={About} />,
      },
      {
        path: "/projects",
        element: <Layout PageElement={Projects} />,
      },
      {
        path: "/contact",
        element: <Layout PageElement={Contact} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
