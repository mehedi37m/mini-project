import { motion } from "framer-motion";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { fadeIn } from "../../framerMotion/fadeIn";

const projects = [
  {
    name: "Recruitment client leads for recruiter and staffing agency",
    year: "Mar2024",
    align: "right",
    image: `https://i.ibb.co/qY2szNJq/Whats-App-Image-2025-07-14-at-19-38-04-eaf1bf41.jpg`,
    link: "https://book-store-e72a5.web.app",
  },
   {
    name: "Recruitment leads from indeed, linkedin or other job website",
    year: "Jan2023",
    align: "left",
    image: `https://i.ibb.co/dwdzbF0C/Whats-App-Image-2025-07-14-at-19-42-32-249bf580.jpg`,
    link: "https://parcel-management-44e15.web.app",
  },

  {
    name: "Recruitment job leads form Indeed, ZipRecruiter, LinkedIn and other job website",
    year: "Sept2024",
    align: "right",
    image: `https://i.ibb.co/k2KS1wWh/Whats-App-Image-2025-07-14-at-19-50-16-6468265f.jpg`,
    link: "https://mehedi-personal-id37.surge.sh",
  },
   {
    name: "Qualified Candidates leads",
    year: "Jan2023",
    align: "left",
    image: `https://i.ibb.co/DPwYZ9xw/Whats-App-Image-2025-07-14-at-19-54-24-0b1b16f0.jpg`,
    link: "https://parcel-management-44e15.web.app",
  },

  {
    name: "Linkedin leads and b2b leads from any industry",
    year: "Sept2024",
    align: "right",
    image: `https://i.ibb.co/XBPvysP/Whats-App-Image-2025-07-14-at-19-36-38-8c473f06.jpg`,
    link: "https://mehedi-personal-id37.surge.sh",
  },
]

const ProjectMain = () => {
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
          {projects.map((project, index) => {
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
      </div>
    </div>
  );
};

export default ProjectMain;
