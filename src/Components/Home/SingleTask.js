import React from "react";

const SingleTask = () => {
  return (
    <tr>
      <td>Cy Ganderton</td>
      <td className="flex flex-col gap-2">
        <button className="btn btn-sm btn-success">Complete</button>
        <button className="btn btn-sm btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default SingleTask;
