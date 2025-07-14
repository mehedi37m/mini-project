import Banner from "../Banner/Banner";
import Live from "../Live/Live";
import PromoBanner from "../PromoBanner/PromoBanner";
import StudentWork from "../StudentWork/StudentWork";
import TopTeacher from "../TopTeacher/TopTeacher";






const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <StudentWork></StudentWork>
            <Live></Live>
            <PromoBanner></PromoBanner>
            <TopTeacher></TopTeacher>
              
        </div>
    );
};

export default Home;