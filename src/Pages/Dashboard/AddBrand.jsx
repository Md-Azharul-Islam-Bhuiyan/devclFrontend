import axios from "axios";


const AddBrand = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const name = event.target.brand_name.value;
    

    const brandData = {name};
    // console.log(brandData);

    await axios.post('https://devcl.onrender.com/api/v1/product/brand/', brandData)
        .then((response) => {
            console.log(response); 
            
            
          })
          .catch((error) =>{
            console.log(error);
          });
    
  }
    return (
        <div>
        <h1>Brand Add</h1>
        <p>Create new Brand</p>

        <div className="hero bg-white-200">
<div className="hero-content w-full h-full">

<div className="bg-white-100 w-full shrink-0 border m-6">
  <form className="card-body" onSubmit={handleSubmit}>
    
    <div className="form-control">
      <label className="label">
        <span className="label-text">Brand Name</span>
      </label>
      <input type="text" placeholder="Brand Name" name="brand_name" className="input input-bordered bg-white" required />
    </div>


    
   

   
   


    <div className="flex">
    <div className="form-control mt-6 mr-5">
      <button className="btn btn-warning">Submit</button>
    </div>
    
    </div>
    
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default AddBrand;