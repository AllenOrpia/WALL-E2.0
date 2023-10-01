import React from "react";
import { logo } from "../assets";
import { useCookie } from "react-cookie";

const Header = ( { handleSearch }) => {
  return (
    <header>
      <div className="grid grid-cols-3 p-5">
        <div className="">
          <img src={logo} alt="Open Ai Logo" className="" />
        </div>
        <div>
          <Form
            labelName="Search Image"
            type="text"
            name="text"
            placeholder="Search Image"
            value={searchText}
            handleChange={handleSearch}
          />
        </div>
        <div>

        </div>
      </div>
    </header>
  );
};

export default Header;
