"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Update from "@/components/Update";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const initData = { imgurl: "", username: "", email: "" };
  const [dataUser, setDataUser] = useState(initData);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3030/user");
      const jsonData = res.data;
      setUser(jsonData);
      // setIsloading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3030/user/${userId}`);
      setUser(user.filter((item) => item.id !== userId));
      fetchData();
    } catch (error) {
      console.log("Delete is error ", error);
    }
    console.log("userID", userId);
  };

  const handleChnange = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dataUser.id && dataUser) {
      handleUpdate();
      setModalUpdate(false);
    } else {
      handleCreate();
      setModalCreate(false);
    }

    // handleCreate();
    // setModalCreate(false);
  };
  async function handleCreate() {
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
    } catch (error) {
      console.log("Your Created is failed", error);
    }
  }

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
    } catch (error) {
      console.log("Update is fail", error);
    }
    console.log(data);
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
    console.log("data", dataUser);
  };

  const openUpdate = (item) => {
    setDataUser(item);
    console.log("item", item);
    setModalUpdate(true);
  };

  return (
    <main>
      <Header toggleModalCreate={toggleModalCreate} />

      <Modal
        modal={modalCreate}
        setModalCreate={setModalCreate}
        handleSubmit={handleSubmit}
        onChange={handleChnange}
        dataUser={dataUser}
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
                          onClick={() => handleDelete(item.id)}
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
      </div>
    </main>
  );
};

export default Page;
