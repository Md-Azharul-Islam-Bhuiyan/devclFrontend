import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import ProductList from "./ProductList";
import Login from "../Login.jsx/Login";


const Dashboard = () => {
  const { user, userId, role } = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
        
           <Outlet></Outlet>
        
          
            
          
        </div>
        <div className="drawer-side border">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-white-200 text-base-content min-h-full w-60 p-4">
            
          {
            (role === 'Admin' || role === 'SELLER') && 
            <>
            <li><Link to='dashboard/productlist'>ProductList</Link></li>
            <li><Link to='dashboard/addproduct'>Add Product</Link></li>
            </>
          }

          {
            role === 'Admin' && 
            <>
            <li><Link to='dashboard/addcategory'>Add Category</Link></li>
            <li><Link to='dashboard/addsubcategory'>Add Sub Category</Link></li>
            <li><Link to='dashboard/addbrand'>Add Brand</Link></li>
            </>
          }
            

            
            
              
            
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;