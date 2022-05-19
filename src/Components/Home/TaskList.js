import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SiAddthis } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [myTasks, setMyTasks] = useState([]);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://safe-island-34468.herokuapp.com/tasks?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyTasks(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://safe-island-34468.herokuapp.com/tasks/${id}`;
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

  const handleSignOut = () => {
    signOut(auth);
    navigate("/signin");
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Hello {user?.displayName}. Here is your task list
            </h2>
            {myTasks.map((task) => (
              <SingleTask
                key={task._id}
                handleDelete={handleDelete}
                task={task}
              />
            ))}
            <div className="card-actions justify-end">
              <Link
                to="/addTask"
                className="btn gap-2 bg-green-500 border-0 hover:bg-green-400"
              >
                <SiAddthis style={{ color: "white" }} />
                Add New Task
              </Link>
              <button onClick={handleSignOut} className="btn btn-ghost">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
