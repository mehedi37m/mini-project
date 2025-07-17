import { motion } from "framer-motion";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { fadeIn } from "../../framerMotion/fadeIn";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Successfully completed Recruitment candidates leads from indeed employee account",
    year: "Mar2025",
    align: "right",
    image: `https://i.ibb.co/MyzVwwsr/Whats-App-Image-2025-07-17-at-18-35-20-cfbd88ab.jpg`,
    link: "https://www.upwork.com/freelancers/~0122d17e06b4ed2d35",
  },
   {
    name: "Successfully completed LinkedIn and B2B leads",
    year: "Jan2025",
    align: "left",
    image: `https://i.ibb.co/1Y6mXRWR/Whats-App-Image-2025-07-17-at-18-37-09-aed42750.jpg`,
    link: "https://www.fiverr.com/s/xXQa1xX",
  },

  {
    name: "Successfully Completed google ads and campaings project",
    year: "Sept2025",
    align: "right",
    image: `https://i.ibb.co/1ffzmHQV/Whats-App-Image-2025-07-17-at-18-45-46-f6393399.jpg`,
    link: "https://www.upwork.com/freelancers/~0122d17e06b4ed2d35",
  },
   {
    name: "Successfully completed Amazon product scraping project",
    year: "Jan2024",
    align: "left",
    image: `https://i.ibb.co/tpVwW9xm/Whats-App-Image-2025-07-17-at-18-48-06-6e8f3ae8.jpg`,
    link: "https://www.fiverr.com/s/xXQa1xX",
  },

  {
    name: "Completed Google map Scraping project",
    year: "Sept2024",
    align: "right",
    image: `https://i.ibb.co/jkKF9fCB/Whats-App-Image-2025-07-17-at-18-50-46-8da9cda2.jpg`,
    link: "https://www.upwork.com/freelancers/~0122d17e06b4ed2d35",
  },
   {
    name: "Successfully completed ESL Teacher Candidate project",
    year: "Jan2023",
    align: "left",
    image: `https://i.ibb.co/mCKdtz9r/Whats-App-Image-2025-07-17-at-18-28-39-b41c8dca.jpg`,
    link: "https://www.upwork.com/freelancers/~0122d17e06b4ed2d35",
  },

  {
    name: "Successfully completed Lead generation project in UAE",
    year: "Sept2023",
    align: "right",
    image: `https://i.ibb.co/QFb8nd5L/Whats-App-Image-2025-07-17-at-18-31-48-818d35d1.jpg`,
    link: "https://www.upwork.com/freelancers/~0122d17e06b4ed2d35",
  },
   {
    name: "Successfully completed recruitment job leads",
    year: "Jan2022",
    align: "left",
    image: `https://i.ibb.co/3YQjXkgc/Whats-App-Image-2025-07-17-at-18-33-05-a0914f5a.jpg`,
    link: "https://www.upwork.com/freelancers/~0122d17e06b4ed2d35",
  },
]

const HomePageProject = () => {
  return (
    <div>
      <div id="projects" className="  px-4">
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ProjectsText />
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[1000px] mx-auto mt-12">
          {projects.slice(0,3).map((project, index) => {
            return (
              <SingleProject
                key={index}
                name={project.name}
                year={project.year}
                align={project.align}
                image={project.image}
                link={project.link}
              />
            );
          })}
        </div>
        <div className="text-center mt-10">
            <Link to={`/project`} className="btn text-white bg-yellow-700 hover:bg-white hover:text-black">Show All</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageProject;
