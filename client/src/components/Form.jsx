import React from "react";
import { preview } from "../assets";

const Form = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="text-black">
      <div className="flex items-center gap-2 mb-2 mt-3 ">
        <label
          htmlFor={name}
          className="block text-xl font-medium "
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs  bg-red-400 py-1  px-2 rounded-full text-white"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:shadow-lg focus:shadow-red-400
              outline-none block w-full p-2 text-black"
      />
    </div>
  );
};

export default Form;
