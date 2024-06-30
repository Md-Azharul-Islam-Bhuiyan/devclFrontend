import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../../assets/images/profile1.png'

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  let navigate = useNavigate();
  // console.log(user)
  const handlingLogout =()=>{
    setUser(null);
    localStorage.removeItem('token');
    navigate('/');

}
    return (
        <div>
            <div className="navbar bg-sky-950">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-white">Dashboard : {user}</a>
  </div>
  <div className="flex-none">
    
    {
      user ? 
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={profile} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-sky-950 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
        <li><Link onClick={handlingLogout}>Logout</Link></li>
      </ul>
    </div>
    :
    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-sky-950 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Login</Link></li>
      </ul>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;