import { FaBusinessTime, FaLaptopCode, FaUserTie } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import Container from "../../../Components/Container/Container";

const WhoCanUse = () => {
  return (
    <div className="my-12 font-lora">
      <Container>
        <h2 className="text-center my-8 text-3xl font-bold">
          Who Can Use It ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="bg-sky-200 rounded-lg px-5 py-12 text-center drop-shadow-lg">
            <FaLaptopCode className="text-6xl mx-auto mb-3 text-[#4d96c7]" />
            <h1 className="text-2xl mb-3 font-bold ">Developers</h1>
            <p className="font-medium text-gray-800">
              How They Benefit: Developers can streamline their project tasks,
              manage sprints, and collaborate with team members seamlessly.{" "}
            </p>
          </div>
          <div className="bg-sky-200 rounded-lg px-5 py-12 text-center shadow-lg">
            <FaUserDoctor className="text-6xl mx-auto mb-3 text-[#4d96c7]" />
            <h1 className="text-2xl mb-3 font-bold ">Doctors</h1>
            <p className="font-medium text-gray-800">
              How They Benefit: Doctors can streamline their project tasks,
              manage sprints, and collaborate with their patient. 
            </p>
          </div>
          <div className="bg-sky-200 rounded-lg px-5 py-12 text-center shadow-lg">
            <FaUserTie className="text-6xl mx-auto mb-3 text-[#4d96c7]" />
            <h1 className="text-2xl mb-3 font-bold ">Business Man</h1>
            <p className="font-medium text-gray-800">
               Business Man can manage their business
              tasks effectively. From planning marketing campaigns to overseeing
              daily operations, TaskFlow Pro .{" "}
            </p>
          </div>
          <div className="bg-sky-200 rounded-lg px-5 py-12 text-center shadow-lg">
            <FaBusinessTime className="text-6xl mx-auto mb-3 text-[#4d96c7]" />
            <h1 className="text-2xl mb-3 font-bold ">Bankers</h1>
            <p className="font-medium text-gray-800">
              How They Benefit: Financial professionals deal with numerous tasks
              and deadlines. TaskFlow Pro provides a centralized hub to manage
              financial .{" "}
            </p>
          </div>
          <div className="bg-sky-200 rounded-lg px-5 py-12 text-center shadow-lg">
            <PiStudentBold className="text-6xl mx-auto mb-3 text-[#4d96c7]" />
            <h1 className="text-2xl mb-3 font-bold ">Students </h1>
            <p className="font-medium text-gray-800">
              TaskZen students in organizing assignments, projects,
              and study schedules. Educators can also use it to manage lesson
              plans .{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoCanUse;
