import React from "react";
import { CircleSpinner } from "react-spinners-kit";
export const Loader = () => {
  return (
    <div className="loader-container">
      <CircleSpinner size={1.2} sizeUnit={"rem"} color="#FFFFFF" />
    </div>
  );
};

