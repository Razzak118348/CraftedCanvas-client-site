
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
import CraftDetails from "../Pages/CraftDetails/CraftDetails";
import Update from "../Pages/Update/Update";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://crafted-canvas-server-fg3y9spc1-abdur-razzaks-projects.vercel.app/allcraft')
            },
            {
                path: '/allArtCraft',
                element: <AllArtandCraft></AllArtandCraft>,
                loader: () => fetch('https://crafted-canvas-server-fg3y9spc1-abdur-razzaks-projects.vercel.app/allcraft'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/addCraft',
                element: <PrivetRout children={<AddArtAndCraft></AddArtAndCraft>}></PrivetRout>
            },
            {
                path: '/myArtCraft',
                element: <MyArtAndCraft></MyArtAndCraft>,

            },
            {
                path:'/craftDetails/:id',
                element:<PrivetRout> <CraftDetails></CraftDetails> </PrivetRout>,
                loader: ({params}) => fetch(`https://crafted-canvas-server-fg3y9spc1-abdur-razzaks-projects.vercel.app/allCraft/${params.id}`)

            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params}) => fetch(`https://crafted-canvas-server-fg3y9spc1-abdur-razzaks-projects.vercel.app/allCraft/${params.id}`)
            }
        ]
    }
])

export default Routes;