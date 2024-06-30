import axios from 'axios';
import { Link } from 'react-router-dom';
import signup from "../../assets/images/signup.jpg"

const SellerSignUp = () => {
    const handleSignUp = async(event) =>{
        event.preventDefault();
        const username = event.target.username.value;
        const first_name = event.target.first_name.value;
        const last_name = event.target.last_name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm_password = event.target.confirm_password.value;
        const usersignup = {username, first_name, last_name, email, password, confirm_password}
        // console.log('Helo->', username, password);
        
        const signup_seller = "https://devcl.onrender.com/api/v1/auth_user/register/seller/";
    
     
      await axios.post(signup_seller,
        usersignup)
            .then((response) => {
                console.log(response.data); 
              
                
              })
              .catch((error) =>{
                console.log(error);
              });
    
      }
    return (
        <div className="hero min-h-screen bg-white w-4/5 mx-auto">
  <div className="hero-content flex justify-between lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
        <h4 className='text-center font-bold text-2xl'>SignUp Seller</h4>
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name='username' placeholder="usernamme" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name='first_name' placeholder="first name" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" name='last_name' placeholder="last name" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='confirm_password' placeholder="confirmPassword" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <p className='text-center mb-4'><Link to='/signup'>Become a Customer</Link>? <Link to='/'>Login</Link></p>
    </div>
    <div className="text-center lg:text-left">
      <img src={signup} alt="" />
    </div>
  </div>
</div>
    );
};

export default SellerSignUp;