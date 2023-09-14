"use client";
import { useState } from "react";

const Modal = ({ modal, setModalCreate, handleSubmit, onChange, dataUser }) => {
  return (
    <>
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center z-[999] ">
          <div className="flex items-center justify-center">
            <div className="">
              <div className="input__container ">
                <button
                  onClick={() => setModalCreate(false)}
                  className="font-sm px-2 h-6 rounded-lg text-white bg-red-300 hover:bg-red-400 ml-2"
                >
                  Close
                </button>
                <h1 className="font-[700] text-2xl flex items-center justify-center text-white pt-10 ">
                  Create New User
                </h1>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 pt-[60px] items-center justify-center"
                >
                  <input
                    type="text"
                    className="input__data"
                    placeholder="ImageUrl"
                    required
                    name="imgurl"
                    value={dataUser.imgurl}
                    onChange={onChange}
                  />

                  <input
                    type="text"
                    className="input__data"
                    placeholder="Username"
                    required
                    name="username"
                    value={dataUser.username}
                    onChange={onChange}
                  />
                  <input
                    type="text"
                    className="input__data"
                    placeholder="Email"
                    required
                    name="email"
                    value={dataUser.email}
                    onChange={onChange}
                  />

                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="font-[300]  text-white text-sm px-4 h-7 rounded-lg bg-green-400 hover:bg-green-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
