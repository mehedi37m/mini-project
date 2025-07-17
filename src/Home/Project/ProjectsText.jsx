import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center pt-[100px]">
      
        <SectionTitle
        heading={"Top Project"}
        subHeading={"leadZora"}
      ></SectionTitle>
       
      <p className="text-xl text-center mt-10">
        I have worked on a variety of <span className="text-yellow-500">Leads</span> projects, ranging from
        responsive websites for small businesses to full-stack applications and
        complex front-end interfaces.
      </p>
    </div>
  );
};

export default ProjectsText;
