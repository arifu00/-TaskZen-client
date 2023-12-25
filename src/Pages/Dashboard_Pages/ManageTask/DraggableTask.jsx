
import { useDrag } from 'react-dnd';

const DraggableTask = ({ task, onTaskDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task._id, title: task.taskTitle, status: task.status },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        border: '1px solid #000',
        padding: '10px',
        margin: '10px',
        backgroundColor: task.status === 'ongoing' ? '#8cc4ea' : 'lightgreen',
      }}
      onClick={() => onTaskDrop(task._id, task.status)}
    >
      <h2 className='text-center my-8'>{task.taskTitle}</h2>
      <p className="">Deadline: {task.date} {task.time}</p>
      <p className="">Description: {task.taskDescription} </p>
    </div>
  );
};

export default DraggableTask;
