import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Common/ErrorPage";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Toys from "../Pages/Toys/Toys";
import ToyCardDetails from "../Pages/Toys/ToyCardDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/toys',
            element: <Toys></Toys>
        },
        {
            path: '/toy/:id',
            element:<PrivateRoute><ToyCardDetails></ToyCardDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
  ]);

  
  export default router;