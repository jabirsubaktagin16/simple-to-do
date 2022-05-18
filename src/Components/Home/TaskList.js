import React from "react";
import SingleTask from "./SingleTask";

const TaskList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
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
