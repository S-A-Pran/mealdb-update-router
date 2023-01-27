import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category/Category";
import Home from "../components/home/Home";
import Meals from "../components/Meals/Meals";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
          );
        },
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
          );
        },
        element: <Home></Home>,
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
      },
      {
        path: "/category/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`
          );
        },
        element: <Category></Category>,
      },
    ],
  },
]);
