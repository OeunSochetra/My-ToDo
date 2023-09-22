"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Update from "@/components/Update";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import DeleteUserModal from "@/components/DeleteUserModal";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [user, setUser] = useState([]);

  const initData = { imgurl: "", username: "", email: "" };
  const [dataUser, setDataUser] = useState(initData);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3030/user");
      const jsonData = res.data;
      setUser(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // fetchData to display on UI

  // function to delet user

  const handleComfirmDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3030/user/${userId}`);
      setUser(user.filter((item) => item.id !== userId));
      fetchData();
      setShowDeleteModal(false);
    } catch (error) {
      console.log("Delete is error ", error);
    }
    toast.success("Item Delete successfully 😢", {
      position: toast.POSITION.TOP_LEFT,
    });
    console.log("userID", userId);
  };

  // function to delet user

  const handleChnange = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dataUser.id) {
      handleUpdate();
    } else {
      handleCreate();
    }

    console.log("datauser", dataUser);
  };

  const handleCreate = async () => {
    const newUserData = {
      id: uuidv4(),
      imgurl: dataUser.imgurl,
      username: dataUser.username,
      email: dataUser.email,
    };
    try {
      const res = await axios.post("http://localhost:3030/user", newUserData);
      console.log(res.data);
      fetchData();
      setModalCreate(false);
    } catch (error) {
      console.log("Your Created is failed", error);
    }
    toast.success("Item Created successfully  🎉", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  const handleUpdate = async () => {
    const data = {
      id: dataUser.id,
      imgurl: dataUser.imgurl,
      username: dataUser.username,
      email: dataUser.email,
    };

    try {
      await axios.put(`http://localhost:3030/user/${dataUser.id}`, data);
      fetchData();
      setModalUpdate(false);
    } catch (error) {
      console.log("Updated is fail", error);
    }
    toast.success("Item Updated successfully 🎉", {
      position: toast.POSITION.TOP_LEFT,
    });
    // console.log(data);
  };

  const toggleModalCreate = () => {
    setModalCreate(true);
    setDataUser((prev) => ({
      ...prev,
      id: "",
      imgurl: "",
      username: "",
      email: "",
    }));
  };

  const openUpdate = (item) => {
    setDataUser(item);
    console.log("item", item);
    setModalUpdate(true);
  };

  const openDelete = (item) => {
    setShowDeleteModal(true);
    setDataUser(item);
    console.log("items", item);
    toast.warn("The user will be delete forever ⛔️", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  // const handleValidation = (data) => {
  //   console.log(data);
  // };

  return (
    <main>
      <ToastContainer />
      <Header toggleModalCreate={toggleModalCreate} />
      <DeleteUserModal
        showDeleteModal={showDeleteModal}
        user={dataUser}
        onCancel={() => setShowDeleteModal(false)}
        onComfirm={handleComfirmDelete}
        ToastContainer={ToastContainer}
      />
      <Modal
        modal={modalCreate}
        setModalCreate={setModalCreate}
        onChange={handleChnange}
        dataUser={dataUser}
        handleSubmit={handleSubmit}
        // onSubmit={handleValidation}
      />
      <Update
        onChange={handleChnange}
        setDataUser={setDataUser}
        dataUser={dataUser}
        modalUpdate={modalUpdate}
        setModalUpdate={setModalUpdate}
        handlesubmit={handleSubmit}
      />

      <div className="flex flex-col w-full h-full text-white gap-5 items-center justify-center pt-10">
        {user &&
          user.map((item) => (
            <div key={item.id}>
              <ul>
                <li>
                  <div className="flex">
                    <img
                      src={item.imgurl}
                      alt="Profile"
                      width={50}
                      height={50}
                      className="rounded-full "
                    />
                    <div className="flex flex-col text-start pl-4 pt-2">
                      <p className="font-[400] text-sm">{item.username}</p>
                      <p className="text-[#8a929e] w-[200px] text-[12px]">
                        {item.email}
                      </p>
                    </div>
                    <div className="flex gap-3 pl-10 pt-2">
                      <div>
                        <button
                          onClick={() => openUpdate(item)}
                          className="text-[12px] bg-green-500 hover:bg-green-600 px-2 h-5 rounded-sm"
                        >
                          Update
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => openDelete(item)}
                          className="text-[12px] bg-red-500 hover:bg-red-600 px-2 h-5 rounded-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        {/* <div className="pt-10">
          <HookFrom />
        </div> */}
      </div>
    </main>
  );
};

export default Page;
