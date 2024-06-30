import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../LayOut/DashboardLayout";
import ProductList from "../Pages/Dashboard/ProductList";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AddCategory from "../Pages/Dashboard/AddCategory";
import DashboardRole from "../Pages/Dashboard/DashboardRole";
import AddBrand from "../Pages/Dashboard/AddBrand";
import AddSubCategory from "../Pages/Dashboard/AddSubCategory";
import Login from "../Pages/Login.jsx/Login";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SellerSignUp from "../Pages/SignUp/SellerSignUp.jsx";




export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        
        {
            path:'/',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
            path:'sellersignup',
            element:<SellerSignUp></SellerSignUp>
        },
        {
            path:'/dashboard',
            element:<DashboardLayout></DashboardLayout>,
            children:[
                // {
                //     path:'dashboard',
                //     element:<DashboardRole></DashboardRole>
                // },
                {
                    path:'dashboard/dashboard',
                    element:<Dashboard></Dashboard>
                },
                {
                    path:'dashboard/productlist',
                    element:<ProductList></ProductList>
                },
                {
                    path:'dashboard/addproduct',
                    element:<PrivateRoutes><AddProduct></AddProduct></PrivateRoutes> 
                },
                {
                    path:'dashboard/addcategory',
                    element:<PrivateRoutes><AddCategory></AddCategory></PrivateRoutes> 
                },
                {
                    path:'dashboard/addsubcategory',
                    element:<PrivateRoutes><AddSubCategory></AddSubCategory></PrivateRoutes> 
                },
                {
                    path:'dashboard/addbrand',
                    element:<PrivateRoutes><AddBrand></AddBrand></PrivateRoutes> 
                },
                {
                    path:'dashboard/productlist/updateproduct/:id',
                    element:<PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                    loader: ({params}) => fetch(`https://devcl.onrender.com/api/v1/product/${params.id}/`)
                },
            ]
        }
    ]
    }
])