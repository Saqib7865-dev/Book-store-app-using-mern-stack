import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-white py-1 px-4 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl"></BsArrowLeft>
      </Link>
    </div>
  );
};

export default BackButton;
