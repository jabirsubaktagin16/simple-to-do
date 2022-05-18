import { useEffect, useState } from "react";

const useTaskDetails = (id) => {
  const [taskCheck, setTaskCheck] = useState({});
  useEffect(() => {
    const url = `https://safe-island-34468.herokuapp.com/tasks/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTaskCheck(data));
  }, [id]);
  return [taskCheck, setTaskCheck];
};

export default useTaskDetails;
