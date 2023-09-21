import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteUserModal = ({
  ToastContainer,
  showDeleteModal,
  user,
  onComfirm,
  onCancel,
}) => {
  return (
    <>
      {showDeleteModal && (
        <div className="modal text-white fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center z-[999]">
          <div className="flex  items-center justify-center">
            <div className="input__container">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-[600]">Confirm Deletion</h1>
                <div className="pt-20">
                  <div className="flex flex-col items-center  justify-center gap-2">
                    <h2 className="text-red-400 font-[700] text-xl">
                      {user.username}
                    </h2>
                    <img
                      src={user.imgurl}
                      alt="profile"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                  </div>

                  <div className="gap-10 pt-5 flex">
                    <div>
                      <button
                        className="text-[12px] bg-green-500 hover:bg-green-600 px-2 h-5 rounded-sm"
                        onClick={() => onComfirm(user.id)}
                      >
                        Comfirm
                      </button>
                    </div>
                    <div>
                      <button
                        className="text-[12px] bg-red-500 hover:bg-red-600 px-3 h-5 rounded-sm"
                        onClick={onCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteUserModal;
