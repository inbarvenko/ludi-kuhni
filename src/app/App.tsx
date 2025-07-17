import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";
import "./App.css";
import "../shared/constants/fonts/fonts.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
