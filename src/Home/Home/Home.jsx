import Contact from "../../Components/Contact/Contact";
import Banner from "../Banner/Banner";
import Live from "../Live/Live";
import ProjectMain from "../Project/ProjectMain";
import PromoBanner from "../PromoBanner/PromoBanner";
import StudentWork from "../StudentWork/StudentWork";
import TopTeacher from "../TopTeacher/TopTeacher";






const Home = () => {
    return (
        <div id="home">
            
            <Banner></Banner>
            <StudentWork></StudentWork>
            <ProjectMain></ProjectMain>
            <Live></Live>
            <PromoBanner></PromoBanner>
            <TopTeacher></TopTeacher>
            <Contact></Contact>
              
        </div>
    );
};

export default Home;