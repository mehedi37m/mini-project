import { Link } from "react-router-dom";
import { GoUnread } from "react-icons/go";
import logo from "../../assets/logo.jpg";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaHome, FaArrowUp } from 'react-icons/fa';

const NavBar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/project">Project</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <Link to="/dashboard/cart">
       
      </Link>
    </>
  );

  return (
    <div className=" ">
      <div className="navbar fixed z-10  bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="h-8 " src={logo} alt="" />
            <span className="">Lead<span className="text-yellow-500">Zora</span> </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl text-white">{navLink}</ul>
        </div>
         <div className="flex flex-col items-center gap-4 p-6">
                  {/* Social Icons */}
                  <div className="flex gap-4">
                    <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                      <FaFacebookF />
                    </button>
                    <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                      <FaLinkedinIn />
                    </button>
                    <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                      <FaInstagram />
                    </button>
                    <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                      <FaHome />
                    </button>
                    <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                      <FaArrowUp />
                    </button>
                  </div>
        
                  {/* Buttons */}
                  
                </div>
       
      </div>
    </div>
  );
};

export default NavBar;
