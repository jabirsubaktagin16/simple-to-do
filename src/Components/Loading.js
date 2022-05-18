import React from "react";
import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <BounceLoader />
    </div>
  );
};

export default Loading;
