import React from "react";

const Header = ({ toggleModalCreate }) => {
  return (
    <div>
      <div className="text-white flex items-start justify-center gap-x-10 pt-10">
        <h1 className="font-[600] md:text-2xl text-sm ">
          You can create more user in here{" "}
        </h1>
        <div>
          <button
            onClick={() => toggleModalCreate()}
            className="mt-2 text-sm px-2 h-6 rounded-sm bg-green-500 hover:bg-green-600"
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
