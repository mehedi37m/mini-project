import { Link } from "react-router-dom";
import { GoUnread } from "react-icons/go";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/activity">Activity</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <Link to="/dashboard/cart">
        <button className="btn btn-ghost">
          <GoUnread className="mr-2"></GoUnread>
          {/* <div className="badge badge-secondary">+{cart.length}</div> */}
        </button>
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
            <img className="h-8" src={logo} alt="" />
            CSE SEU Student
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
       
      </div>
    </div>
  );
};

export default NavBar;
