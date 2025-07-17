import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaHome,
  FaArrowUp,
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";

const NavBar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/" className="home" id="home">
          Home
        </Link>
      </li>
      <li>
        <Link to="/service" id="service">
          Service
        </Link>
      </li>
      <li>
        <Link to="/project" id="project">
          Project
        </Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <Link to="/dashboard/cart"></Link>
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
            <span className="">
              Lead<span className="text-yellow-500">Zora</span>{" "}
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl text-white">
            {navLink}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 p-6">
          {/* Social Icons */}
          <div className="flex gap-4 ">
            <Link to={`https://www.linkedin.com/in/subarna-h-079805183`}>
              <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                <FaLinkedinIn />
              </button>
            </Link>
            <Link to={`https://www.upwork.com/freelancers/~0122d17e06b4ed2d35`}>
              <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                <FaUpwork />
              </button>
            </Link>
            <Link to={`https://www.facebook.com/subarna.hosen.2024`}>
              <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                <FaFacebookF />
              </button>
            </Link>
            <Link to={`https://www.fiverr.com/s/xXQa1xX`}>
              <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                <TbBrandFiverr />
              </button>
            </Link>
            <Link to={`https://x.com/BindaasB33434`}>
              <button className="border border-green-700 text-green-700 p-2 rounded-md hover:bg-green-50">
                <RiTwitterXFill />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
