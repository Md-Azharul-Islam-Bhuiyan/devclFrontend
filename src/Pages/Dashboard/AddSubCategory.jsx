import axios from "axios";


const AddSubCategory = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const name = event.target.sub_category_name.value;
    

    const subCategoryData = {name};
    console.log(subCategoryData);

    await axios.post('https://devcl.onrender.com/api/v1/product/subcategory/', subCategoryData)
        .then((response) => {
            console.log(response); 
            
            
          })
          .catch((error) =>{
            console.log(error);
          });
    
  }
    return (
        <div>
            <h1>Sub Category Add</h1>
            <p>Create new sub category</p>

            <div className="hero bg-white-200">
  <div className="hero-content w-full h-full">
   
    <div className="bg-white-100 w-full shrink-0 border m-6">
      <form className="card-body" onSubmit={handleSubmit}>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub Category Name</span>
          </label>
          <input type="text" placeholder="Sub Category Name" name="sub_category_name" className="input input-bordered bg-white" required />
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

export default AddSubCategory;