import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./Components/Home/AddTask";
import Home from "./Components/Home/Home";
import RequireAuth from "./Components/SignIn/RequireAuth";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignIn/SignUp";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/addTask"
          element={
            <RequireAuth>
              <AddTask />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
