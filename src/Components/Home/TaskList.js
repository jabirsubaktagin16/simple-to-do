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

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/tasks/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myTasks.filter((task) => task._id !== id);
          setMyTasks(remaining);
        });
    }
  };

  return (
    <div className="overflow-x-auto my-8">
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>Task Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myTasks.map((task) => (
            <SingleTask
              task={task}
              key={task._id}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
