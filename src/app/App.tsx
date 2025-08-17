import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";
import "./App.css";
import "../shared/constants/fonts/fonts.ts";
import { GlobalLoading } from "../pages/GlobalLoading/GlobalLoading.tsx";
import React, { useEffect, useState } from "react";
import Content from "./Content/Content.tsx";
import CatalogPage from "../pages/Catalogue/Catalogue.tsx";
import Page404 from "../pages/Page404/Page404.tsx";
import FurniturePage from "../pages/FurniturePage/FurniturePage.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/catalogue",
//     element: <Catalogue />,
//   },
// ]);

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: `/product/:id`,
    element: <FurniturePage />,
  },
];

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        {loading && <GlobalLoading />}{" "}
        <Routes>
          <Route path="/" element={<Content />}>
            <>
              {routes.map((item, index) => (
                <Route
                  key={`${item.path}-${index}`}
                  path={item.path}
                  element={item.element}
                />
              ))}

              <Route path="*" element={<Page404 />} />
            </>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
