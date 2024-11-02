
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
    ])

export default Routes;