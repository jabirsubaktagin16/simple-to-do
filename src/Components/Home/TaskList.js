import React from "react";
import SingleTask from "./SingleTask";

const TaskList = () => {
  return (
    <div className="overflow-x-auto my-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <SingleTask />
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
