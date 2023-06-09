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
import AddToys from "../Pages/Toys/AddToys";
import EditToys from "../Pages/Toys/EditToys";
import MyToys from "../Pages/Toys/MyToys";

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
            path: '/addtoy',
            element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
            path: '/toy/:id',
            element:<PrivateRoute><ToyCardDetails></ToyCardDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://playday-server-farhansadik007.vercel.app/toy/${params.id}`)
        },
        {
            path: '/mytoys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
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
        },
        {
            path: '/edit/:id',
            element: <PrivateRoute><EditToys></EditToys></PrivateRoute>,
            loader: ({params}) => fetch(`https://playday-server-farhansadik007.vercel.app/toy/${params.id}`)
        }
      ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
  ]);

  
  export default router;