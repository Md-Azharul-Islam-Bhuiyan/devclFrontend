import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const { user, userId } = useContext(AuthContext);
    const product = useLoaderData();
    const navigate = useNavigate();
    const {id,product_image, product_name, category, brand, price, unit, sku ,quantity, sub_category, minimum_quantity, description, tax, status, discount}  = product;
    
    const [categories, setCategories]=useState([]);
    const [subCategories, setSubCategories]=useState([]);
    const [brands, setBrands]=useState([]);
    const [image, setImage] = useState(product_image);
  
    // console.log(image)
        const handleProductSubmit = (event) => {
          event.preventDefault();
          
          let form_data = new FormData();
          form_data.append('product_name', event.target.product_name.value);
          form_data.append('category', event.target.category.value);
          form_data.append('sub_category', event.target.sub_category.value);
          form_data.append('brand', event.target.brand.value);
          form_data.append('unit', event.target.unit.value);
          form_data.append('sku', event.target.sku.value);
          form_data.append('minimum_qty', event.target.minimum_qty.value);
          form_data.append('quantity', event.target.quantity.value);
          form_data.append('description', event.target.description.value);
          form_data.append('tax', event.target.tax.value);
          form_data.append('discount', event.target.discount.value);
          form_data.append('price', event.target.price.value);
          form_data.append('status', event.target.status.value);
          form_data.append('product_image', image);
          form_data.append('seller', userId);
          // console.log(form_data);
  
          let url = `https://devcl.onrender.com/api/v1/product/${id}/`;
          
          
          axios.put(url, form_data,
            {
              headers: {
                'content-type': 'multipart/form-data'
              }
            }
          )
              .then(res => {
                console.log(res.data);
              
              })
              .catch(err => console.log(err))


            
        };
    
        const handleImageChange = (e) => {
          const product_image = e.target.files[0];
          console.log(product_image)
          setImage(product_image)
        
        };
  
    useEffect(()=>{
      const categoryFunction=async()=>{
        await axios.get('https://devcl.onrender.com/api/v1/product/category/')
        .then((response) => {
            // console.log(response.data);
            setCategories(response.data)
            
          })
          .catch((error) =>{
            console.log(error);
          });
    }
    categoryFunction();
      const SubCategoryFunction=async()=>{
        await axios.get('https://devcl.onrender.com/api/v1/product/subcategory/')
        .then((response) => {
            // console.log(response.data);
            setSubCategories(response.data)
            
          })
          .catch((error) =>{
            console.log(error);
          });
    }
    SubCategoryFunction();
      const brandFunction=async()=>{
        await axios.get('https://devcl.onrender.com/api/v1/product/brand/')
        .then((response) => {
            // console.log(response.data);
            setBrands(response.data)
            
          })
          .catch((error) =>{
            console.log(error);
          });
    }
    brandFunction();
    },[]);

   
  
    
   
      return (
          <div>
              <h1>Product Update</h1>
              <p>Update the product</p>
              <div className="hero bg-white-200">
    <div className="hero-content w-full h-full">
     
      <div className="bg-white-100 w-full shrink-0 border h-full m-6">
        <form className="card-body" onSubmit={handleProductSubmit}>
          <div className="flex">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input type="text" placeholder="Product Name" name="product_name" defaultValue={product_name} className="input input-bordered bg-white" required />
          </div>
          <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">Category</span>
  
    </div>
    <select className="select select-bordered bg-white" name='category' defaultValue={category}>
      {
        categories.map((category) => <option value={category.id} key={category.id}>{category.name}</option>)
      }
    </select>
    
  </label>
  <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">Sub Category</span>
  
    </div>
    <select className="select select-bordered bg-white" name='sub_category' defaultValue={sub_category}>
    {
        subCategories.map((subCategory) => <option value={subCategory.id} key={subCategory.id}>{subCategory.name}</option>)
      }
    </select>
    
  </label>
  <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">Brand</span>
  
    </div>
    <select className="select select-bordered bg-white" name="brand" defaultValue={brand}>
    {
        brands.map((brand) => <option value={brand.id} key={brand.id}>{brand.name}</option>)
      }
    </select>
    
  </label>
          </div>
          <div className="flex">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Unit</span>
            </label>
            <input type="text" placeholder="Unit" name="unit" defaultValue={unit} className="input input-bordered bg-white" required />
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">SKU</span>
            </label>
            <input type="text" placeholder="SKU" name="sku" defaultValue={sku} className="input input-bordered bg-white" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum Qty</span>
            </label>
            <input type="number" placeholder="Minimum Qty" defaultValue={minimum_quantity} name="minimum_qty" className="input input-bordered bg-white" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input type="number" placeholder="Quantity" defaultValue={quantity} name="quantity" className="input input-bordered bg-white" required />
          </div>
        
          </div>
  
          <label className="form-control">
    <div className="label">
      <span className="label-text">Description</span>
  
    </div>
    <textarea className="textarea textarea-bordered h-24 bg-white" defaultValue={description} placeholder="Description" name="description"></textarea>
  </label>
  
  <div className="flex">
         
          <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">Tax</span>
  
    </div>
    <select className="select select-bordered bg-white" name="tax" defaultValue={tax}>
      
      <option value='SHIPPING'>Shipping</option>
      <option value="VAT">VAT</option>
      
    </select>
    
  </label>
  
  <div className="form-control">
            <label className="label">
              <span className="label-text">Discount</span>
            </label>
            <input type="number" placeholder="0.00" name="discount" defaultValue={discount} className="input input-bordered bg-white" required />
          </div>
  
  
  <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number" placeholder="Price" name="price" defaultValue={price} className="input input-bordered bg-white" required />
          </div>
  
  <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">Status</span>
  
    </div>
    <select className="select select-bordered bg-white" defaultValue={status} name="status">
      
      <option value='STOCK'>Stock</option>
      <option value='UNAVAILABLE'>Unavailable</option>
      <option value='UPCOMMING'>Up Comming</option>
      
    </select>
    
  </label>
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input 
            className="input input-bordered bg-white"
            type="file"
            accept="image/*" 
            id="image"
            name="image"
            onChange={handleImageChange}
        />
          </div>
         
  
  
          
          <div className="form-control mt-6 mr-5">
            <button className="btn btn-warning">Submit</button>
          </div>
          
          
          
        </form>
      </div>
    </div>
  </div>
          </div>
      );
};

export default UpdateProduct;