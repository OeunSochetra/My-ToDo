"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Create from "@/components/Create";
import Update from "@/components/Update";

const Page = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get("http://localhost:3030/user");
          const jsonData = res.data;
          setUser(jsonData);
          setIsloading(false);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };

      fetchData();
    }, 3000);
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3030/user/${userId}`);
      setUser(user.filter((item) => item.id !== userId));
    } catch (error) {
      console.log("Delete is error ", error);
    }
  };

  const handleUpdate = async () => {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <main>
      <Create />

      <div className="flex flex-col w-full h-full text-white gap-5 items-center justify-center pt-10">
        {isLoading && <span className="loader mt-[300px]"></span>}
        {user &&
          user.map((item) => (
            <div key={item.id}>
              <ul>
                <li>
                  <div className="flex">
                    <img
                      src={item.imgUrl}
                      alt="Profile"
                      width={50}
                      className="rounded-full flex-none"
                    />
                    <div className="flex flex-col text-start pl-4 pt-2">
                      <p className="font-[400] text-sm">{item.name}</p>
                      <p className="text-[#8a929e] w-[150px] text-[12px]">
                        {item.email}
                      </p>
                    </div>
                    <div className="flex gap-3 pl-10 pt-2">
                      <div>
                      <Update />
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
