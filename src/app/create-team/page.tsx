import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <form className="space-y-4 ">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Create Team
          </h2>
          <input
            type="text"
            placeholder="Team Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Coach Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Home Ground"
            className="w-full p-2 border rounded"
            required
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
