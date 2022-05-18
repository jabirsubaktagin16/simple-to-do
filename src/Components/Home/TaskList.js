import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const [user] = useAuthState(auth);
  const [myTasks, setMyTasks] = useState([]);
  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/tasks?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyTasks(data));
  }, [user]);
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
          {myTasks.map((task) => (
            <SingleTask task={task} key={task._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
