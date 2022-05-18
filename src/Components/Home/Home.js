import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import TaskList from "./TaskList";

const Home = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    navigate("/signin");
  };
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Hello {user?.displayName}. Here is your task list
      </h2>
      <Link
        to="/addTask"
        class="btn btn-block gap-2 bg-green-500 border-0 hover:bg-green-300"
      >
        Add New Task
      </Link>
      <TaskList />
      <button onClick={handleSignOut} class="btn btn-block">
        Sign Out
      </button>
    </div>
  );
};

export default Home;
