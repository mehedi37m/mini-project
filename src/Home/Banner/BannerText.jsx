import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../../framerMotion/fadeIn";



const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const BannerText = () => {
  return (
    <div className="flex flex-col gap-4 h-[80vh] justify-center md:text-left sm:text-center">
        
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Its your time to shine
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Mst Suberna <br className="sm:hidden md:block" />
        hossain
      </motion.h1>
      <motion.h2
        variants={fadeIn("left", 0.4)}
        className="md:text-[1.8rem] lg:text-3xl sm:text-2xl text-orange-500 font-bold uppercase h-8"
      >
        <TypeAnimation
          sequence={[
            "seo services",
            600,
            "Lead generation",
            600,
            "data entry",
            600,
            "email marketing",
            600,
          ]}
          repeat={Infinity}
          cursor={false}
        />
      </motion.h2>
     
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 space-y-6"
      >
        
        A Passionate Lead generation and Instructor <br /> with 5 years of
        experience.
        <div className="flex gap-2">
            <button className="bg-orange-700 btn-primary text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-black">
              About Us
            </button>
            <button className="bg-orange-700 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-black">
              Contact
            </button>

          </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg pr-96"
      >
       
      </motion.div>
      <motion.div
        className="absolute text-[20vh] bottom-[500px] text-[#ffffff09] w-1/2 whitespace-nowrap font-bold"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Lead generation
      </motion.div>
    </div>
  );
};

export default BannerText;
