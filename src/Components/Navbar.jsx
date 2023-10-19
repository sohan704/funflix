import { useState } from "react";
import changeTheme from "../DarkMode/Toggle";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState('Dark');
  const handleChange = () => {
    console.log('Handle change clicked!');
    changeTheme();
    if(theme === 'Dark'){
      setTheme('Light');
    }else{
      setTheme('Dark');
    }
  }


  const allLinks = <>
     <li className="text-lg"><NavLink to="/">Home</NavLink></li>
     <li className="text-lg"><NavLink to="/addproducts">Add Products</NavLink></li>
     <li className="text-lg"><NavLink to="/mycart">My Cart</NavLink></li>
  </>




  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              
             {allLinks}

            </ul>
          </div>
          <img className="h-[30px] lg:h-[70px] rounded-md" src="https://i.ibb.co/m4K3mxh/Fun-FLIX-10-17-2023.jpg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
          {allLinks}
             


          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-sm lg:btn btn-secondary lg:btn-info text-sm lg:text-lg" to='/login'>LOGIN</Link>
          <a onClick={handleChange} className="btn text-xs btn-error btn-circle p-1 m-2">{theme}</a>

        </div>
      </div>
    </div>
  );
};

export default Navbar;