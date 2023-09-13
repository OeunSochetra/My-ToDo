"use client";
import React, { useState } from "react";

const Update = () => {

  const [isModal , setIsModal] = useState(false);

  const isToggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div>
      <div>
        <button
          onClick={isToggleModal}
          className="text-[12px] bg-green-500 hover:bg-green-600 px-1 h-5 rounded-sm"
        >
          Update
        </button>
      </div>
      <div className="">
      {isModal && (
        <div className="flex items-center justify-center">
          <div className="fixed mt-[700px]">
            <div className="input__container ">
              <button
                onClick={isToggleModal}
                className="font-sm px-2 h-6 rounded-lg text-white bg-red-300 hover:bg-red-400 ml-2"
              >
                Close
              </button>
              <h1 className="font-[700] text-2xl flex items-center justify-center text-white pt-10 ">
                Updata User
              </h1>
              <form className="flex flex-col gap-6 pt-[60px] items-center justify-center">
                <input
                  type="text"
                  className="input__data"
                  placeholder="ImageUrl"
                />
                <input
                  type="text"
                  className="input__data"
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="input__data"
                  placeholder="Email"
                />
                <div className="flex items-center justify-center">
                  <button className="font-[300]  text-white text-sm px-4 h-7 rounded-lg bg-green-400 hover:bg-green-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
    
  );
};

export default Update;
