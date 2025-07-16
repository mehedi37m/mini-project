import { Link } from "react-router-dom";
import Spline from './Spline';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StudentWork = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className='container mx-auto px-4 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <Spline className="text-3xl" />
      </div>

      <div className='md:w-1/2 space-y-6' ref={ref}>
        <h1 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
          Our Project <span className='text-yellow-700'>Team Branch!</span>
        </h1>
        <p className='mb-10 text-lg md:w-5/6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing. Cupiditate quae illum aspernatur vitae nihil dolorum quo quibusdam mollitia explicabo! Accusamus, omnis iusto voluptatibus deleniti illo aperiam quod eum expedita animi!
        </p>

        {/* stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h1 className='text-3xl font-bold text-yellow-500'>
              {inView && <CountUp end={512} duration={3} />}+
            </h1>
            <p className='text-base text-gray-400'>Complete Project</p>
          </div>
          <div>
            <h1 className='text-3xl font-bold text-yellow-500'>
              {inView && <CountUp end={123} duration={3} />}+
            </h1>
            <p className='text-base text-gray-400'>Register Users</p>
          </div>
          <div>
            <h1 className='text-3xl font-bold text-yellow-500'>
              {inView && <CountUp end={176} duration={3} />}+
            </h1>
            <p className='text-base text-gray-400'>Reword</p>
          </div>
        </div>

        <Link to='/shop' className='mt-12 block'>
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-white hover:text-black transition-all duration-300'>
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StudentWork;
