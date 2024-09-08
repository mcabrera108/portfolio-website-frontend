import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default Router;
