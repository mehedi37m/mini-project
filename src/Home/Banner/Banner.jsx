import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import SplineScene from "../StudentWork/Spline";
import SplineSce from "./SplineSce";

const Banner = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex container">
            <img
              className="md:h-[850px] w-full"
              src="https://i.ibb.co/M6zyCQF/feliphe-schiarolli-hes6n-UC1-MVc-unsplash.jpg"
            />
            <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-white space-y-7 pl-12 md:w-1/2"
              >
                <h1 className="md:text-6xl text-2xl font-bold text-blue-200">
                  Student of Southeast
                </h1>
                <p className="md:text-xl text-[10px]">
                  SEU Student Branch is a diverse and distinguished student
                  organization at Southeast University of Science and Technology
                  in Bangladesh..{" "}
                </p>
                <div className="flex justify-center">
                  <form action="" className="flex justify-between">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input text-black input-bordered input-primary w-full max-w-xs"
                    />
                    <input
                      type="submit"
                      className="bg-white rounded-lg text-blue-700 btn "
                      value="Search"
                    />
                  </form>
                </div>
              </div>
              <div className="w-[1400px] h-96">
                <SplineSce></SplineSce>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="md:h-[850px] w-full"
              src="https://i.ibb.co/MGrXQL4/kenny-eliason-z-FSo6bn-ZJTw-unsplash.jpg"
            />
            <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-white space-y-7 pl-12 md:w-1/2"
              >
                <h1 className="md:text-6xl text-2xl font-bold text-blue-200">
                  Student of Southeast
                </h1>
                <p className="md:text-xl text-[10px]">
                  SEU Student Branch is a diverse and distinguished student
                  organization at Southeast University of Science and Technology
                  in Bangladesh.{" "}
                </p>
                <div className="flex justify-center">
                  <form action="" className="flex justify-between">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input text-black input-bordered input-primary w-full max-w-xs"
                    />
                    <input
                      type="submit"
                      className="bg-white rounded-lg text-blue-700 btn "
                      value="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="md:h-[850px] w-full"
              src="https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg"
            />
            <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-white space-y-7 pl-12 md:w-1/2"
              >
                <h1 className="md:text-6xl text-2xl font-bold text-blue-200">
                  Student of Southeast
                </h1>
                <p className="md:text-xl text-[10px]">
                  SEU Student Branch is a diverse and distinguished student
                  organization at Southeast University of Science and Technology
                  in Bangladesh.{" "}
                </p>
                <div className="flex justify-center">
                  <form action="" className="flex justify-between">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input text-black input-bordered input-primary w-full max-w-xs"
                    />
                    <input
                      type="submit"
                      className="bg-white rounded-lg text-blue-700 btn "
                      value="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="md:h-[850px] w-full"
              src="https://i.ibb.co/r6T3n7J/alam-kusuma-g7-O1rq-MVre-U-unsplash.jpg"
            />
            <div className="absolute h-full rounded-xl flex items-center transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-white space-y-7 pl-12 md:w-1/2"
              >
                <h1 className="md:text-6xl text-2xl font-bold text-blue-200">
                  Student of Southeast
                </h1>
                <p className="md:text-xl text-[10px]">
                  SEU Student Branch is a diverse and distinguished student
                  organization at Southeast University of Science
                  in Bangladesh.{" "}
                </p>
                <div className="flex justify-center">
                  <form action="" className="flex justify-between">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input text-black input-bordered input-primary w-full max-w-xs"
                    />
                    <input
                      type="submit"
                      className="bg-white rounded-lg text-blue-700 btn "
                      value="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
