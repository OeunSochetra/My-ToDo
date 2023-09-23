"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const dashbord = () => {
  const [speakers, setSpeakers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3030/speakers");
      const jsonData = res.data;
      setSpeakers(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="text-white flex flex-col mx-auto mt-4 mb-[0px] w-full max-w-[1630px] flex-1 px-4  md:mt-6 lg:mt-8 lg:px-8 xl:max-w-[1180px] xl:px-0  2sm:px-[unset] 4xl:max-w-[1730px]">
        <div>
          <h1 className="font-[400] text-[35px] lg:text-[40px] md:text-[40px]">
            Speakers
          </h1>
          <p className="font-[300] text-[md] lg:text-[lg] md:text-[lg]">
            Learn from the experts on the cutting-edge of deception at
            <br className="hidden md:block" />
            the most sinister companies.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="pt-20  w-full h-full grid lg:grid-cols-3 md:grid-cols-3 gap-10">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="card relative">
                <img className="rounded-md" src={speaker.imgurl} alt="" />
                <h1 className=" font-[600] text-lg pt-4 items-center justify-center flex ">
                  {speaker.name}
                </h1>
                <p className="text-[#7e8793] items-center justify-center flex">
                  {speaker.job}
                </p>
                <div className="pt-10 flex items-center justify-center text-2xl gap-2 text-black  ">
                  <div className="hover:text-blue-400">
                    <AiFillGithub />
                  </div>
                  <div className="hover:text-blue-400">
                    <AiFillTwitterCircle />
                  </div>
                  <div className="text-3xl hover:text-blue-400">
                    <AiFillYoutube />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button class="card-button">More detail</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default dashbord;
