import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./TopTeacher.css";

const TopTeacher = () => {
  return (
    <div className="pt-40">
      <SectionTitle
        heading={"Our Service"}
        subHeading={"leadZora"}
      ></SectionTitle>

      <div>
        <div className="containeer ">
          <div className="card__container ">
            <article className="card__article">
              <img
                src={`https://i.ibb.co/qY2szNJq/Whats-App-Image-2025-07-14-at-19-38-04-eaf1bf41.jpg`}
                alt=""
                className="card__img"
              />
              <div className="card__data ">
                <span className="card__description"></span>
                <h2 className="card__title !text-black ">
                  Client leads for recruiter and staffing agency
                </h2>
              </div>
            </article>

            <article className="card__article">
              <img
                src={`https://i.ibb.co/dwdzbF0C/Whats-App-Image-2025-07-14-at-19-42-32-249bf580.jpg`}
                alt=""
                className="card__img"
              />
              <div className="card__data">
                <span className="card__description"></span>
                <h2 className="card__title !text-black">
                  Leads from indeed, linkedin or other job website
                </h2>
              </div>
            </article>

            <article className="card__article">
              <img
                src={`https://i.ibb.co/k2KS1wWh/Whats-App-Image-2025-07-14-at-19-50-16-6468265f.jpg`}
                alt=""
                className="card__img"
              />
              <div className="card__data">
                <span className="card__description"></span>
                <h2 className="card__title !text-black">
                  Job leads form Indeed, ZipRecruiter, LinkedIn and
                  other job website
                </h2>
              </div>
            </article>
            <article className="card__article">
              <img
                src={`https://i.ibb.co/DPwYZ9xw/Whats-App-Image-2025-07-14-at-19-54-24-0b1b16f0.jpg`}
                alt=""
                className="card__img"
              />
              <div className="card__data">
                <span className="card__description"></span>
                <h2 className="card__title !text-black">
                  Qualified Candidates leads
                </h2>
              </div>
            </article>
            <article className="card__article">
              <img
                src={`https://i.ibb.co/XBPvysP/Whats-App-Image-2025-07-14-at-19-36-38-8c473f06.jpg`}
                alt=""
                className="card__img"
              />
              <div className="card__data">
                <span className="card__description"></span>
                <h2 className="card__title !text-black">
                  Linkedin leads and b2b leads from any industry
                </h2>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTeacher;
