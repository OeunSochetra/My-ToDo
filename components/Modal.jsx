import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Modal = ({ modal, onSubmit, setModalCreate, dataUser }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { imgurl: "", username: "", email: "" } });

  const handleValidation = (data) => {
    onSubmit(data);
    if (!dataUser) {
      reset();
    }
  };

  useEffect(() => {
    if (dataUser) {
      setValue("imgurl", dataUser.imgurl);
      setValue("username", dataUser.username);
      setValue("email", dataUser.email);
    }
  }, [dataUser]);
  return (
    <>
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center z-[999] ">
          <div className="flex items-center justify-center">
            <div className="">
              <div className="input__container ">
                <button
                  onClick={() => setModalCreate(false)}
                  className="font-sm px-2 h-6 rounded-lg text-white bg-red-400 hover:bg-red-500 ml-2"
                >
                  Close
                </button>
                <h1 className="font-[700] text-2xl flex items-center justify-center text-white pt-10 ">
                  {dataUser ? "Update New User" : "Create New User"}
                </h1>
                <form
                  onSubmit={handleSubmit(handleValidation)}
                  className="flex flex-col gap-9 pt-[60px] items-center justify-center"
                >
                  <div className="relative">
                    <input
                      {...register("imgurl", {
                        required: "Please the link of imageUrl",
                      })}
                      type="text"
                      className="input__data"
                      placeholder="ImageUrl"
                    />
                    {errors.imgurl && (
                      <p className="absolute">{errors.imgurl?.message}</p>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      {...register("username", {
                        required: "Please input username",
                      })}
                      type="text"
                      className="input__data"
                      placeholder="Username"
                    />
                    {errors.username && <p>{errors.username?.message}</p>}
                  </div>
                  <div className="relative">
                    <input
                      {...register("email", {
                        required: "Please input the email",
                      })}
                      type="text"
                      className="input__data"
                      placeholder="Email"
                    />
                    {errors.email && <p>{errors.email?.message}</p>}
                  </div>
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
