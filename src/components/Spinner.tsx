import React from "react";
interface Props {
  className?: string;
}
const Spinner = (props: Props) => {
  const { className } = props;
  return (
    <div
      className={`${className} border-gray-300 h-[1.1vw] w-[1.1vw] animate-spin rounded-full border-[0.2vw] border-t-blue-600`}
    />
  );
};

export default Spinner;
