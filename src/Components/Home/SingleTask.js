import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useTaskDetails from "./../../hooks/useTaskDetails";

const SingleTask = ({ task, handleDelete }) => {
  const [taskCheck, setTaskCheck] = useTaskDetails(task._id);

  let { taskName, taskDescription, email, taskCompleted } = taskCheck;

  const handleComplete = (id) => {
    taskCompleted = !taskCompleted;
    const updatedTask = {
      taskName,
      taskDescription,
      email,
      taskCompleted,
    };
    const url = `https://safe-island-34468.herokuapp.com/tasks/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => setTaskCheck(updatedTask));
  };

  return (
    <div className="card max-w-lg bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        {taskCheck.taskCompleted ? (
          <h2 className="card-title">
            <s>{task.taskName}</s>
          </h2>
        ) : (
          <h2 className="card-title">{task.taskName}</h2>
        )}
        <div className="card-actions justify-end">
          <button
            onClick={() => handleComplete(task._id)}
            className="btn btn-primary gap-2"
          >
            <FaCheck />
            Complete
          </button>
          <button
            onClick={() => handleDelete(task._id)}
            className="btn btn-error gap-2"
          >
            <MdDeleteOutline />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
