import Marquee from "react-fast-marquee";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const TopTeacher = () => {
  const teacher = [
    {
      id: "1",
      name: "Tanvir d",
      image: "https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg",
      email: "tanvir@gmail.com",
    },
    {
      id: "2",
      name: "Tanvir s",
      image: "https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg",
      email: "tanvir@gmail.com",
    },
    {
      id: "3",
      name: "Tanvir p",
      image: "https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg",
      email: "tanvir@gmail.com",
    },
  
    {
      id: "5",
      name: "Tanvir r",
      image: "https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg",
      email: "tanvir@gmail.com",
    },
  
  ];

  return (
    <div>
      <SectionTitle
        heading={"Top Teacher"}
        subHeading={"CSE"}
      ></SectionTitle>

      <Marquee>
        <div className="flex justify-center gap-5">
          {teacher.map((user) => (
            <div key={user.id}>
              <div className="card w-96 h-72 bg-blue-100 shadow-xl mr-5">
                <figure className="px-10 pt-10">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-36 w-44 rounded-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-black"> Name : {user.name}</h2>
                  <p className="text-black"> Email : {user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopTeacher;
