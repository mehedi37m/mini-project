import Contact from "../../Components/Contact/Contact";
import Banner from "../Banner/Banner";
import Live from "../Live/Live";
import People from "../People/People";
import HomePageProject from "../Project/HomePageProject";
import ProjectMain from "../Project/ProjectMain";
import PromoBanner from "../PromoBanner/PromoBanner";
import StudentWork from "../StudentWork/StudentWork";
import TopTeacher from "../TopTeacher/TopTeacher";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Banner></Banner>
      </section>
      <StudentWork></StudentWork>
      <People></People>
      {/* <ProjectMain></ProjectMain> */}
      <HomePageProject></HomePageProject>
      <Live></Live>
      {/* <PromoBanner></PromoBanner> */}
      <TopTeacher></TopTeacher>
      <Contact></Contact>
    </div>
  );
};

export default Home;
