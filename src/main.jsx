import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "@pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MovieDetailPage from "@pages/MovieDetailPage.jsx";
import RootLayout from "@pages/RootLayout.jsx";
import TVShowDetailPage from "@pages/TVShowDetailPage.jsx";
import ModalProvider from "@components/context/ModalProvider.jsx";
import PeopleDetailPage from "@pages/PeopleDetailPage.jsx";
const MovieDetailPage = lazy(() => import("@pages/MovieDetailPage.jsx"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetailPage />,
      },
      {
        path: "/people/:id",
        element: <PeopleDetailPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router} />
  </ModalProvider>,
);
