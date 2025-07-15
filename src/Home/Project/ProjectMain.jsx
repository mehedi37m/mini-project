import { motion } from "framer-motion";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { fadeIn } from "../../framerMotion/fadeIn";

const projects = [
  {
    name: "Book-shop",
    year: "Mar2024",
    align: "right",
    image: `https://i.ibb.co/nM6CRBgf/Book-store.png`,
    link: "https://book-store-e72a5.web.app",
  },
   {
    name: "parcel-mangment",
    year: "Jan2023",
    align: "left",
    image: `https://i.ibb.co/N26sB45v/Screenshot-2023-12-12-112342.png`,
    link: "https://parcel-management-44e15.web.app",
  },

  {
    name: "portfolio-web",
    year: "Sept2024",
    align: "right",
    image: `https://i.ibb.co/D0RF9GK/portfolio.png`,
    link: "https://mehedi-personal-id37.surge.sh",
  },
]

const ProjectMain = () => {
  return (
    <div>
      <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ProjectsText />
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
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
