import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const AllTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user?.email}`);
      return res.data;
    },
  });
  //   console.log(tasks, isLoading);

  if (tasks?.length === 0) {
    return (
      <div className="flex align-middle h-screen justify-center items-center font-lora">
        <h1 className="text-5xl font-bold text-center">
          You do not have any tasks.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-6 mt-7 mb-16">
        {tasks?.map((task) => (
          <div
            key={task._id}
            className={`w-[300px] font-lora overflow-hidden  bg-[#8cc4ea] p-6 rounded`}
          >
            <h1 className="text-3xl text-slate-800 font-medium">
              Task Title :{" "}
              <span className="first-letter:uppercase">{task.taskTitle}</span>
            </h1>
            <h2 className="my-3">{task.taskDescription}</h2>
            <p className="mb-3 text-lg font-medium text-red-500">
              {" "}
              Priority: {task.priority}
            </p>
            <div className="flex gap-3 mb-4">
              Deadlines:
              <p>{task.date}</p>
              <p>{task.time}</p>
            </div>
            <Link to={`/dashboard/updateTask/${task._id}`} className="px-3 py-1 text-white bg-rose-600 rounded mt-5">
            Update
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
