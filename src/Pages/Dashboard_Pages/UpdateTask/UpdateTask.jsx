import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const axiosSecure = useAxiosSecure();
  const data = useLoaderData();
  const navigate = useNavigate();
  //   console.log(data);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskTitle = form.taskTitle.value;
    const date = form.date.value;
    const time = form.time.value;
    const priority = form.priority.value;
    const taskDescription = form.taskDescription.value;

    const task = { taskTitle, date, time, priority, taskDescription };
    // console.log(task);
    axiosSecure
      .put(`/tasks/${data._id}`, task)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your task has been Updated",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
          navigate("/dashboard/all-task");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Container>
        <form
          className="lg:max-w-screen-md mx-auto bg-sky-200 drop-shadow-lg my-24 px-6 py-8 rounded-lg text-base text-black font-lora"
          onSubmit={handleUpdate}
          action=""
        >
          <h1 className="text-center  mb-12 md:text-5xl text-3xl font-bold">
            Update Task
          </h1>

          <div className=" w-full">
            <label className="font-bold">Task Title</label>
            <input
              required
              className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  "
              defaultValue={data.taskTitle}
              type="text"
              name="taskTitle"
              id=""
            />
          </div>
          <div className=" w-full">
            <label>Select Priority</label>
            <select
              name="priority"
              required
              defaultValue={data.priority}
              className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  "
              id=""
            >
              <option disabled value="deafult">
                Select Priority
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className=" w-full">
              <label className="font-bold">Select Date</label>
              <input
                name="date"
                required
                defaultValue={data.date}
                className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  "
                type="date"
                id=""
              />
            </div>
            <div className=" w-full">
              <label className="font-bold">Select Time</label>
              <input
                name="time"
                required
                defaultValue={data.time}
                className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  "
                type="time"
                id=""
              />
            </div>
          </div>

          <div className="">
            <label className="font-bold">Task Description</label>

            <textarea
              required
              className="mt-1  w-full  drop-shadow-lg p-3 rounded flex-1 "
              name="taskDescription"
              defaultValue={data.taskDescription}
              id=""
              rows="5"
            ></textarea>
          </div>

          <input
            className="w-full font-bold my-3 cursor-pointer py-3 rounded-md text-white bg-sky-900"
            type="submit"
            value="Update Task"
          />
        </form>
      </Container>
    </div>
  );
};

export default UpdateTask;
