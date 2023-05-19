import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Common/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {

        }
      ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
  ]);

  
  export default router;