import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Notice from "../pages/User/Notice";
import Overview from "../pages/User/Overview";
import Information from "../pages/User/Information";
import Shortener from "../pages/User/Shortener";
import Websites from "../pages/User/Websites";

const Routes = createBrowserRouter ([
    {
        path:'/',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/overview',
                element:<Overview></Overview>
            },
            {
                path:'/information',
                element:<Information></Information>
            },
            {
                path:'/shorter',
                element:<Shortener></Shortener>
            },
            {
                path:'/web_links',
                element:<Websites></Websites>
            },
            {
                path:'/notices',
                element:<Notice></Notice>
            },
        ]
    }
])

export default Routes;