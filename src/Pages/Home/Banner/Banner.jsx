import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import bannerImg from "../../../assets/banner/bannerImg.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero lg:h-[80vh] bg-gradient-to-r from-[#0F4C75] to-[#BBE1FA] my-4">
        <div className="hero-overlay bg-opacity-20"></div>
        <Container>
          <div className="py-12 w-full flex flex-col-reverse lg:flex-row justify-between gap-12 items-center  text-neutral-content">
            <div className="flex-1 lg:w-6/12 font-lora">
              <h1 className="mb-5 text-xl lg:text-4xl text-center font-bold">
                Simplify Your Workflow with <br /> Our Task Management Platform
              </h1>
              <p className="mb-5 text-base lg:text-lg text-center">
                Effortlessly organize, track, and collaborate on tasks with our
                powerful and intuitive task management solution.
              </p>
              <div className="text-center">
                <button className="btn btn-secondary hover:bg-[#089cff]  font-roboto text-xl">
                  <Link to="/dashboard">Let’s Explore</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-6/12">
              <img
                className="object-cover w-full lg:h-[500px] rounded-lg"
                src={bannerImg}
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
