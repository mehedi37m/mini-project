import { motion } from "framer-motion";

import { PiHexagonThin } from "react-icons/pi";
import heroImg from "../../assets/logo.jpg";
import BannerText from "./BannerText";
import { fadeIn } from "../../framerMotion/fadeIn";


const Banner = () => {
  return (
    <div>
      <div className=" pt-40 pb-16 bg-[#0c0c1d]">
        <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
          <BannerText />

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className=" h-full flex items-center justify-center "
          >
            <img
              src={heroImg}
              alt="Md Mehedi Hasan"
              className="max-h-[450px] w-auto"
            />

            <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
              <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
