
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./TopTeacher.css"

const TopTeacher = () => {
  

  return (
    <div className="pt-40">
      <SectionTitle
        heading={"Top Project"}
        subHeading={"leadZora"}
      ></SectionTitle>

      <div>

        <div className="containeer ">
          <div className="card__container ">

            <article className="card__article">
              <img src={`https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg`} alt="" className="card__img" />
               <div className="card__data">
                <span className="card__description">Group Leader</span>
                <h2 className="card__title">Mst Suberna Hossain</h2>
                <a href="" className="card__button">Read More</a>
               </div>
            </article>

            <article className="card__article">
              <img src={`https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg`} alt="" className="card__img" />
               <div className="card__data">
                <span className="card__description"></span>
                <h2 className="card__title"></h2>
                <a href="" className="card__button">Read More</a>
               </div>
            </article>

            <article className="card__article">
              <img src={`https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg`} alt="" className="card__img" />
               <div className="card__data">
                <span className="card__description"></span>
                <h2 className="card__title"></h2>
                <a href="" className="card__button">Read More</a>
               </div>
            </article>

          </div>
        </div>

      </div>

      
    </div>
  );
};

export default TopTeacher;
