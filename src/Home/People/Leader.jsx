
import {
  FaFacebookF,
  FaLinkedinIn,
  
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Leader = () => {
  return (
    <div className="container mx-auto">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 md:w-96 shadow-sm">
            <figure>
              <img className="md:h-72 w-28 md:w-full"
                src="https://i.ibb.co.com/dwvtRrFR/cute-hijab-girl-sticker-vector-illustration-566152-169.jpg"
                alt="mini"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title justify-center text-yellow-700">
                
                
                <h2 className="badge badge-secondary text-center text-white bg-blue-950 p-5">Mst Subarna Hossen</h2>
              </h2>
              <hr className="mb-4"/>
              <h2 className="text-white">
                Digital Marketing
              </h2>
              <h2 className="text-white">
                subarnahosen40@gmail.com
              </h2>
              
              <div className="flex justify-center gap-4 text-sm ">
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
          
          <div className="flex-1 ">
            <h1 className="text-2xl md:text-6xl font-bold text-yellow-700">
              Leader of our agency
            </h1>
            <h1 className="md:text-3xl text-xl font-bold text-yellow-900">Our mission</h1>
            <h1 className="md:text-xl text-sm font-bold">
              To provide impactful growth solutions
            </h1>
            <h2 className="py-6 text-white text-sm overflow-auto">
              This is more than just a statement—it's our pledge to create meaningful impact. We’re dedicated to providing solutions that not only perform but actively drive our clients’ growth. It’s our promise to deliver strategies that leave a lasting mark, enabling businesses to not only grow but truly flourish.
            </h2>
            <Link to={"/about"} className="btn  text-white bg-yellow-700">About us</Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Leader;
