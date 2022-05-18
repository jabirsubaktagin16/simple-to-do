import React from "react";

const SingleTask = ({ task, handleDelete }) => {
  return (
    <tr className="text-center">
      <td>{task.taskName}</td>
      <td className="flex flex-col gap-2">
        <button className="btn btn-sm btn-success">Complete</button>
        <button
          onClick={() => handleDelete(task._id)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleTask;
