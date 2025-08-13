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
        <h2 className='mb-10 text-lg !text-white  !md:w-5/6'>
          We are a performance-focused digital agency dedicated to developing creative strategies, building meaningful user experiences, and driving brand growth through innovation, technology, and audience insight.!
        </h2>

        {/* stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h1 className='text-3xl font-bold text-yellow-500'>
              {inView && <CountUp end={312} duration={3} />}+
            </h1>
            <h2 className='text-base font-bold !text-gray-400'>Complete Project</h2>
          </div>
          <div>
            <h1 className='text-3xl font-bold text-yellow-500'>
              {inView && <CountUp end={123} duration={3} />}+
            </h1>
            <h2 className='text-base font-bold text-gray-400'>Register Users</h2>
          </div>
          <div>
            <h1 className='text-3xl font-bold text-yellow-500'>
              {inView && <CountUp end={176} duration={3} />}+
            </h1>
            <h2 className='text-base font-bold text-gray-400'>Reword</h2>
          </div>
        </div>

        <Link to='/project' className='mt-12 block'>
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-white hover:text-black transition-all duration-300'>
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StudentWork;
