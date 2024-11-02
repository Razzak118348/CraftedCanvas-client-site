
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import AddArtAndCraft from "../Pages/AddArtAndCraft/AddArtAndCraft";
import Login from "../Pages/Login/Login";
import Signup from "../SignUp/SignUp";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allArtCraft',
                element:<AddArtAndCraft></AddArtAndCraft>
            },
            {
path:'/login',
element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    }
    ])

export default Routes;