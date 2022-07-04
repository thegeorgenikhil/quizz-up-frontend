import { FC } from "react";
import { CircleSpinner } from "react-spinners-kit";

export const Loader: FC = () => {
  return (
    <div className="loader-container">
      <CircleSpinner size={1.2} sizeUnit={"rem"} color="#FFFFFF" />
    </div>
  );
};
