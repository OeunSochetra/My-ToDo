'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Create from "@/components/Create";

const Page = () => {


  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3030/user");
        const jsonData = res.data;
        setUser(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
  
  <Create/>



      <div className="flex flex-col w-full h-full text-white gap-5 items-center justify-center pt-10">
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
                      <p className="text-[#8a929e] text-[12px]">
                        {item.email}
                      </p>
                    </div>
                    <div className="flex gap-3 pl-10 pt-2">
                      <div>
                        <button className="text-[12px] bg-green-500 hover:bg-green-600 px-1 h-5 rounded-sm">
                          Update
                        </button>
                      </div>
                      <div>
                        <button className="text-[12px] bg-red-500 hover:bg-red-600 px-2 h-5 rounded-sm">
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