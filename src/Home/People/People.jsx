import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import "./people.css";

const People = () => {
  const teacher = [
    {
      id: "1",
      name: "Mst Suberna Hossain",
      image:
        "https://i.ibb.co/q1ZNP1R/arthur-lambillotte-Om8-Wd-Pm74-RM-unsplash.jpg",
      email: "tanvir@gmail.com",
    },
    {
      id: "2",
      name: "Md Mehedi Hasan",
      image:
        "https://i.ibb.co/fdjFZWyJ/Whats-App-Image-2024-03-16-at-11-34-15-46ebb3a9.jpg",
      email: "tanvir@gmail.com",
    },
    {
      id: "3",
      name: "Md Hridoy Ali",
      image:
        "https://i.ibb.co/m5nGvB5f/Whats-App-Image-2025-07-17-at-18-24-55-c0a28a29.jpg",
      email: "tanvir@gmail.com",
    },
    {
      id: "4",
      name: "Md Romzan Ali",
      image:
        "https://i.ibb.co/21kCCdF0/Whats-App-Image-2025-07-17-at-18-25-48-d86d288c.jpg",
      email: "tanvir@gmail.com",
    },
  ];

  return (
    <div className=" container mx-auto">

       

      <div className="mx-auto text-center md:w-4/12 ">
        <p className="text-white mb-3"> --- LeadZora ---</p>
        <h1 className="text-yellow-600 text-2xl font-bold uppercase border-y-2 ">
          Our Team Member
        </h1>
      </div>

      <div className=" md:flex justify-center items-center">
        <div className="contain md:flex">
          <div className="cardId rounded-lg">
            <img
              className="w-96 h-96"
              src={`https://i.ibb.co/fdjFZWyJ/Whats-App-Image-2024-03-16-at-11-34-15-46ebb3a9.jpg`}
              alt=""
            />
            <div className="intro">
              <h1 className="m-4 text-4xl">Md Mehedi Hasan</h1>
              <p className="m-8 text-2xl ">
                Web{" "}
                <span className="font-bold">Designer and Developer web</span>
              </p>
            </div>
          </div>
          <div className="cardId rounded-lg">
            <img
              className="w-96 h-96"
              src={`https://i.ibb.co/m5nGvB5f/Whats-App-Image-2025-07-17-at-18-24-55-c0a28a29.jpg`}
              alt=""
            />
            <div className="intro">
              <h1 className="m-4 text-4xl">Md Hridoy Ali</h1>
              <p className="m-8 text-2xl ">
                Digital <span className="font-bold">marketing specialists</span>
              </p>
            </div>
          </div>
          <div className="cardId rounded-lg">
            <img
              className="w-96 h-96"
              src={`https://i.ibb.co/21kCCdF0/Whats-App-Image-2025-07-17-at-18-25-48-d86d288c.jpg`}
              alt=""
            />
            <div className="intro">
              <h1 className="m-4 text-4xl">Md Romzan Ali</h1>
              <p className="m-8 text-2xl ">
                Excel <span className="font-bold"> specialist</span>
              </p>
            </div>
          </div>
        </div>

        {/* {teacher.map((user) => (
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
        ))} */}
      </div>
    </div>
  );
};

export default People;
