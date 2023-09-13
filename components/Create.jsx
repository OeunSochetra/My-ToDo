"use client";
import { useState } from "react";

const Create = ({}) => {

  const [imgurl, setImgurl] = useState('');
  const [ name, setNmae] = useState('');
  const [ email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  const [isPending, setIspending] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    const newUserData = { imgurl, name, email };
  
    fetch("http://localhost:3030/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserData),
    })
      .then(() => {
        console.log("User has been created");
      })
      .catch((error) => {
        console.log("Error creating user:", error);
      });
  };


  const toggleModal = () => {
    setModal(!modal);
  };


  return (
    <main>
      <div className="text-white flex items-start justify-center gap-x-10 pt-10">
        <h1 className="font-[600] text-2xl ">
          You can create more user in here{" "}
        </h1>
        <div>
          <button
            onClick={toggleModal}
            className="mt-2 text-sm px-2 h-6 rounded-sm bg-green-500 hover:bg-green-600"
          >
            Create User
          </button>
        </div>
      </div>

      <div>
        {modal && (
          <div className="flex items-center justify-center">
            <div className="fixed mt-[700px]">
              <div className="input__container ">
                <button
                  onClick={toggleModal}
                  className="font-sm px-2 h-6 rounded-lg text-white bg-red-300 hover:bg-red-400 ml-2"
                >
                  Close
                </button>
                <h1 className="font-[700] text-2xl flex items-center justify-center text-white pt-10 ">
                  Create New User
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-[60px] items-center justify-center">
                  
                <input
                    type="text"
                    className="input__data"
                    placeholder="ImageUrl"
                    required
                    value={imgurl}
                    onChange={(e) => setImgurl(e.target.value)}
                  />

                  <input
                    type="text"
                    className="input__data"
                    placeholder="Username"
                    required
                    value={name}
                    onChange={(e) => setNmae(e.target.value)}
                  />
                  <input
                    type="text"
                    className="input__data"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
    </main>
  );
};
export default Create;
