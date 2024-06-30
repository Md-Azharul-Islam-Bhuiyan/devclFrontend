import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";



const ProductList = () => {
  const { user, userId, role } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',products)
    
    useEffect(()=>{
     
        fetch('https://devcl.onrender.com/api/v1/product/')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)

        })
        .catch((err) => {
            console.log(err);
        });
    },[]);


    const handleDeleteProduct=async(id)=>{
    
      await axios.delete(`https://devcl.onrender.com/api/v1/product/${id}/`)
        .then((response) => {
          //   console.log(response.data); 
            const productAfterDelete =  products.filter(product => product.id !== id)
            setProducts(productAfterDelete)
            
          })
          .catch((error) =>{
            console.log(error);
          });
    }

    const handleSearch = async (event) => {
      event.preventDefault();
      
      const searchProduct = event.target.search_product.value;
      
      fetch(`https://devcl.onrender.com/api/v1/product/?search=${searchProduct}`)
      .then(res=>res.json())
      .then(data=>{
          setProducts(data)

      })
      .catch((err) => {
          console.log(err);
      });
    }
  
    return (
        <div>



<div className="hero bg-white-200 min-h-screen">
  <div className="hero-content w-full h-full">
   
    <div className="bg-white-100 w-full shrink-0 border h-full m-6">
    <div className="my-6">
    <form className="card-body" onSubmit={handleSearch}>
        <div className="flex">
        <div className="form-control">
          <input type="text" placeholder="Search..." name="search_product" className="input input-bordered bg-white" required />
        </div>
    
        
    <div className="form-control">
          <button className="btn btn-warning">Search</button>
          
        </div>
        </div>
        
      </form>
            </div>
            <div className="overflow-x-auto text-black">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product Name</th>
        <th>SKU</th>
        <th>Category</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Unit</th>
        <th>Qty</th>
        {
          role == 'Admin'  && <th>Action</th>
          
        
        }
        
        
      </tr>
    </thead>
    <tbody>
        {
          products.map((product)=><ProductItem 
          key={product.id}
          product={product}
          handleDeleteProduct={handleDeleteProduct}
          
          ></ProductItem>)
        }
    
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
        </div>
        </div>
      




          
        </div>
    );
};

export default ProductList;