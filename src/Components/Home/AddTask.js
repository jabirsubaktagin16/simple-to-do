import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading";

const AddTask = () => {
  const [user, error, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const addNewTask = (event) => {
    event.preventDefault();
    const task = {
      taskName: event.target.taskName.value,
      taskDescription: event.target.taskDescription.value,
      email: user?.email,
      taskCompleted: false,
    };
    fetch("https://safe-island-34468.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task Added Successfully");
        navigate("/");
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add New Task</h2>
          <form onSubmit={addNewTask}>
            {/* Task Name Field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Task Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Task Name"
                className="input input-bordered w-full max-w-xs"
                name="taskName"
                required
              />
            </div>
            {/* Task Description Field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Task Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered resize-none"
                placeholder="Description"
                name="taskDescription"
              ></textarea>
            </div>

            <input
              className="btn w-full max-w-xs mt-6"
              value="Add Task"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
