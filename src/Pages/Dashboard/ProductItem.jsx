import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const ProductItem = ({product, handleDeleteProduct}) => {
  const { user, userId, role } = useContext(AuthContext);
  

    const {id,product_image, product_name, category, brand, price, unit, qty, sku ,quantity}  = product;
    return (
        
            <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={`https://devcl.onrender.com/${product_image}`}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product_name}</div>
            </div>
          </div>
        </td>
        <td>
            {sku}
          
        </td>
        <td>{category}</td>
        <td>{brand}</td>
        <td>{price}</td>
        <td>{unit}</td>
        <td>{quantity}</td>
        {
          role == 'Admin' && 
          <th className=''>
          <Link to={`updateproduct/${id}`}>
            <button className="btn btn-ghost btn-xs text-base"><i className="fa-solid fa-pen"></i></button>
            </Link>
          
          <button className="btn btn-ghost btn-xs text-base" onClick={()=>handleDeleteProduct(id)}><i className="fa-solid fa-trash-can"></i></button>
        </th>
        
      
        }
        
      </tr>
        
    );
};

export default ProductItem;