
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import AddArtAndCraft from "../Pages/AddArtAndCraft/AddArtAndCraft";
import Login from "../Pages/Login/Login";
import Signup from "../SignUp/SignUp";
import AllArtandCraft from "../Pages/AllArtandCraft/AllArtandCraft";
import PrivetRout from "./PrivateRout";
import MyArtAndCraft from "../Pages/MyArtAndCraft/MyArtAndCraft";

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
                element:<AllArtandCraft></AllArtandCraft>
            },
            {
path:'/login',
element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/addCraft',
                element:<PrivetRout children={<AddArtAndCraft></AddArtAndCraft>}></PrivetRout>
            },
            {
                path:'/myArtCraft',
                element:<MyArtAndCraft></MyArtAndCraft>
            }
        ]
    }
    ])

export default Routes;