import React from "react";
import { useForm } from "react-hook-form";

const HookFrom = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: "", lastName: "" },
  });

  const firstName = console.log("watch", watch("firstName"));
  const lastName = console.log("watch", watch("lastName"));

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("input data", data);
        })}
      >
        <div className="text-red-500">
          <div className="inputbox">
            <input
              {...register("firstName", { required: "This is required" })}
            />
            <span>firstName</span>
            <i></i>
            <p>{errors.firstName?.message}</p>
            <p>{firstName}</p>
          </div>
          <div className="inputbox pt-5">
            <input
              {...register("lastName", {
                required: "This is required",
                minLength: { value: 4, message: "min Length is 4" },
              })}
            />
            <span>lastName</span>
            <i></i>
            <p>{errors.lastName?.message}</p>
            <p>{lastName}</p>
          </div>
          <div className="pt-5 flex items-center justify-center">
            <button className="px-5 py-2 rounded-lg text-white font-[300] bg-blue-400 hover:bg-blue-500 cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HookFrom;
