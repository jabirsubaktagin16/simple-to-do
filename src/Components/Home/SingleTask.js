import React from "react";
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
            className="btn btn-primary"
          >
            Complete
          </button>
          <button
            onClick={() => handleDelete(task._id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    // <tr className="text-center">
    //   <td>
    //     {taskCheck.taskCompleted ? <s>{task.taskName}</s> : task.taskName}
    //   </td>
    //   <td className="flex flex-col gap-2">
    //     <button
    //       onClick={() => handleComplete(task._id)}
    //       className="btn btn-sm btn-success"
    //     >
    //       Complete
    //     </button>
    //     <button
    //       onClick={() => handleDelete(task._id)}
    //       className="btn btn-sm btn-error"
    //     >
    //       Delete
    //     </button>
    //   </td>
    // </tr>
  );
};

export default SingleTask;
