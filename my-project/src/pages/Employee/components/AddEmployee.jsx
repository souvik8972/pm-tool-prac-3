import React from "react";
import { useForm } from "react-hook-form";

const AddEmployee = ({ setShowModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const teams = ["Tech Team", "PM Team", "Creative Team", "PM", "Finance"];
  const roles = ["Admin", "PM", "PM Employee", "System Admin"];

  const onSubmit = (data) => {
    console.log(data);
    // Reset form fields after successful submission
    reset();
  };

  return (
    <div className="p-4 bg-white text-sm max-w-lg mx-auto w-[100%]">
      <h2 className="font-semibold mb-4 text-lg text-center">Add New Employee</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 capitalize text-left"
      >
        <div>
          <label className="block mb-1">Employee Name</label>
          <input
            type="text"
            {...register("employeeName", { required: "Employee name is required" })}
            className="border rounded p-2 w-full"
          />
          {errors.employeeName && (
            <p className="text-red-500">{errors.employeeName.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            className="border rounded p-2 w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Designation</label>
          <input
            type="text"
            {...register("designation", { required: "Designation is required" })}
            className="border rounded p-2 w-full"
          />
          {errors.designation && (
            <p className="text-red-500">{errors.designation.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Team</label>
          <select
            {...register("team", { required: "Please select a team" })}
            className="border rounded p-2 w-full"
          >
            <option value="">Select a team</option>
            {teams.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.team && <p className="text-red-500">{errors.team.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Role</label>
          <select
            {...register("role", { required: "Please select a role" })}
            className="border rounded p-2 w-full"
          >
            <option value="">Select a role</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.role && <p className="text-red-500">{errors.role.message}</p>}
        </div>

        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            type="submit"
            className="bg-gradient-to-bl from-[#fa2912] to-[#880e00] text-white shadow-lg rounded px-4 py-2 w-full sm:w-auto"
          >
            Add New User
          </button>
          <button
            type="button"
            onClick={() => setShowModal(false)} // Close modal
            className="bg-gray-300 rounded px-4 py-2 w-full sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
