import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router";

import NavBar from "../pages/NavBar";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";

export default function PageRouter() {
    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}