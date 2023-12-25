
import  { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Container from '../../../Components/Container/Container';
import DraggableTask from './DraggableTask';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ManageTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: tasks = [],  } = useQuery({
    queryKey: ['allClasses'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user?.email}`);
      return res.data;
    },
  });

  const handleTaskDrop = async (taskId, currentStatus) => {
    // Update the task status in the backend
    const updatedStatus = currentStatus === 'ongoing' ? 'complete' : 'ongoing';
    // Your API call or state update logic here
    console.log(`Task with ID ${taskId} moved to ${updatedStatus}`);
  };

  if (tasks?.length === 0) {
    return (
      <div className="flex align-middle h-screen justify-center items-center font-lora">
        <h1 className="text-5xl font-bold text-center">You do not have any tasks.</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      <DndProvider backend={HTML5Backend}>
        <Container>
          <div className="flex w-full gap-24 min-h-screen p-10 font-lora font-bold">
            {/* status: ongoing */}
            <div className="p-12 w-1/2 border-2">
              <h2 className="underline">Ongoing Tasks</h2>
              {tasks
                .filter(task => task.status === 'ongoing')
                .map(task => (
                  <DraggableTask key={task._id} task={task} onTaskDrop={handleTaskDrop} />
                ))}
            </div>
            {/* status: complete */}
            <div className="p-12 w-1/2 border-2">
              <h2 className="underline text-center">Complete Tasks</h2>
              {tasks
                .filter(task => task.status === 'complete')
                .map(task => (
                  <DraggableTask key={task._id} task={task} onTaskDrop={handleTaskDrop} />
                ))}
            </div>
          </div>
        </Container>
      </DndProvider>
    </div>
  );
};

export default ManageTask;
