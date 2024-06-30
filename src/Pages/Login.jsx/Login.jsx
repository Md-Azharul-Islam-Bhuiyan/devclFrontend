import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import loginimg from "../../assets/images/login.jpg"

const Login = () => {
    const { setUser, setUserId, setRole } = useContext(AuthContext);

        let navigate = useNavigate();
        let location = useLocation();
        let from = location.state?.from?.pathname || "/";
    
  
    
        const handleLogin = async (event) => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
    
            const loginUser = { email, password };
    
            const loginUrl = "https://devcl.onrender.com/api/v1/auth_user/login/";
    
            try {
                const response = await fetch(loginUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginUser),
                });
    
                const data = await response.json();
            
    
                if (data.token.access) {
                    localStorage.setItem("token", data.token.access);
                    const decodedToken = jwtDecode(data.token.access);
                    // console.log('>>>>>>>>>>>',decodedToken.username);
                
                    setUser(decodedToken.username);
                    setUserId(decodedToken.id);
                    setRole(decodedToken.role);
                    // navigate(from, { replace: true });
                    navigate('/dashboard');
                } else {
                    localStorage.setItem("token", null);
                    
                }
            } catch (err) {
                console.log(err);
            }
        };
    
        return (
            <div className="hero min-h-screen bg-white w-4/5 mx-auto">
                <div className="hero-content flex justify-between lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
                        <form onSubmit={handleLogin} className="card-body">
                            <h4 className='text-center font-bold text-2xl'>Login</h4>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered bg-white"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered bg-white"
                                    required
                                />
                                <label className="label">
                                    <Link to="/resetpassemail" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center pb-3'>
                            Register? <Link to="/signup">Create an Account</Link>
                        </p>
                    </div>
                    <div className="text-center lg:text-left">
                        <img src={loginimg} alt="" />
                    </div>
                </div>
            </div>
        );
};

export default Login;